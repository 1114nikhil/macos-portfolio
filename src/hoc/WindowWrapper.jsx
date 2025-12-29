import { useWindowStore } from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows, closeWindow } = useWindowStore();
    const { isOpen, isMinimized, isMaximized, zIndex } = windows[windowKey];

    const windowRef = useRef(null);
    const handleRef = useRef(null);

    /* OPEN animation */
    useGSAP(() => {
      const el = windowRef.current;
      if (!el || !isOpen || isMinimized) return;

      const isMobile = props.mobile;

      el.style.display = "block";

      if (isMobile) {
        gsap.fromTo(
          el,
          { y: "100%" },
          { y: 0, duration: 0.3, ease: "power3.out" }
        );
      } else {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power3.out" }
        );
      }
    }, [isOpen, isMinimized]);

    /* Drag (disabled when maximized) */
    useGSAP(() => {
      const el = windowRef.current;
      if (!el || isMaximized) return;

      if (props.mobile) {
        // Mobile Drag Logic (Swipe to close)
        const dragConfig = {
          type: "y",
          trigger: el, // Use whole window as trigger
          dragClickables: true,
          zIndexBoost: false,
          allowNativeTouchScrolling: true, // Allow scrolling content
          onDragEnd: function () {
            if (this.y < -100) {
              gsap.to(el, {
                y: -window.innerHeight,
                duration: 0.3,
                ease: "power3.in",
                onComplete: () => closeWindow(windowKey)
              });
            } else {
              gsap.to(el, { y: 0, duration: 0.2, ease: "power3.out" });
            }
          }
        };

        const [instance] = Draggable.create(el, dragConfig);
        return () => instance.kill();
      } else {
        // Desktop Drag Logic
        const [instance] = Draggable.create(el, {
          onPress: () => focusWindow(windowKey),
          dragClickables: true,
        });

        return () => instance.kill();
      }
    }, [isMaximized, props.mobile]);

    /* Clear transforms on maximize (IMPORTANT) */
    useLayoutEffect(() => {
      const el = windowRef.current;
      if (!el) return;

      if (isMaximized) {
        gsap.set(el, { clearProps: "transform" });
      }
    }, [isMaximized]);

    /* Minimize logic (macOS style) */
    useLayoutEffect(() => {
      const el = windowRef.current;
      if (!el) return;

      if (isMinimized) {
        gsap.to(el, {
          scale: 0.2,
          y: window.innerHeight / 2,
          opacity: 0,
          duration: 0.4,
          ease: "power4.in",
          onComplete: () => {
            el.style.display = "none";
          },
        });
      } else if (isOpen) {
        el.style.display = "block";
        gsap.fromTo(
          el,
          {
            scale: 0.2,
            y: window.innerHeight / 2,
            opacity: 0,
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: "power3.out",
          }
        );
      } else {
        // ✅ THIS IS WHAT WAS MISSING
        el.style.display = "none";
      }
    }, [isMinimized, isOpen]);


    return (
      <section
        id={windowKey}
        ref={windowRef}
        style={{ zIndex }}
        className={`absolute pointer-events-auto ${props.mobile ? "!fixed !inset-x-0 !bottom-0 !top-9 !w-full max-w-[100vw] overscroll-none select-none" : isMaximized ? "window-maximized" : "window-normal"
          }`}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.name})`;
  return Wrapped;
};

export default WindowWrapper;

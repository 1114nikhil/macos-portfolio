import React, { useRef, useState, useEffect } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import gsap from "gsap";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const MIN_SCALE = 1;
const MAX_SCALE = 3;

const Resume = ({ mobile }) => {
  const zoomRef = useRef(null);
  const lastTap = useRef(0);

  const [scale, setScale] = useState(1);

  /* -------------------------------
     Pinch to Zoom (Touch)
  -------------------------------- */
  /* -------------------------------
     Pinch to Zoom (Touch)
  -------------------------------- */
  useEffect(() => {
    if (!mobile || !zoomRef.current) return;

    let startDist = 0;
    let startScale = scale;
    let finalScale = scale;

    const getDistance = (touches) => {
      const [a, b] = touches;
      return Math.hypot(b.pageX - a.pageX, b.pageY - a.pageY);
    };

    const onTouchStart = (e) => {
      if (e.touches.length === 2) {
        startDist = getDistance(e.touches);
        startScale = scale;
        finalScale = scale;
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const newDist = getDistance(e.touches);
        const newScale = Math.min(
          MAX_SCALE,
          Math.max(MIN_SCALE, (newDist / startDist) * startScale)
        );

        finalScale = newScale;

        // Visual preview only (relative to current rendered scale)
        gsap.set(zoomRef.current, {
          scale: newScale / scale,
          transformOrigin: "top left",
        });
      }
    };

    const onTouchEnd = (e) => {
      // Commit scale if changed
      if (finalScale !== scale) {
        setScale(finalScale);
        gsap.set(zoomRef.current, { clearProps: "transform" });
      }
    };

    const el = zoomRef.current;
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [mobile, scale]);

  /* -------------------------------
     Double Tap Zoom (iOS style)
  -------------------------------- */
  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      const next = scale > 1 ? 1 : 2;
      setScale(next);
    }
    lastTap.current = now;
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-100">
      {/* Header */}
      <div id="window-header" className="shrink-0">
        <WindowControls target="resume" />
        <h2 className="truncate">Nikhil T. Kochparambil.pdf</h2>
        <a
          href="files/Nikhil T.Kochparambil(Software Engineer).pdf"
          download
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      {/* Viewer */}
      <div
        className="flex-1 overflow-auto "
        onClick={mobile ? handleDoubleTap : undefined}
      >
        <div className="inline-block min-w-full">
          <div
            ref={zoomRef}
            className="origin-top"
          >
            <Document file="files/Nikhil T.Kochparambil(Software Engineer).pdf">
              <Page pageNumber={1} scale={scale} />
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowWrapper(Resume, "resume");

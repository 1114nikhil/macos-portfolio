import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { useWindowStore } from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  return (
    <>
      {/* Header */}
      <div
        id="window-header"
        className="h-10 flex items-center gap-3 px-3 bg-white border-b"
      >
        <WindowControls target="imgfile" />
        <h2 className="text-sm font-medium">{data.name}</h2>
      </div>

      {/* ✅ CONTENT WRAPPER (IMPORTANT) */}
      <div
        className="h-[calc(100%-40px)] bg-neutral-900 flex items-center justify-center"
        style={{
          transform: "translateZ(0)", // ✅ force GPU repaint
        }}
      >
        <img
          src={data.imageUrl}
          alt={data.name}
          draggable={false}
          className="max-h-full max-w-full object-contain"
          style={{
            transform: "none",          // ✅ CRITICAL
            willChange: "auto",         // ✅ CRITICAL
          }}
        />
      </div>
    </>
  );
};

export default WindowWrapper(Image, "imgfile");

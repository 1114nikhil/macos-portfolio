import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { useWindowStore } from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <div className="flex flex-col h-full w-full">
      <div id="window-header" className="shrink-0">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 overflow-y-auto flex-1 bg-white text-black">
        {image && (
          <div className="mb-4">
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        )}
        {subtitle && <h3 className="text-xl font-bold mb-2">{subtitle}</h3>}
        {description &&
          description.map((paragraph, index) => (
            <p key={index} className="mb-2 text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
      </div>
    </div>
  );
};

const TextFile = WindowWrapper(Text, "txtfile");

export default TextFile;
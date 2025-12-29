import { WindowControls } from "#components";
import React from "react";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import { useWindowStore } from "#store/window";
import clsx from "clsx";
import { Search, ChevronLeft } from "lucide-react";

const Finder = ({ mobile }) => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  // Mobile: Local state to toggle between "Root Folder List" and "Detail View"
  const [showDetail, setShowDetail] = React.useState(false);

  // If we change location via sidebar, on mobile we should show detail
  const handleLocationClick = (item) => {
    setActiveLocation(item);
    if (mobile) setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
  };

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");
    if (item.fileType === "img") {
      return openWindow("imgfile", item);
    }
    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div id="window-header" className="shrink-0">
        <div className="flex items-center gap-2">
          {mobile && showDetail ? (
            <div
              className="flex items-center gap-2 cursor-pointer text-blue-500"
              onClick={handleBack}
            >
              <ChevronLeft size={20} />
              <span className="font-medium text-lg">Back</span>
            </div>
          ) : (
            <WindowControls target="finder" />
          )}
        </div>
        <Search className="icon" />
      </div>

      <div className={`bg-white flex-1 overflow-hidden ${mobile ? "flex-col" : "flex"}`}>
        {/* Sidebar / Root List */}
        <div className={clsx(
          "sidebar bg-gray-50 border-r border-gray-200 flex flex-col p-5 overflow-hidden",
          mobile ? "w-full h-full" : "w-48",
          mobile && showDetail && "hidden" // Hide sidebar when showing detail on mobile
        )}>
          <div>
            <h3 className="text-xs font-medium text-gray-400 mb-2">Favourites</h3>
            <ul className={mobile ? "grid grid-cols-3 gap-4" : "space-y-1"}>
              {Object.values(locations).map((item) => (
                <li
                  className={clsx(
                    "cursor-pointer rounded-md transition-all duration-200",
                    mobile
                      ? "flex flex-col items-center justify-center p-4 bg-white shadow-sm border border-gray-100 aspect-square hover:bg-gray-50"
                      : clsx("flex items-center gap-2 px-3 py-2", item.id === activeLocation.id ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-200")
                  )}
                  key={item.id}
                  onClick={() => handleLocationClick(item)}
                >
                  <img src={item.icon || "/images/folder.png"} alt={item.name} className={mobile ? "w-10 h-10 mb-2 object-contain" : "w-4"} />
                  <p className={clsx("text-sm font-medium truncate", mobile && "text-center w-full")}>{item.name}</p>
                </li>
              ))}
              {locations.work.children.map((item) => (
                <li
                  className={clsx(
                    "cursor-pointer rounded-md transition-all duration-200",
                    mobile
                      ? "flex flex-col items-center justify-center p-4 bg-white shadow-sm border border-gray-100 aspect-square hover:bg-gray-50"
                      : clsx("flex items-center gap-2 px-3 py-2", item.id === activeLocation.id ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-200")
                  )}
                  key={item.id}
                  onClick={() => handleLocationClick(item)}
                >
                  <img src={item.icon} alt={item.name} className={mobile ? "w-10 h-10 mb-2 object-contain" : "w-4"} />
                  <p className={clsx("text-sm font-medium truncate", mobile && "text-center w-full")}>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content View */}
        <ul className={clsx(
          "content flex-1 p-8 bg-white relative",
          mobile && "w-full h-full overflow-y-auto",
          mobile && !showDetail && "hidden" // Hide content when NOT showing detail on mobile
        )}>
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={mobile ? "inline-flex flex-col p-4 items-center w-1/3 align-top" : item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} className="object-contain size-16 mb-2" />
              <p className="text-center text-sm font-medium leading-tight">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
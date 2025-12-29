import { WindowControls } from "#components";
import { photosLinks, gallery } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { useWindowStore } from "#store/window";
import { Search, Mail, ChevronLeft } from "lucide-react";
import React, { useState } from 'react';
import clsx from "clsx";

const Photos = ({ mobile }) => {
    const { openWindow } = useWindowStore();
    const [showDetail, setShowDetail] = useState(false);

    // Default Title
    const [activeTitle, setActiveTitle] = useState("Photos");

    const handleAlbumClick = (title) => {
        setActiveTitle(title);
        if (mobile) setShowDetail(true);
    };

    const handleBack = () => {
        setShowDetail(false);
        setActiveTitle("Photos");
    };

    return (
        <div className="flex flex-col h-full w-full">
            <div id="window-header" className="shrink-0">
                {mobile && showDetail ? (
                    <div
                        className="flex items-center gap-2 cursor-pointer text-blue-500"
                        onClick={handleBack}
                    >
                        <ChevronLeft size={20} />
                        <span className="font-medium text-lg">Back</span>
                    </div>
                ) : (
                    <WindowControls target="photos" />
                )}

                {/* Only show tools if NOT in mobile detail (or show different tools) */}
                {(!mobile || !showDetail) && (
                    <div className="flex item-center gap-5">
                        <Mail className="icon" />
                        <Search className="icon" />
                    </div>
                )}
            </div>

            <div className="flex flex-1 w-full overflow-hidden relative">
                {/* SIDEBAR (Album List) */}
                <div className={clsx("sidebar", {
                    "!w-full !flex-col !border-r-0": mobile,
                    "hidden": mobile && showDetail, // Hide when showing detail on mobile
                })}>
                    <h2>Photos</h2>
                    <ul className={clsx({ "grid grid-cols-3 gap-4 p-4": mobile, "space-y-1": !mobile })}>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li
                                key={id}
                                onClick={() => handleAlbumClick(title)}
                                className={clsx(
                                    "cursor-pointer rounded-md transition-all duration-200",
                                    mobile
                                        ? "flex flex-col items-center justify-center p-4 bg-white shadow-sm border border-gray-100 aspect-square hover:bg-gray-50"
                                        : "flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200"
                                )}
                            >
                                <img
                                    src={icon}
                                    alt={title}
                                    className={clsx({ "w-10 h-10 mb-2 object-contain": mobile, "w-4": !mobile })}
                                />
                                <p className={clsx("text-sm font-medium truncate", mobile && "text-center w-full")}>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* GALLERY (Photo Grid) */}
                <div className={clsx("gallery", {
                    "!w-full !h-full !overflow-y-auto": mobile,
                    "hidden": mobile && !showDetail, // Hide when showing root on mobile
                })}>
                    {/* Mobile Title Header inside content */}
                    {mobile && <h3 className="text-xl font-bold p-4 pb-0">{activeTitle}</h3>}

                    <ul>
                        {gallery.map(({ id, img }) => (
                            <li key={id}
                                onClick={() => openWindow("imgfile", {
                                    id,
                                    name: "Gallery image",
                                    icon: "/images/image.png",
                                    kind: "file",
                                    fileType: "img",
                                    imageUrl: img
                                })}>
                                <img src={img} alt={`Gallery image ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow

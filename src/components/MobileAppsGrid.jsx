import React from 'react';
import { dockApps, locations } from '#constants';

const MobileAppsGrid = ({ onAppClick }) => {
    // Combine dockApps and other apps or just show dockApps + others
    // specific logic: filter apps that are not in the bottom dock or show all? 
    // iOS usually shows all on home screen, and repeats in dock if pinned. 
    // For simplicity, let's show all available apps that are 'canOpen' or meaningful.

    // Flattening some structure or just using dockApps for now as primary interaction points.
    // We can also add "socials" or "projects" as app icons.

    const mobileApps = [
        ...dockApps.filter(app => app.id !== 'trash'),
        { id: 'resume', name: 'Resume', icon: 'pdf.png', canOpen: true },
    ];

    const allApps = mobileApps;

    return (
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 px-4 mt-8">
            {allApps.map((app) => (
                <button
                    key={app.id}
                    onClick={() => onAppClick(app)}
                    className="flex flex-col items-center gap-2 group"
                >
                    <div className="w-[60px] h-[60px] bg-white rounded-2xl overflow-hidden shadow-sm group-active:scale-90 transition-transform duration-200">
                        <img
                            src={`/images/${app.icon}`}
                            alt={app.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-white text-xs font-medium drop-shadow-md text-center leading-tight">
                        {app.name}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default MobileAppsGrid;

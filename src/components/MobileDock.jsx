import React from 'react';
import { dockApps } from '../constants'; // Using absolute import path convention from the project if possible, but relative is safer here based on file view
// Actually, checking App.jsx imports, it uses '#components' and '#windows'.
// Let's stick to relative imports for safe local file access unless I'm sure of the alias config. 
// I saw vite.config.js exists, likely configured aliases. 
// package.json has imports: ...
// Let's use relative for now to be safe or check imports in other files.
// Dock.jsx used: import { dockApps } from "#constants";
// So I will use that too.

const MobileDock = ({ onAppClick }) => {
    // Filter for specifically "dock-worthy" apps for mobile, or just take first 4
    const detailedApps = dockApps.slice(0, 4);

    return (
        <div className="absolute bottom-4 left-4 right-4 h-24 bg-white/10 backdrop-blur-2xl rounded-[35px] flex items-center justify-around px-4 border border-white/10 z-50">
            {detailedApps.map((app) => (
                <button
                    key={app.id}
                    onClick={() => onAppClick(app)}
                    className="flex flex-col items-center justify-center gap-1 active:scale-90 transition-transform duration-200"
                >
                    <div className="w-14 h-14 bg-white rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={`/images/${app.icon}`}
                            alt={app.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </button>
            ))}
        </div>
    );
};

export default MobileDock;

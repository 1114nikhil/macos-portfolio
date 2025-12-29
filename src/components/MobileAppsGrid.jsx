import React, { useRef } from 'react';
import { dockApps, locations } from '#constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.from(textRef.current, {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power3.out"
        });
    }, []);

    return (
        <div className="flex flex-col items-center mt-10">
            {/* Animated Welcome Text */}
            <div ref={textRef} className="text-center mb-8 px-6">
                <h1 className="text-2xl font-semibold text-white tracking-wide drop-shadow-md">
                    Hi I am Nikhil
                </h1>
                <p className="text-lg text-white/90 mt-1 drop-shadow-sm font-light">
                    Welcome to my portfolio
                </p>
            </div>

            <div className="grid grid-cols-4 gap-x-4 gap-y-8 px-4 w-full">
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
        </div>
    );
};

export default MobileAppsGrid;

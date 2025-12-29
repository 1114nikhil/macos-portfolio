import React, { useState } from 'react';
import MobileStatusBar from './MobileStatusBar';
import MobileDock from './MobileDock';
import MobileAppsGrid from './MobileAppsGrid';
import { useWindowStore } from '#store/window';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from '#windows';

const IOSLayout = () => {
    // We can reuse the window store if we want to sync state, or use local state for mobile navigation.
    // Since consistency is good, let's try to reuse standard windows but styled for mobile?
    // OR just simple conditional rendering for mobile "pages".

    // The current windows (Safari, Terminal, etc.) might be hardcoded for desktop absolute positioning.
    // `index.css` has some overrides: .window-maximized

    const { windows, openWindow, closeWindow } = useWindowStore();

    // Check if any window is open
    const activeAppId = Object.keys(windows).find(key => windows[key].isOpen);

    const handleAppClick = (app) => {
        if (!app.canOpen) return;
        openWindow(app.id);
    };

    // When an app is open, we show it full screen. 
    // We need a way to go "home". 
    // iOS usually has a home bar.

    const goHome = () => {
        // Close all windows
        Object.keys(windows).forEach(key => {
            if (windows[key].isOpen) closeWindow(key);
        });
    };

    return (
        <div className="w-full h-screen overflow-hidden relative flex flex-col font-sans">
            {/* Background is already on body, but we can add an overlay if needed */}

            {/* Top Status Bar */}
            <MobileStatusBar />

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 w-full overflow-hidden">
                {!activeAppId ? (
                    /* Home Screen */
                    <div className="w-full h-full pt-4 animate-in fade-in zoom-in-95 duration-300">
                        <MobileAppsGrid onAppClick={handleAppClick} />
                    </div>
                ) : (
                    /* Active App View */
                    <div className="w-full h-full bg-white animate-in slide-in-from-bottom duration-300 absolute inset-0 z-20">
                        {/* We render the windows here. 
                   NOTE: The existing windows (Safari, Terminal) are designed to be mounted continuously in App.jsx.
                   If we mount/unmount them here, state might reset unless preserved in store/localstorage.
                   However, for mobile, a fresh open is often fine.
                   
                   BUT, the existing components usually rely on `draggable` and absolute positioning.
                   We need to ensure they take full width/height on mobile.
                   Ref: index.css .window-maximized
               */}

                        {/* Render specific app content based on activeAppId */}
                        {/* This is a placeholder for actual app rendering reuse */}
                        {activeAppId === 'safari' && <Safari mobile={true} />}
                        {activeAppId === 'terminal' && <Terminal mobile={true} />}
                        {activeAppId === 'resume' && <Resume mobile={true} />}
                        {activeAppId === 'finder' && <Finder mobile={true} />}
                        {activeAppId === 'photos' && <Photos mobile={true} />}
                        {activeAppId === 'contact' && <Contact mobile={true} />}
                        {activeAppId === 'txtfile' && <Text mobile={true} />}
                        {activeAppId === 'imgfile' && <Image mobile={true} />}
                        {/* For others, maybe a default wrapper or mapping */}
                    </div>
                )}
            </div>

            {/* Bottom Dock - Only visible on Home Screen */}
            {!activeAppId && <MobileDock onAppClick={handleAppClick} />}

            {/* Home Indicator / Home Bar */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full z-[60] cursor-pointer hover:bg-white/80 transition-colors"
                onClick={goHome}
            />
        </div>
    );
};

export default IOSLayout;

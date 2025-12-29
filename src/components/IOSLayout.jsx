import React, { useState } from 'react';
import MobileStatusBar from './MobileStatusBar';
import MobileDock from './MobileDock';
import MobileAppsGrid from './MobileAppsGrid';
import { useWindowStore } from '#store/window';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from '#windows';

const IOSLayout = () => {
    const { windows, openWindow, closeWindow } = useWindowStore();

    // Mapping of window keys to their components
    const APPS = {
        safari: Safari,
        terminal: Terminal,
        resume: Resume,
        finder: Finder,
        photos: Photos,
        contact: Contact,
        txtfile: Text,
        imgfile: Image
    };

    // Check if any window is open
    const isAnyAppOpen = Object.values(windows).some(win => win.isOpen);

    const handleAppClick = (app) => {
        if (!app.canOpen) return;
        openWindow(app.id);
    };

    const goHome = () => {
        // Close all windows
        Object.keys(windows).forEach(key => {
            if (windows[key].isOpen) closeWindow(key);
        });
    };

    return (
        <div className="w-full h-screen overflow-hidden relative flex flex-col font-sans">
            {/* Top Status Bar */}
            <MobileStatusBar />

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 w-full overflow-hidden">
                {/* Home Screen Layer - Always rendered */}
                <div
                    className={`absolute inset-0 w-full h-full pt-4 transition-transform duration-500 ease-out origin-center ${isAnyAppOpen ? 'z-0 scale-90 opacity-100 pointer-events-none' : 'z-10 scale-100 opacity-100'
                        }`}
                >
                    <MobileAppsGrid onAppClick={handleAppClick} />
                    {/* Dock behaves as part of home screen */}
                    <MobileDock onAppClick={handleAppClick} />
                </div>

                {/* Active Apps View - Render ALL open apps */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {/* We use pointer-events-none on container so clicks pass through to home if no app is there (though full screen apps block it). 
                        But individual apps need pointer-events-auto. 
                        Actually, WindowWrapper makes them fixed full screen, so this container doesn't matter much 
                        but let's keep it for structure. 
                    */}
                    {Object.keys(windows).map((key) => {
                        const win = windows[key];
                        const Component = APPS[key];
                        if (win.isOpen && Component) {
                            return <Component key={key} mobile={true} />;
                        }
                        return null;
                    })}
                </div>
            </div>

            {/* Home Indicator / Home Bar - Always on top */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full z-[60] cursor-pointer hover:bg-white/80 transition-colors"
                onClick={goHome}
            />
        </div>
    );
};

export default IOSLayout;

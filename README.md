# Portfolio Project Documentation

## 1. Introduction
This project is a high-fidelity generic web portfolio that mimics the **macOS** desktop experience on larger screens and an **iOS** interface on mobile devices. It allows users to interact with "apps" (windows) such as Finder, Photos, Terminal, Safari, and Resume, featuring real-time animations, drag-and-drop capabilities, and gesture support.

## 2. Technology Stack
*   **Framework:** React 18
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS (Vanilla CSS for core system styles)
*   **Animations:** GSAP (GreenSock Animation Platform) & @gsap/react
    *   Plugins: `Draggable`
*   **State Management:** Zustand
*   **Icons:** Lucide React
*   **Deployment:** Firebase Hosting

## 3. Project Structure
The source code is organized as follows:

```
src/
├── components/       # Shared UI components (Dock, StatusBar, Layouts)
│   ├── IOSLayout.jsx # Manages mobile home screen & active apps
│   ├── MobileAppsGrid.jsx # Home screen grid
│   ├── WindowControls.jsx # Unix/Mac window buttons
├── constants/        # Static data (dock items, text content)
├── hoc/              # Higher-Order Components
│   └── WindowWrapper.jsx # Wraps apps with Drag, Resize & Animation logic
├── hooks/            # Custom hooks
├── store/            # Zustand stores
│   ├── window.js     # Manages open/active windows & z-indexes
│   └── location.js   # Manages Finder navigation state
├── windows/          # Individual App Components
│   ├── Finder.jsx    # File explorer (Responsive)
│   ├── Photos.jsx    # Gallery (Resonsive)
│   ├── Terminal.jsx  # Interactive CLI simulation
│   ├── Resume.jsx    # PDF Viewer
│   └── Safari.jsx    # Browser simulation
└── App.jsx           # Main entry point & device detection
```

## 4. Key Architectures & Features

### 4.1. Responsive Logic (`App.jsx`)
The application listens for window resize events.
*   **Width > 640px:** Renders the **macOS Desktop** layout (Background wallpaper, Draggable windows, Bottom Dock).
*   **Width <= 640px:** Renders the **iOS Layout** (App Grid, Status Bar, Full-screen apps).

### 4.2. Window Management (`WindowWrapper.jsx`)
This HOC is the core of the interaction model.
*   **Desktop:**
    *   Wrapped using `gsap.Draggable`.
    *   Supports minimize (Magic Genie effect) and maximize.
    *   Click-to-focus (Z-index management).
*   **Mobile:**
    *   Forces full-screen fixed positioning.
    *   **Gesture:** Implements a "Swipe Up to Close" logic using `Draggable` with `trigger: el` and vertical locking.
    *   **Scrolling:** Enables `allowNativeTouchScrolling` to permit internal content scrolling while still detecting large drag gestures for closing.

### 4.3. Mobile Navigation (`IOSLayout.jsx`)
*   **Stacking:** Multiple apps can be open; they stack based on Z-index.
*   **Home Screen:** The generic "Home" (Grid + Dock) scales down (`scale-90`) when an app works to simulate iOS multitasking aesthetics.
*   **Welcome Animation:** A GSAP-driven welcome message greets users on the home screen.

### 4.4. Consistent App Layouts
Apps like **Finder** and **Photos** share a unified structure to handle mobile vs desktop views:
*   **Flex Architecture:** `flex flex-col h-full w-full`.
*   **Navigation:** Mobile views use a "Drill-down" list with a Back button, while Desktop views use a Sidebar+Content split.
*   **Visibility:** CSS toggling (`hidden` class) is used instead of conditional rendering to preserve component state and event listeners during navigation.

## 5. Technical Implementation Details

### Finder & Photos
Modified to ensure strictly controlled overflow.
*   **Sidebar (Root):** `overflow-hidden` (non-scrollable) on mobile to improve gesture reliability, or `overflow-y-auto` where native behavior is desired.
*   **Content (Detail):** `flex-1 overflow-y-auto` to allow content scrolling.

### Mobile Gestures (Fixes)
The swipe-to-close gesture faced issues with scrolling content.
*   **Solution:** The logic allows native touch scrolling (`allowNativeTouchScrolling: true`) but monitors the `y` transform. If a user drags the window beyond a threshold (`y < -100`), the `onDragEnd` callback triggers the close (slide up) animation.

## 6. Setup & Deployment

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

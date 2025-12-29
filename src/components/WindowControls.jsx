import React from 'react'
import { useWindowStore } from '#store/window';

const WindowControls = ({ target }) => {
  const { closeWindow, minimizeWindow, toggleMaximizeWindow } = useWindowStore();
  return (
    <div id="window-controls" className="max-md:hidden">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" onClick={() => minimizeWindow(target)} />
      <div className="maximize" onClick={() => toggleMaximizeWindow(target)} />
    </div>
  )
}

export default WindowControls

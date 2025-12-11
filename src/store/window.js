import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { immer } from "zustand/middleware/immer";
import {create} from "zustand";

const useWindowStore = create(
    immer((set) =>({
    window:WINDOW_CONFIG,
    nextZIndex:INITIAL_Z_INDEX+1,

    openWindow:(windowKey, data=null)=>set((state)=>{
        const win = state.window[windowKey];
      
            win.isOpen=true;
            win.data=data;
            win.zIndex=state.nextZIndex;
            state.nextZIndex+=1;
        
    }),
    closeWindow:(windowKey)=>set((state)=>{
         const win = state.window[windowKey];
      
            win.isOpen=false;
            win.data=null;
            win.zIndex=INITIAL_Z_INDEX;
    }),
    focusWindow:(windowKey)=>set((state)=>{
   const win = state.window[windowKey];

            win.zIndex=state.nextZIndex++;
    }),
}))
);

export default useWindowStore;
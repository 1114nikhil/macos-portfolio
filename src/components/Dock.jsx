import { dockApps } from '#constants';
import { useGSAP } from '@gsap/react';
import {useRef} from 'react'
import { Tooltip } from 'react-tooltip';
import {gsap} from 'gsap'
import useWindowStore from '#store/window';


const Dock = () => {
    const {openWindow,closeWindow,windows}=useWindowStore();
    const dockRef=useRef(null);
    useGSAP(()=>{
        const dock=dockRef.current;
        if(!dock)return;

        const icon= dock.querySelectorAll(".dock-icon");

        const animateIcon=(mouseX)=>{
            const {left}=dock.getBoundingClientRect();

            icon.forEach((icon)=>{
                const{left:iconLeft,width}= icon.getBoundingClientRect();
                const center = iconLeft-left+width/2;
                const distance=Math.abs(mouseX-center);
                const intensity = Math.exp(-(distance ** 2.5) / 2000);

                gsap.to(icon,{
                    scale:1+0.25 * intensity,
                    y:-15*intensity,
                    duration:0.2,
                    ease:"power1.out"
                })
            })
        }

        const handleMouseMove=(e)=>{
            const {left}=dock.getBoundingClientRect();
            animateIcon(e.clientX - left);
        }

        const restIcons=()=>icon.forEach((icon)=>gsap.to(icon,{
            scale:1,
            y:0,
            direction:0.3,
            ease:"power1.out"
        }))
         dock.addEventListener('mousemove',handleMouseMove);
    dock.addEventListener('mouseleave',restIcons);

    return()=>{
        dock.removeEventListener('mousemove',handleMouseMove);
        dock.removeEventListener('mouseleave',restIcons);
    }
    },[])
   
    const toggleApp=(app)=>{
        console.log(app)
        if(!app.canOpen) return;

        const window= windows[app.id];

        if(window.isOpen){
            closeWindow(app.id)
        }else{
            openWindow(app.id)
        }

        console.log(windows)
    }
  return (
    <section id="dock">
      <div ref={dockRef} className='dock-container'>
        {dockApps.map((app)=>(
            <div key={app.id} className="relative flex justify-center">
                <button type="button" 
                className='dock-icon' 
                area-label={app.name} 
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={app.name}
                data-tooltip-delay-show={150}
                disabled={!app.canOpen}
                onClick={()=>toggleApp(app)}
                >
                    <img src={`/images/${app.icon}`}
                    alt='name'
                    loading='lazy'
                    className={app.canOpen?"":"opacity-60"}></img>
                </button>
            </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip-custom"/>
      </div>
    </section>
  )
}

export default Dock

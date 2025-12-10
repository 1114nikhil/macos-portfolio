import {useRef} from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react';

const FONT_WEIGHT={
  subTitle:{min:200,max:600,default:200},
  title:{min:300,max:700,default:300}
}
const renderText = (text,className,baseWeight=400)=>{
    return [...text].map((char,i)=>{
       return( <span
        key={i}
        className={className}
        style={{fontVariationSettings:`'wght' ${baseWeight}`}}
        >
            {char===' ' ? '\u00A0' : char  }
        </span>)
    });
};
const setupTextHover=(container,type)=>{
  if(!container) return;
  const letters = container.querySelectorAll('span'); 

  const {min,max,default:base}=FONT_WEIGHT[type];

  const animateLetter=(letter,weight,duration=0.25)=>{
    return gsap.to(letter,{
      fontVariationSettings:`'wght' ${weight}`,
      duration:duration,
      ease:"power1.out"
    });
  }

const handleMouseMove = (e) => {
  const { left } = container.getBoundingClientRect();
  const mouseX = e.clientX - left;

  letters.forEach((letter) => {
    const { left: l, width: w } = letter.getBoundingClientRect();
    const distance = Math.abs(mouseX - (l - left + w / 2));
    const intensity = Math.exp(-(distance ** 2) / 2000);

    const weight = Math.min(
      max,
      Math.max(min, base + (max - base) * intensity)
    );

    animateLetter(letter, weight);
  });
};
const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base,0.3));

container.addEventListener(`mousemove`,handleMouseMove);
container.addEventListener(`mouseleave`,handleMouseLeave);


return () => {
  container.removeEventListener(`mousemove`,handleMouseMove);
  container.removeEventListener(`mouseleave`,handleMouseLeave); 
}
}
const Welcome = () => {
    const titleRef =useRef(null);
    const subTitleRef =useRef(null);
    useGSAP(() => {
      const titleCleanUp=setupTextHover(titleRef.current,'title');
      const subTitleCleanUp=setupTextHover(subTitleRef.current,'subTitle');

      return()=>{
        titleCleanUp();
        subTitleCleanUp();
      }
    }, []);
  return <section id="welcome">
    <p ref={subTitleRef}>{renderText(
      "Hello, I'm Nikhil Welcome to my",
      `text-4xl font-georama`,
      300)}</p>
    <h1 ref={titleRef} className="mt-7">{renderText("Portfolio",'text-9xl italic font-georama')}</h1>
  </section>
}

export default Welcome

import { useMotionValue } from "framer-motion"
import { useContext, useEffect } from "react";

import ModelsContext from "./ModelsContext";

export default function useWrapperScroll(){
    const {wrapperRef} = useContext(ModelsContext);

    const scrollY = useMotionValue(0);
    const scrollYProgress = useMotionValue(0);

    useEffect(()=>{
        const el = wrapperRef.current
        if(el){
            const updateScrollValue = ()=>{
                const { scrollTop, scrollHeight, offsetHeight } = el;

                const fullScroll = scrollHeight - offsetHeight;

                scrollY.set(scrollTop);
                scrollYProgress.set(scrollTop/fullScroll);

            }

            el.addEventListener('scroll',updateScrollValue)
            return() => el.removeEventListener('scroll',updateScrollValue);
        }
    },[scrollY,scrollYProgress,wrapperRef]);

    return {scrollY,scrollYProgress};
}
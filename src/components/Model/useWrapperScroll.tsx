import {useMotionValue} from 'framer-motion';

import { useContext, useEffect} from 'react';
import ModelsContext from './ModelsContext';

export default function useWrapperScroll(){
    const {wrapperRef} = useContext(ModelsContext);

    const scrollY = useMotionValue(0);
    const scrollYProgress = useMotionValue(0);

    useEffect(()=>{
        const wrapper = wrapperRef.current
       if(wrapper){
            const updateScrollValue = ()=>{
                const { scrollTop,scrollHeight,offsetHeight} = wrapper;

                const fullScroll = scrollHeight-offsetHeight //Altura máxima do Scroll
                
                scrollY.set(scrollTop);
                scrollYProgress.set(scrollTop/fullScroll);
            };

            wrapper.addEventListener('scroll',updateScrollValue)
            return ()=>wrapper?.removeEventListener('scroll',updateScrollValue);
        }

       
    },[scrollY,scrollYProgress,wrapperRef]);

    return {scrollY,scrollYProgress};
}
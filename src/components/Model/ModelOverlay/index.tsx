import React, { useCallback, useLayoutEffect, useState } from 'react';
import {useTransform} from 'framer-motion';

import useWrapperScroll from '../useWrapperScroll';
import { ModelOverlayDiv } from './styles';

import {Car} from '../ModelsContext'

interface Props{
    model:Car
}

type SectionDimension = Pick<HTMLDivElement,'offsetTop' | 'offsetHeight'>

const ModelOverlay:React.FC<Props> = ({children,model})=>{
    const getSectionDimension = useCallback(()=>{
        return{
            offsetTop: model.blockRef.current?.offsetTop,
            offsetHeight: model.blockRef.current?.offsetHeight
        } as SectionDimension
    },[model.blockRef]);

    const[dimension,setDimension] = useState<SectionDimension>(
        getSectionDimension()
    )

    useLayoutEffect(()=>{
        function onResize(){
            window.requestAnimationFrame(()=>setDimension(getSectionDimension()));
        }

        window.addEventListener('resize',onResize);

        return()=>window.removeEventListener('resize',onResize);
    },[getSectionDimension]);

    const {scrollY} = useWrapperScroll();

    const scrollProgress = useTransform(scrollY,y=>(y-dimension.offsetTop)/dimension.offsetHeight);

    const opacity = useTransform(scrollProgress,[-0.5,-0.1,0.1,0.5],[0,1,1,0]);

    const pointerEvents = useTransform(opacity, value => value > 0?'auto':'none');

    return(
        <ModelOverlayDiv style={{opacity, pointerEvents}}>
            {children}
        </ModelOverlayDiv>
    )
}

export default ModelOverlay;
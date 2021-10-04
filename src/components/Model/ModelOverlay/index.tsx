import React, { useCallback, useLayoutEffect, useState } from "react";

import useWrapperScroll from "../useWrapperScroll";
import {Car} from '../ModelsContext';

import { Container }  from "./styles";
import { useTransform } from "framer-motion";

interface Props{
    model:Car;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay : React.FC<Props> = ({model, children })=>{

    const getSectionDimensions = useCallback(()=>{
        return {
            offsetTop : model.sectionRef.current?.offsetTop,
            offsetHeight: model.sectionRef.current?.offsetHeight
        } as SectionDimensions
    },[model.sectionRef]);

    const [dimension,setDimension ] = useState<SectionDimensions>(
       getSectionDimensions()
    );

    useLayoutEffect(()=>{
        function onResize(){
            window.requestAnimationFrame(()=> setDimension(getSectionDimensions()));
        }

        window.addEventListener('resize',onResize);

        return () => window.removeEventListener('resize',onResize);
    },[getSectionDimensions]);

    const{ scrollY } = useWrapperScroll();

    const sectionScrollProgress = useTransform(scrollY,y => (y - dimension.offsetTop)/dimension.offsetHeight);

    const opacity = useTransform(sectionScrollProgress,[-0.42,-0.05,0.05,0.42],[0,1,1,0])

    const pointerEvents = useTransform(opacity, value => value  > 0?'auto':'none')

    return(
        <Container style={{opacity, pointerEvents}}>
            {children}
        </Container>
    )
}

export default ModelOverlay;
import React, { useEffect, useRef } from 'react';
import { ModelContainer } from './styles';

import useModel from '../useModel'

interface Props extends React.HTMLAttributes<HTMLDivElement>{
    model:string,
    overlay:React.ReactNode
}

const ModelBlock:React.FC<Props> = ({model,overlay, children, ...props})=>{
    const {setNewModel} = useModel(model);

    const blockRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(blockRef.current){
            setNewModel({modelName:model,overlay,blockRef})
        }
    },[blockRef,model,overlay,setNewModel]);
    
    return(
        <ModelContainer ref={blockRef} {...props}>
            {children}
        </ModelContainer>
    );
}

export default ModelBlock;
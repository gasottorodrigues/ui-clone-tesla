import React, {useRef, useEffect } from 'react';
import useModel from '../useModel';
import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
    modelName: string;
    overlayNode: React.ReactNode;
    img: string;
}

const ModelSection : React.FC<Props> = ({modelName, overlayNode, img, children, ...props})=>{
    const { registerModel } = useModel(modelName)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(sectionRef.current){
            registerModel({
                modelName,
                overlayNode,
                sectionRef
            })
        }
    },[modelName,overlayNode,sectionRef, registerModel]);

    return (
        <Container ref={sectionRef} style={{backgroundImage : img}} {...props}>
            {children}
        </Container>
    );
    }

export default ModelSection;
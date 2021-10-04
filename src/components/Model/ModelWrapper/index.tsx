import React, {useCallback, useRef, useState} from 'react';
import { Container, OverlayRoot } from './styles';

import ModelsContext, { Car } from '../ModelsContext';
import ModelOverlay from '../ModelOverlay'


const ModelWrapper : React.FC = ({children})=>{

    const wrapperRef = useRef<HTMLDivElement>(null);
    const[registeredModels, setRegisteredModels] = useState<Car[]>([]);

    const registerModel = useCallback((model:Car)=>{
        setRegisteredModels(state => [...state,model])
    },[]);

    const unregisterModel = useCallback((modelName:string) =>{
        setRegisteredModels(state => state.filter(model=>model.modelName !==  modelName))
    },[]);

    const getModel = useCallback((modelName:string)=>{
        return registeredModels.find(item=>item.modelName === modelName) || null
    },[registeredModels])

    return (
        <ModelsContext.Provider 
            value={{
                wrapperRef,
                registeredModels,
                registerModel,
                unregisterModel,
                getModel
            }}
        >
            <Container ref={wrapperRef}>
                <OverlayRoot>
                    {registeredModels.map(item => (
                        <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
                    ))}
                </OverlayRoot>

                {children}
            </Container>
        </ModelsContext.Provider>
    );
}

export default ModelWrapper;
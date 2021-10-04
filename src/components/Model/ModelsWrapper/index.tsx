import React, { useCallback, useRef, useState } from 'react';

import ModelOverlay from '../ModelOverlay';
import ModelsContext, { Car } from '../ModelsContext';

import { WrapperContainer, Overlays } from './styles';

const ModelsWrapper:React.FC = ({children})=>{
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [registeredModels,setRegisteredModels] = useState<Car[]>([]);
    
    const setNewModel = useCallback((model:Car)=>{
        setRegisteredModels(state=>[...state,model])
    },[]);

    const removeModel = useCallback((modelName:string)=>{
        setRegisteredModels(state=>state.filter(model =>  model.modelName !== modelName))
    },[]);

    const getModelByName = useCallback((modelName:string)=>{
        return registeredModels.find(model=>model.modelName ===modelName) || null
    },[registeredModels]);
    return(
        <ModelsContext.Provider value={{
            wrapperRef,
            registeredModels,
            setNewModel,
            removeModel,
            getModelByName
        }}>
            <WrapperContainer ref={wrapperRef}>
                <Overlays>
                    {
                        registeredModels.map(model=>(
                            <ModelOverlay key={model.modelName} model={model}>{model.overlay}</ModelOverlay>
                        ))
                    }
                </Overlays>

                {children}
            </WrapperContainer>
        </ModelsContext.Provider>
    );

    
}

export default ModelsWrapper;
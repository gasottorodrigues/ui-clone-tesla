import React, {ReactNode} from 'react';

export interface Car{
    modelName: string,                     //Nome do modelo do carro
    overlay: ReactNode,                    //Overlay específico desse carro
    blockRef: React.RefObject<HTMLElement> //Referencia ao bloco relacionado àquele Carro
}

interface ModelsContext{
    wrapperRef: React.RefObject<HTMLElement>,
    registeredModels: Car[],
    setNewModel: (model: Car) => void,
    removeModel: (modelName: string) => void,
    getModelByName: (modelName: string) => Car | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)
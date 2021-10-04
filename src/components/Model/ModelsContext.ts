import React, { ReactNode } from "react";

export interface Car{
    modelName: string;
    overlayNode: ReactNode;
    sectionRef: React.RefObject<HTMLElement>;
}

interface ModelsContext{
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: Car[]
    registerModel: (model:Car) => void
    unregisterModel: (modelName:string) => void
    getModel: (modelName:string) => Car | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)
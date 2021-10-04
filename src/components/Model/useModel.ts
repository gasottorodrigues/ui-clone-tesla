import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName:string){
    const {registerModel,unregisterModel,getModel} = useContext(ModelsContext)

    useEffect(()=>{
        return ()=> unregisterModel(modelName)
    },[modelName,unregisterModel]);

    const Model = useCallback(()=>{
        getModel(modelName)
    },[getModel,modelName])

    return { registerModel, Model}
}
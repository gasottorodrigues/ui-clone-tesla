import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName:string){
    const {setNewModel,removeModel, getModelByName} = useContext(ModelsContext)

    useEffect(()=>{
        return ()=>removeModel(modelName);
    },[modelName, removeModel]);

    const getModel = useCallback(()=>{
        getModelByName(modelName)
    },[getModelByName,modelName]);

    return {setNewModel,getModel}
}
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
    const {registerModel, unregisterModel, getModelByName} = useContext(ModelsContext);

    useEffect(() => {
        return () => unregisterModel(modelName)
    }, [modelName, unregisterModel])
    
}
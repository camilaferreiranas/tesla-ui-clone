import React from 'react';
import CarModel from './CarModel';

export default interface ModelContext {
    wrapperRef: React.RefObject<HTMLElement>;
    registeredModels: CarModel[]; 
    registerModel: (model: CarModel) => void; 
    unregisterModel: (modelName: string) => void;
    getModelByName: (modelName: string) => CarModel | null
}
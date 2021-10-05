import { ReactNode } from "react";

export default interface CarModel {
    modelName: string; 
    overlayNode: ReactNode; 
    sectionRef: React.RefObject<HTMLElement>;
}
import React from "react";
import {Container,Heading, Buttons} from './styles';

interface Props {
   label: string; 
   description: string;  
}

const DefaultOverlaycontent: React.FC<Props> = ({
    label, description
}) => {
    return(
        <>
        <Heading>
            <h1>{label}</h1>
            <h2>{description}</h2>
        </Heading>

        <Buttons>
            <button>Custom Order</button>
            <button className="white">Existing Inventory</button>
        </Buttons>
        </>
    )
}

export default DefaultOverlaycontent;
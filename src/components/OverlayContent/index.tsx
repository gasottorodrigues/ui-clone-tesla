import React from 'react';
import {OverlayButtons, OverlayContentContainer, OverlayHeader } from './styles';

interface Props{
    label:string,
    desc:string
}

const OverlayContent:React.FC<Props> = ({label,desc})=>{
    return (
        <OverlayContentContainer>
            <OverlayHeader>
                <h1>{label}</h1>
                <h2>{desc}</h2>
            </OverlayHeader>

            <OverlayButtons>
                <button>Custom Order</button>
                <button className="white-bt">Existing Inventory</button>
            </OverlayButtons>
        </OverlayContentContainer>
    );
}

export default OverlayContent;

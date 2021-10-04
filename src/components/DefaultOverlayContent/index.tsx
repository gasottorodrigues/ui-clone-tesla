import React from 'react';
import { Container, Head, Buttons } from './styles';

interface Props{
    label: String;
    description: String;
}

const DefaultOverlayContent : React.FC<Props> = ({label, description})=>{
return (
    <Container>
        <Head>
            <h1>{label}</h1>
            <h2>{description}</h2>
        </Head>

        <Buttons>
            <button>Custom Order</button>
            <button className="white-bt">Existing Inventory</button>
        </Buttons>
    </Container>
);
}

export default DefaultOverlayContent;
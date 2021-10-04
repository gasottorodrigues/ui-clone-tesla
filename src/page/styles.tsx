import styled from "styled-components";

import img1 from '../assets/teslaA.jpg';
import img2 from '../assets/teslaB.jpg';
import img3 from '../assets/teslaC.jpg';
import img4 from '../assets/teslaD.jpg';


export const PageContainer = styled.div`

    .car-bg{
        background-size:cover;
        background-position-y: bottom;
        background-position-x: center;
    }

    .car-bg:nth-child(1) {
    background-image: url(${img1});
    }
    .car-bg:nth-child(2) {
    background-image: url(${img2});
    }
    .car-bg:nth-child(3) {
    background-image: url(${img3});
    }
    .car-bg:nth-child(4) {
    background-image: url(${img4});
    }
    .car-bg:nth-child(5) {
    background-image: #a9fdac;
    }
    .car-bg:nth-child(6) {
    background-image: #90f29c;
    }
    .car-bg:nth-child(7) {
    background-image: #77e68c;
    }
`;


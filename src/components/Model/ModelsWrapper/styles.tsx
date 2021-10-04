import styled from "styled-components";

export const WrapperContainer =styled.div`
    height:100vh;
    
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
`;

export const Overlays=styled.div`
    position:sticky;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
`;
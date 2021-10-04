import styled from "styled-components";

export const OverlayContentContainer = styled.div`
    width:100%; 
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    flex:1;

    background-color:rgba(255,255,255,0.05);
`;

export const OverlayHeader = styled.div`
    margin-top:20vh;
    text-align:center;

    >h1{
        font-weight: 500;
        font-size:40pt;
        line-height: 48pt;
        color:#27292b;
    }

    >h2{
       font-weight : normal;
       font-size:14pt;
       line-height: 20pt;
       color:#424344;
    }
`;

export const OverlayButtons = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom:20vh;

    >button{
        background-color:#1a1720;
        color:#fff;
        opacity: 0.8;

        font-size:12pt;
        font-weight: 500;
        letter-spacing: 0.4pt;
        text-transform: uppercase;

        padding:13px 40px;
        border-radius: 20px;
        border:none;
        outline:none;

        cursor:pointer;

        &.white-bt{
            background:#fff;
            color:#1a1720;
            opacity:0.65;
        }

        & + button{
            margin:10px 0 0 0;
        }
    }

    @media(min-width: 600px){
        flex-direction:row;
        margin-bottom:30vh;

        > button + button{
            margin:0 0 0 10px;
        }

    }
`;
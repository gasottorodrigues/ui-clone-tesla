import styled from "styled-components";
import { motion } from 'framer-motion';
import { LogoSVG, BurgerSVG } from "./icons";

export const MenuContainer = styled.div`
    position:sticky;
    top:0;
    left:0;
    right:0;
    bottom:0;

    z-index:1;

`;

export const Header = styled.header`
    position:fixed;
    top:0;

    display:flex;
    justify-content: space-between;
    align-items: center;

    width:100%;
    padding:20px 100px;
`;

export const Logo = styled(LogoSVG)`
    height:32px;
    cursor:pointer;
`;

export const Menu = styled(BurgerSVG)`
    height:32px;
    cursor:pointer;
`;

export const Footer = styled(motion.footer)`
    position:fixed;
    bottom:0;
    left:0;
    right:0;

    margin-bottom:30px;

    > ul{
        list-style:none;

        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > li{
            font-size:14pt;
            color:#393c41;

            cursor:pointer;

            &+ li{
                margin:10px 0 0 0;
            }

            &:hover{
                color:#000;
            }
        }

    }

    @media(min-width:600px){
        > ul{
            flex-direction: row;

            > li + li{
                margin: 0 0 0 10px;
            }
        }
    }
`;
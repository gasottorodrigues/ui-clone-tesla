import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';
import {useTransform} from 'framer-motion';

import { Header, Footer, MenuContainer , Logo, Menu} from './styles';

const MenuOverlay:React.FC = ()=>{

    const {scrollYProgress} = useWrapperScroll();

    const opacity = useTransform(scrollYProgress,[0.9,1],[0,1])
    return(
        <MenuContainer>
            <Header>
                <Logo />
                <Menu />
            </Header>

            <Footer style={{opacity}}>
                <ul>
                    <li>Gabriel Sotto Rodrigues</li>
                    <li>Made with ❤️</li>
                    <li>Octouber/2021</li>
                </ul>
            </Footer>
        </MenuContainer>
    );
}

export default MenuOverlay;
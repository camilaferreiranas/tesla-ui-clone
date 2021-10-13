import React from 'react';
import useWrapperScroll from '../Model/useWraperScroll';
import {useTransform} from 'framer-motion'
import {Container, Header, Logo, Burger, Footer } from './styles';
const UniqueOverLay : React.FC = () => {

    const { scrollYProgress} = useWrapperScroll();
    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])
    return(
        <Container>
            <Header>
                <Logo />
                <Burger />
            </Header>


            <Footer style={{opacity}}>
                <ul>
                    <li>
                        <a href="#">Tesla UI Clone</a>
                    </li>
                    <li>
                        <a href="#">feito por</a>
                    </li>
                    <li>
                        <a href="https://github.com/camilaferreiranas">Camila Ferreira</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    );
}

export default UniqueOverLay;
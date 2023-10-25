import React from 'react';
import MenuComponent from '../../components/Menu';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import Button from '../../components/Button';
import { Container, GridItem, TwelveColumnsGrid } from '../../styles/styles';
import { MdOutlineFeedback, MdOutlineInfo, MdOutlineWhatsapp } from 'react-icons/md';
import { Footer } from '../../components/Footer';

const Home = () => {
    const onClickGoTo = (url: string) => {
        if (url !== "" || url !== null) {
            window.open(url)
        }
    }
    return (
            <TwelveColumnsGrid>
                <GridItem gridSpan={12} gridSpanRow={2}>
                    <MenuComponent />
                </GridItem>
                <GridItem gridSpan={12} gridSpanRow={10}>
                    <Container $height='78vh'>
                        <Button text={"LinkedIn"} buttonIcon={<AiOutlineLinkedin />} onClick={() => onClickGoTo("onClickGoTo")} />
                        <Button text={"Curriculo"} buttonIcon={<MdOutlineFeedback />} />
                        <Button text={"GitHub"} buttonIcon={<AiOutlineGithub />} />
                        <Button text={"WhatsApp"} buttonIcon={<MdOutlineWhatsapp />} />
                        <Button text={"Sobre mim"} buttonIcon={<MdOutlineInfo />} />
                    </Container>
                </GridItem>
                <GridItem gridSpan={12} gridSpanRow={2}>
                    <Footer />
                </GridItem>
            </TwelveColumnsGrid>
    )
}

export default Home; 
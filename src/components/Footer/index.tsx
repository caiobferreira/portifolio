import { Container, GridItem, Title, TwelveColumnsGrid } from "../../styles/styles"


export const Footer = () => {

    return (
            <TwelveColumnsGrid>
                <GridItem gridSpan={4}>
                    <Title></Title>
                </GridItem>
                <GridItem gridSpan={7}>
                    <Title>Developed by Caio Banhos Ferreira</Title>
                </GridItem>
                <GridItem gridSpan={1}>
                    <Title>Teste</Title>
                </GridItem>
            </TwelveColumnsGrid>

    )
}
import { styled } from "styled-components";


export const Container = styled.div<{$height?: string; }>`
display: flex;
flex-direction: column;
height: 100%;
height: ${props => props.$height || '100%'};
background-color: #FFFFFF;
align-items: center;
`
export const Button = styled.button`
  width: 90%;
  margin: 1%;
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s, transform 0.3s;

  &::before {
    content: '';
    background-color: #2c3e50;
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    bottom: 0;
    transition: height 0.3s;
    z-index: -1;
  }

  &:hover {
    background-color: #2980b9;
    transform: scale(1.1);
  }

  &:hover::before {
    height: 100%;
  }
`
export const Title = styled.h1`
font-size: 16px;
font-family: 'Roboto', sans-serif;
`
export const TwelveColumnsGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: #f0f0f0;
  padding: 1px;
  border: 1px solid #ccc;
`;

export const GridItem = styled.div<{ gridSpan?: number, gridSpanRow?: number }>`
  grid-column: span ${props => props.gridSpan || 12};
  grid-row: span ${props => props.gridSpanRow || 12};
`;

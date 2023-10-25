import React from 'react'
import { ButtonProps } from '../../types/ButtonType';
import { Button } from '../../styles/styles';


const ButtonComponent = ({text, buttonIcon}: ButtonProps) => {
    return(
    <Button>   
    {text}
    {buttonIcon}
    </Button>
    )
}

export default ButtonComponent;
import React from 'react';
import './button.component.scss';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile'];
const COLORSCHEME = ['primary', 'red', 'blue', 'green'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize  = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLORSCHEME.includes(buttonColor) ? buttonColor : COLORSCHEME[0];

    return (
        <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={onClick}
        type={type}
        >{children}</button>
    )
}
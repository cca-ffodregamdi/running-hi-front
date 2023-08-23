import React from 'react';
import styled from 'styled-components';

let Sun, Moon;

Sun = Moon = styled.svg`
    margin-top: auto;
    cursor: pointer;
    transition: all 0.5s linear;
    `;

    const Toggle = ({theme, toggleTheme}) => {
        console.log(toggleTheme);

        return(
            <div onClick = {toggleTheme}>
                {theme === 'light' ? (
                    <Moon>
                    </Moon>
                ) : (
                    <Sun>
                    </Sun>
                )
            }
            </div>
        );
    };

    export default Toggle;
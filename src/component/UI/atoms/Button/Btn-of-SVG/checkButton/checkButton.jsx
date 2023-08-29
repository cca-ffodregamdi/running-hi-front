import React from 'react';
import styled from 'styled-components';
import { useDarkModeContext } from '../../../../context/DarkModeContext';

const StyledCheckButton = styled.button`
  background-color: ${props => (props.darkMode ? 'black' : 'white')};
  color: ${props => (props.darkMode ? 'white' : 'black')};
  // ... other styles
`;

const CheckButton = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <StyledCheckButton darkMode={darkMode} onClick={toggleDarkMode}>
      Toggle Dark Mode
    </StyledCheckButton>
  );
};

export default CheckButton;

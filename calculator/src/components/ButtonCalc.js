import React from 'react';
import PropTypes from 'prop-types';
import { Container, MyButtonShadow, MyButton } from '../style/styledButtonCalc';

const ButtonCalc = ({ children, onClickButton }) => {
  const onClickMyButton = () => {
    const number = Number(children);
    const value = Number.isInteger(number) ? number : children;
    onClickButton(value);
  };
  return (
    <Container>
      <MyButtonShadow />
      <MyButton onClick={onClickMyButton}>{children}</MyButton>
    </Container>
  );
};

export default ButtonCalc;

ButtonCalc.propTypes = {
  children: PropTypes.string,
  onClickButton: PropTypes.func,
};

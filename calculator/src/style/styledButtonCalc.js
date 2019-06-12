import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const MyButtonShadow = styled.div`
  position: absolute;
  z-index: 1;
  width: 70px;
  height: 70px;
  background-color: #ecf0f1;
  border-radius: 50%;
  left: 5px;
  top: 5px;
`;

export const MyButton = styled.div`
  position: relative;
  z-index: 2;
  font-family: 'Lobster Two', cursive;
  font-weight: bold;
  font-size: 25px;
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background-color: #bdc3c7;
    cursor: pointer;
  }
  &:active {
    transition: 0.3s;
    transform: translate(5px, 5px);
  }
`;

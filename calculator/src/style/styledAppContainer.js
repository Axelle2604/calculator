import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  & h1 {
    font-family: 'Lobster Two', cursive;
    font-size: 80px;
    color: #27ae60;
    border: ridge #27ae60 5px;
    padding: 20px;
    background-color: #ecf0f1;
  }
`;

export const CalculatorContainer = styled.div`
  position: relative;
`;

export const CalculatorShadow = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  width: 500px;
  height: 550px;
  background-color: #27ae60;
  position: absolute;
  padding: 50px;
  border-radius: 20px;
  left: 15px;
  top: 15px;
`;

export const Calculator = styled.div`
  position: relative;
  z-index: 2;
  width: 500px;
  height: 550px;
  background-color: #2ecc71;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  align-items: space-between;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

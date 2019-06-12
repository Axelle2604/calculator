import React, { Component } from 'react';
import ButtonCalc from '../components/ButtonCalc';
import ScreenCalc from '../components/ScreenCalc';
import {
  Container,
  CalculatorContainer,
  CalculatorShadow,
  Calculator,
  Row,
} from '../style/styledAppContainer';

export const removeToDisplayedOnScreen = ({ displayedOnScreen }) => ({
  displayedOnScreen: displayedOnScreen.slice(0, displayedOnScreen.length - 1),
});

export const incrementNumber = number => ({ displayedOnScreen }) => ({
  displayedOnScreen: [...displayedOnScreen, number],
});

export default class AppContainer extends Component {
  state = {
    displayedOnScreen: [],
    result: 0,
    hasError: false,
  };

  onClickRemove = () => {
    this.setState(removeToDisplayedOnScreen);
  };

  onClickErase = () => {
    this.setState({ result: 0, displayedOnScreen: [] });
  };

  onClickResult = () => {
    const { displayedOnScreen } = this.state;
    try {
      this.setState({
        result: eval(displayedOnScreen.join('')),
      });
    } catch (e) {
      this.setState({ displayedOnScreen: ['error'], hasError: true });
    }
  };

  onClickButton = button => {
    const { result, hasError } = this.state;
    result && this.setState({ result: 0, displayedOnScreen: [] });
    hasError && this.setState({ displayedOnScreen: [''], hasError: false });
    return this.setState(incrementNumber(button));
  };

  render() {
    const { displayedOnScreen, result } = this.state;
    return (
      <Container>
        <h1>The Calculator</h1>
        <CalculatorContainer>
          <CalculatorShadow />
          <Calculator>
            <Row>
              <ScreenCalc calc={displayedOnScreen} result={result} />
            </Row>
            <Row>
              <ButtonCalc onClickButton={this.onClickButton}>7</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>8</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>9</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>/</ButtonCalc>
            </Row>
            <Row>
              <ButtonCalc onClickButton={this.onClickButton}>4</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>5</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>6</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>*</ButtonCalc>
            </Row>
            <Row>
              <ButtonCalc onClickButton={this.onClickButton}>1</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>2</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>3</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>-</ButtonCalc>
            </Row>
            <Row>
              <ButtonCalc onClickButton={this.onClickButton}>0</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>(</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>)</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>+</ButtonCalc>
            </Row>
            <Row>
              <ButtonCalc onClickButton={this.onClickRemove}>Erase</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickErase}>CE</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickButton}>.</ButtonCalc>
              <ButtonCalc onClickButton={this.onClickResult}>=</ButtonCalc>
            </Row>
          </Calculator>
        </CalculatorContainer>
      </Container>
    );
  }
}

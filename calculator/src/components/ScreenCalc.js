import React from 'react';
import PropTypes from 'prop-types';
import { Result, Calc, Screen } from '../style/styledScreenCalc';

const ScreenCalc = ({ calc, result }) => {
  return (
    <Screen>
      <Result>{result}</Result>
      <Calc>{calc}</Calc>
    </Screen>
  );
};

export default ScreenCalc;

ScreenCalc.propTypes = {
  calc: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  result: PropTypes.number,
};

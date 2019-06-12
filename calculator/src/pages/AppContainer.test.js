import { removeToDisplayedOnScreen, incrementNumber } from './AppContainer';

test('Should increment the table', () => {
  expect(incrementNumber('5')({ displayedOnScreen: ['3', '4'] })).toEqual({
    displayedOnScreen: ['3', '4', '5'],
  });
});

test('Should remove the last element of the table', () => {
  expect(
    removeToDisplayedOnScreen({ displayedOnScreen: ['3', '4', '5'] })
  ).toEqual({
    displayedOnScreen: ['3', '4'],
  });
});

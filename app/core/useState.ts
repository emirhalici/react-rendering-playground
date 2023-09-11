import DOM from './renderer';

const START_INDEX = 0;
let index = START_INDEX;
const stateValues: unknown[] = [];

const getAssignedIndex = () => index++;
const useState = <S>(
  initialValue: S,
): [value: S, setValue: (value: S) => void] => {
  const currentIndex = getAssignedIndex();

  if (stateValues[currentIndex] === undefined) {
    stateValues[currentIndex] = initialValue;
  }

  const setValue = (newValue: S) => {
    stateValues[currentIndex] = newValue;
    DOM.triggerRender();
  };

  return [stateValues[currentIndex] as S, setValue];
};

export default useState;
export const prepareStateForRender = () => {
  index = START_INDEX;
};

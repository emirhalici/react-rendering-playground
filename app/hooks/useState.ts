import { render } from '../renderer';

const stateValues: unknown[] = [];
let index = -1;

const useState = <S>(
  initialValue: S,
): [value: S, setValue: (value: S) => void] => {
  index++;
  const currentIndex = Number(index);
  if (stateValues[currentIndex] === undefined) {
    stateValues[currentIndex] = initialValue;
  }

  const setValue = (newValue: S) => {
    stateValues[currentIndex] = newValue;
    render();
  };

  return [stateValues[currentIndex] as S, setValue];
};

export default useState;
export const prepareForRender = () => {
  index = 1;
};

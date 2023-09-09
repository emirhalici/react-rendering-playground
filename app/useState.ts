import { render } from './renderer';

let stateValue: unknown;

export default function useState<S>(
  initialValue: S,
): [value: S, setValue: (value: S) => void] {
  if (stateValue === undefined) {
    stateValue = initialValue;
  }

  const setValue = (newValue: S) => {
    stateValue = newValue;
    render();
  };

  return [stateValue as S, setValue];
}

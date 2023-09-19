import simpleJsx from './core/jsx';
import { Component, ComponentProps } from './core/types';
import useEffect from './core/useEffect';
import useMemo from './core/useMemo';
import useState from './core/useState';
import { computeExpensiveState } from './utils';

const App: Component = ({}: ComponentProps) => {
  const [state, setState] = useState(1);
  const [toggleValue, setToggleValue] = useState(true);
  const [stateSize, setStateSize] = useState(100_000);

  const expensiveValue = useMemo(
    () => computeExpensiveState(stateSize)[0]?.id ?? 'nil',
    [stateSize],
  );

  useEffect(() => {
    console.log('An effect that runs every on render');
  });

  useEffect(() => {
    console.log('An effect that only runs once');
  }, []);

  useEffect(() => {
    console.log(`An effect ran only when state changes. State: ${state}`);
  }, [state]);

  return (
    <div>
      <h1>Hello world, state: {state}</h1>
      <button
        onclick={() => {
          setState(state + 1);
        }}
      >
        Increment state
      </button>
      <ConditionalComponent state={state} />
      <h3>Checkbox is {toggleValue ? 'toggled' : 'not toggled'}</h3>
      <label>
        Toggle
        <input
          type="checkbox"
          checked={toggleValue}
          onclick={() => handleCheckboxClick()}
        />
      </label>
      <p>Expensive state size: {stateSize}</p>
      <p>Expensive state: {expensiveValue}</p>
      <button onclick={computeRandomSize}>Recompute Expensive State</button>
    </div>
  );

  function handleCheckboxClick() {
    setToggleValue(!toggleValue);
  }

  function computeRandomSize() {
    setStateSize(Math.round(Math.random() * 10_000_000));
  }
};

export default App;

function ConditionalComponent(
  props: ComponentProps<{
    state: number;
  }>,
) {
  if (props.state % 2 === 0) {
    return <div>State is even.</div>;
  } else {
    return <div>State is odd: {props.state}</div>;
  }
}

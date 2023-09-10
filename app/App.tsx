import jsx from './core/jsx';
import { Component, ComponentProps } from './core/types';
import useState from './core/useState';

const App: Component = ({}: ComponentProps) => {
  const [state, setState] = useState(1);
  const [toggleValue, setToggleValue] = useState(true);

  function handleCheckboxClick() {
    setToggleValue(!toggleValue);
  }

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
    </div>
  );
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

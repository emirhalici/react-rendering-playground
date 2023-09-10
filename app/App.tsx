import CheckboxComponent from './components/CheckboxComponent';
import { customJsx } from './core/jsxHelpers';
import { Component, ComponentProps } from './core/types';
import useState from './core/useState';

const App: Component = ({}: ComponentProps) => {
  const [state, setState] = useState(1);
  const [toggleValue, setToggleValue] = useState(true);

  function handleCheckboxClick() {
    console.log('Clicked');
    setToggleValue(!toggleValue);
  }

  return (
    <div>
      {CheckboxComponent({
        label: 'Toggle',
        id: 'checkbox',
        checked: toggleValue,
        onChecked: setToggleValue,
      })}
      <h1>Hello world {state}</h1>
      <button
        onclick={() => {
          setState(state + 1);
        }}
      >
        Click me
      </button>
      <h3>Toggle value: {toggleValue}</h3>
      <ConditionalComponent state={state}>Children here</ConditionalComponent>
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
    return <div>Hello</div>;
  } else {
    return <div>{props.state}</div>;
  }
}

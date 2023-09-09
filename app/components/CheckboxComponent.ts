import { Component } from '../renderer';

type CheckboxComponentProps = {
  label: string;
  id: string;
  checked: boolean;
  onChecked: (checked: boolean) => void;
};
const CheckboxComponent: Component<CheckboxComponentProps> = ({
  label,
  id,
  checked,
  onChecked,
  children,
}) => {
  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', id);

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = id;
  inputElement.checked = checked;

  inputElement.onclick = () => {
    onChecked(!checked);
  };

  labelElement.append(label, inputElement, ...(children ?? []));
  return labelElement;
};

export default CheckboxComponent;

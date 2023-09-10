type ChildrenProps = {
  children?: Node[];
  className?: string;
};
type ComponentProps<T = object> = ChildrenProps & T;
type Component<T = object> = (props: ComponentProps<T>) => Element;

type SetValueCallback<T> = (value: T) => void;

export type { ChildrenProps, ComponentProps, Component, SetValueCallback };

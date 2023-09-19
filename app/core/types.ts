type Render<T> = (component: Component<T>, props: ComponentProps<T>) => void;
type Root<T = object> = {
  render: Render<T>;
  unmount(): void;
};

type ChildrenProps = {
  children?: Node[];
  className?: string;
};
type ComponentProps<T = object> = ChildrenProps & T;
type Component<T = object> = (props: ComponentProps<T>) => Element;

type SetValueCallback<T> = (value: T) => void;

type SetupWithoutCleanup = () => void;
type SetupWithCleanup = () => () => void;

type MemoDependency<T = unknown> = {
  computedValue: T;
  dependencies: unknown[];
};

export type {
  ChildrenProps,
  ComponentProps,
  Component,
  SetValueCallback,
  Root,
  Render,
  SetupWithCleanup,
  SetupWithoutCleanup,
  MemoDependency,
};

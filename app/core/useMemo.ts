import { MemoDependency } from './types';

const START_INDEX = 0;
let index = START_INDEX;

const memoDependencies: MemoDependency[] = [];

const getAssignedIndex = () => index++;
const useMemo = <T>(memoCallback: () => T, dependencies: unknown[]) => {
  const recomputeAndMemoize = () => {
    memoDependencies[currentIndex] = {
      computedValue: memoCallback(),
      dependencies: dependencies,
    };

    return memoDependencies[currentIndex]?.computedValue;
  };

  const currentIndex = getAssignedIndex();

  const initialized = memoDependencies[currentIndex] !== undefined;
  const oldDependencies = memoDependencies[currentIndex]?.dependencies;
  if (!initialized || !oldDependencies) {
    return recomputeAndMemoize();
  }

  // Compare dependencies
  for (let i = 0; i < dependencies.length; i++) {
    if (dependencies[i] !== oldDependencies[i]) {
      return recomputeAndMemoize();
    }
  }

  return memoDependencies[currentIndex]?.computedValue;
};

export default useMemo;
export const prepareMemoForRender = () => {
  index = START_INDEX;
};

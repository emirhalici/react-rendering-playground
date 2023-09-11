import { SetupWithCleanup, SetupWithoutCleanup } from './types';

const START_INDEX = 0;
let index = START_INDEX;
const effectDependencies: {
  dependencies: unknown[] | undefined;
  cleanup: (() => void) | undefined;
}[] = [];

const useEffect = (
  setup: SetupWithCleanup | SetupWithoutCleanup,
  dependencies?: unknown[],
) => {
  const currentIndex = Number(index);
  index++;

  const callSetupAndSaveCleanup = () => {
    const cleanupMethod = setup();
    const cleanupExists = typeof cleanupMethod === 'function';

    effectDependencies[currentIndex] = {
      dependencies,
      cleanup: cleanupExists ? cleanupMethod : undefined,
    };
  };

  const shouldRunEveryTime = dependencies === undefined;
  const initialized = effectDependencies[currentIndex] !== undefined;
  if (shouldRunEveryTime || !initialized) {
    return callSetupAndSaveCleanup();
  }

  const oldDependencies = effectDependencies[currentIndex]?.dependencies;
  if (!oldDependencies) {
    return callSetupAndSaveCleanup();
  }

  // Compare dependencies
  for (let i = 0; i < dependencies.length; i++) {
    if (dependencies[i] !== oldDependencies[i]) {
      return callSetupAndSaveCleanup();
    }
  }
};

export default useEffect;
export const prepareEffectForRender = () => {
  if (index === START_INDEX) {
    return;
  } else {
    // Run through active effects and call cleanup if it exists
    for (let i = 0; i < index; i++) {
      const effect = effectDependencies[i];
      if (effect && effect.cleanup) {
        effect.cleanup();
      }
    }
    index = START_INDEX;
  }
};

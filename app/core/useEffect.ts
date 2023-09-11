import { SetupWithCleanup, SetupWithoutCleanup } from './types';

const START_INDEX = 0;
let index = START_INDEX;
const effectDependencies: {
  dependencies: unknown[] | undefined;
  cleanup: (() => void) | undefined;
}[] = [];

const getAssignedIndex = () => index++;
const useEffect = (
  setup: SetupWithCleanup | SetupWithoutCleanup,
  dependencies?: unknown[],
) => {
  const callSetupAndSaveEffect = () => {
    const cleanupMethod = setup();
    const cleanupExists = typeof cleanupMethod === 'function';

    effectDependencies[currentIndex] = {
      dependencies,
      cleanup: cleanupExists ? cleanupMethod : undefined,
    };
  };

  const currentIndex = getAssignedIndex();
  const shouldRunEveryTime = dependencies === undefined;
  const initialized = effectDependencies[currentIndex] !== undefined;
  const oldDependencies = effectDependencies[currentIndex]?.dependencies;
  if (shouldRunEveryTime || !initialized) {
    return callSetupAndSaveEffect();
  } else if (!oldDependencies) {
    return callSetupAndSaveEffect();
  }

  // Compare dependencies
  for (let i = 0; i < dependencies.length; i++) {
    if (dependencies[i] !== oldDependencies[i]) {
      return callSetupAndSaveEffect();
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

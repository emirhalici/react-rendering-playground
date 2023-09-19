const computeExpensiveState = (size: number) => {
  const state = new Array(Math.round(size) + 2_000_000)
    .fill(0)
    .map((_, i) => {
      return {
        id: i,
        isSelected: i === size,
      };
    })
    .reverse();

  return state
};

export { computeExpensiveState };

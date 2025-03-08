const arr = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  empty: true,
  wounded: false,
  killed: false,
  checked: false,
}));

export const defaultArr = {
  isReadyToPlay: false,
  cells: arr,
};

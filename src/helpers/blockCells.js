const blockCells = (arr, filledCells) =>
  arr
    .filter((cell) => {
      if (cell.id.toString().includes("0")) {
        return (
          filledCells.includes(cell.id + 10) ||
          filledCells.includes(cell.id + 9) ||
          filledCells.includes(cell.id - 1) ||
          filledCells.includes(cell.id - 10) ||
          filledCells.includes(cell.id - 11)
        );
      } else if ((cell.id - 1).toString().includes("0")) {
        return (
          filledCells.includes(cell.id + 10) ||
          filledCells.includes(cell.id - 9) ||
          filledCells.includes(cell.id + 1) ||
          filledCells.includes(cell.id - 10) ||
          filledCells.includes(cell.id + 11)
        );
      } else {
        return (
          (filledCells.includes(cell.id + 11) &&
            !cell.id.toString().includes("0")) ||
          filledCells.includes(cell.id + 10) ||
          filledCells.includes(cell.id + 9) ||
          (filledCells.includes(cell.id + 1) &&
            !cell.id.toString().includes("0")) ||
          filledCells.includes(cell.id - 1) ||
          (filledCells.includes(cell.id - 9) &&
            !cell.id.toString().includes("0")) ||
          filledCells.includes(cell.id - 10) ||
          filledCells.includes(cell.id - 11)
        );
      }
    })
    .map((cell) => cell.id);

export const setBlockedCells = (
  filledCells,
  setBlockedCellsBF,
  battleField
) => {
  if (
    filledCells.length === 4 ||
    filledCells.length === 7 ||
    filledCells.length === 10 ||
    filledCells.length === 12 ||
    filledCells.length === 14 ||
    filledCells.length === 16 ||
    filledCells.length === 17 ||
    filledCells.length === 18 ||
    filledCells.length === 19
  ) {
    setBlockedCellsBF((prev) => [
      ...prev,
      ...blockCells(battleField, filledCells),
    ]);
  } else if (filledCells.length === 20) {
    setBlockedCellsBF((prev) => [
      ...prev,
      ...blockCells(
        battleField,
        battleField.map((cell) => cell.id)
      ),
    ]);
  }
};

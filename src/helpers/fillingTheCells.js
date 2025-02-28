const neighbourAllowsToFill = (a, i) => {
  const isCellEmpty = (index) => a[index] && a[index]["empty"];
  const isCellFilled = (index) => a[index] && !a[index]["empty"];

  if (i === 0) {
    return (
      isCellFilled(i + 1) ||
      isCellFilled(i + 10) ||
      isCellEmpty(i + 11) ||
      (isCellEmpty(i + 1) &&
        isCellEmpty(i + 9) &&
        isCellEmpty(i + 10) &&
        isCellEmpty(i + 11))
    );
  } else if (i <= 10) {
    return (
      (isCellFilled(i + 1) && isCellEmpty(i + 9)) ||
      isCellFilled(i + 10) ||
      (isCellFilled(i - 1) && isCellEmpty(i + 11)) ||
      (isCellEmpty(i + 1) &&
        isCellEmpty(i + 9) &&
        isCellEmpty(i + 10) &&
        isCellEmpty(i + 11) &&
        isCellEmpty(i - 1))
    );
  } else if (i >= 89 && i < 99) {
    return (
      (isCellFilled(i + 1) && isCellEmpty(i - 11)) ||
      (isCellFilled(i - 1) && isCellEmpty(i - 9)) ||
      isCellFilled(i - 10) ||
      (isCellEmpty(i + 1) &&
        isCellEmpty(i - 1) &&
        isCellEmpty(i - 9) &&
        isCellEmpty(i - 10) &&
        isCellEmpty(i - 11))
    );
  } else if (i === 99) {
    return (
      isCellFilled(i - 1) ||
      isCellFilled(i - 10) ||
      isCellEmpty(i - 11) ||
      (isCellEmpty(i - 1) &&
        isCellEmpty(i - 9) &&
        isCellEmpty(i - 10) &&
        isCellEmpty(i - 11))
    );
  }

  return (
    (isCellFilled(i + 1) && isCellEmpty(i + 9) && isCellEmpty(i - 11)) ||
    (isCellFilled(i + 10) && isCellEmpty(i - 9) && isCellEmpty(i - 11)) ||
    (isCellFilled(i - 1) && isCellEmpty(i - 9) && isCellEmpty(i + 11)) ||
    (isCellFilled(i - 10) && isCellEmpty(i + 9) && isCellEmpty(i + 11)) ||
    (isCellEmpty(i + 1) &&
      isCellEmpty(i + 9) &&
      isCellEmpty(i + 10) &&
      isCellEmpty(i + 11) &&
      isCellEmpty(i - 1) &&
      isCellEmpty(i - 9) &&
      isCellEmpty(i - 10) &&
      isCellEmpty(i - 11))
  );
};

const isAllowedToFill = (a, i) => {
  const filledCells = a.filter((e) => !e.empty);

  // const blockedCells = () => {
  //   const filledCellsIds = filledCells.map((e) => e.id);
  //   return a.reducer((acc, e) => {
  //     filledCellsIds.includes(e.id - 1 || e.id - 11 || e.id - 10 || e.id - 9) &&
  //       acc.push(e);
  //     return acc;
  //   }, []);
  // };

  if (filledCells.length >= 20) return false;

  const someNeighbourIsFilled = () =>
    filledCells.some((e) => {
      const idx = e.id - 1;

      if (idx < 10) {
        return idx - 1 === i || idx + 1 === i || idx + 10 === i;
      }
      if (idx > 89) {
        return idx - 1 === i || idx + 1 === i || idx - 10 === i;
      }
      if (idx.toString().includes("9")) {
        return idx - 1 === i || idx - 10 === i || idx + 10 === i;
      }
      if (idx.toString().includes("0")) {
        return idx + 1 === i || idx - 10 === i || idx + 10 === i;
      }
      return idx - 1 === i || idx + 1 === i || idx - 10 === i || idx + 10 === i;
    });

  if (filledCells.length === 0) {
    return true;
  } else if (filledCells.length < 4 && !someNeighbourIsFilled()) {
    return false;
  } else if (filledCells.length === 4) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 7 && !someNeighbourIsFilled()) {
    return false;
  } else if (filledCells.length < 7) {
    return true;
  } else if (filledCells.length === 7) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 10) {
    return true;
  } else if (filledCells.length === 10) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 12) {
    return true;
  } else if (filledCells.length === 12) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 14) {
    return true;
  } else if (filledCells.length === 14) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 16) {
    return true;
  } else if (filledCells.length === 16) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 17) {
    return true;
  } else if (filledCells.length === 17) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 18) {
    return true;
  } else if (filledCells.length === 18) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 19) {
    return true;
  } else if (filledCells.length === 19) {
    return !someNeighbourIsFilled();
  }
};

export const fillBattleField = (arr, cell) =>
  arr.map((e, i, a) => {
    return e.id === cell.id &&
      neighbourAllowsToFill(a, i) &&
      isAllowedToFill(a, i)
      ? { ...cell, empty: false }
      : e;
  });

// const isAllowedToFill = (a, i, filledCells) => {
//   if (i === 0) {
//     return (
//       a[i + 1]["empty"] === false ||
//       a[i + 10]["empty"] === false ||
//       a[i + 11]["empty"] ||
//       (a[i + 1]["empty"] &&
//         a[i + 9]["empty"] &&
//         a[i + 10]["empty"] &&
//         a[i + 11]["empty"])
//     );
//   } else if (i <= 10) {
//     return (
//       (a[i + 1]["empty"] === false && a[i + 9]["empty"]) ||
//       a[i + 10]["empty"] === false ||
//       (a[i - 1]["empty"] === false && a[i + 11]["empty"]) ||
//       (a[i + 1]["empty"] &&
//         a[i + 9]["empty"] &&
//         a[i + 10]["empty"] &&
//         a[i + 11]["empty"] &&
//         a[i - 1]["empty"])
//     );
//   } else if (i >= 89 && i < 99) {
//     return (
//       (a[i + 1]["empty"] === false && a[i - 11]["empty"]) ||
//       (a[i - 1]["empty"] === false && a[i - 9]["empty"]) ||
//       a[i - 10]["empty"] === false ||
//       (a[i + 1]["empty"] &&
//         a[i - 1]["empty"] &&
//         a[i - 9]["empty"] &&
//         a[i - 10]["empty"] &&
//         a[i - 11]["empty"])
//     );
//   } else if (i === 99) {
//     return (
//       a[i - 1]["empty"] === false ||
//       a[i - 10]["empty"] === false ||
//       a[i - 11]["empty"] ||
//       (a[i - 1]["empty"] &&
//         a[i - 9]["empty"] &&
//         a[i - 10]["empty"] &&
//         a[i - 11]["empty"])
//     );
//   }
//   return (
//     (a[i + 1]["empty"] === false && a[i + 9]["empty"] && a[i - 11]["empty"]) ||
//     (a[i + 10]["empty"] === false && a[i - 9]["empty"] && a[i - 11]["empty"]) ||
//     (a[i - 1]["empty"] === false && a[i - 9]["empty"] && a[i + 11]["empty"]) ||
//     (a[i - 10]["empty"] === false && a[i + 9]["empty"] && a[i + 11]["empty"]) ||
//     (a[i + 1]["empty"] &&
//       a[i + 9]["empty"] &&
//       a[i + 10]["empty"] &&
//       a[i + 11]["empty"] &&
//       a[i - 1]["empty"] &&
//       a[i - 9]["empty"] &&
//       a[i - 10]["empty"] &&
//       a[i - 11]["empty"])
//   );
// };

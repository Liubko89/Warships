// const neighbourAllowsToFill = (a, i) => {
//   const isCellEmpty = (index) => a[index] && a[index]["empty"];
//   const isCellFilled = (index) => a[index] && !a[index]["empty"];

//   if (i === 0) {
//     return (
//       isCellFilled(i + 1) ||
//       isCellFilled(i + 10) ||
//       isCellEmpty(i + 11) ||
//       (isCellEmpty(i + 1) &&
//         isCellEmpty(i + 9) &&
//         isCellEmpty(i + 10) &&
//         isCellEmpty(i + 11))
//     );
//   } else if (i === 9) {
//     return (
//       isCellFilled(i - 1) ||
//       isCellFilled(i + 10) ||
//       isCellEmpty(i - 11) ||
//       isCellFilled(i + 11) ||
//       (isCellEmpty(i - 1) &&
//         isCellEmpty(i + 9) &&
//         isCellEmpty(i + 10) &&
//         isCellEmpty(i + 11))
//     );
//   } else if (i !== 9 && i < 90 && i.toString().includes("9")) {
//     return (
//       (isCellFilled(i + 1) && isCellEmpty(i + 9) && isCellEmpty(i - 11)) ||
//       (isCellFilled(i + 10) && isCellEmpty(i - 9) && isCellEmpty(i - 11)) ||
//       (isCellFilled(i - 1) && isCellEmpty(i - 9) && isCellEmpty(i + 11)) ||
//       (isCellFilled(i - 10) && isCellEmpty(i + 9) && isCellEmpty(i + 11)) ||
//       (isCellEmpty(i + 1) &&
//         isCellEmpty(i + 9) &&
//         isCellEmpty(i + 10) &&
//         isCellEmpty(i - 1) &&
//         isCellEmpty(i - 10) &&
//         isCellEmpty(i - 11))
//     );
//   } else if (i !== 0 && i < 90 && i.toString().includes("0")) {
//     return (
//       (isCellFilled(i + 1) && isCellEmpty(i + 9) && isCellEmpty(i - 11)) ||
//       (isCellFilled(i + 10) && isCellEmpty(i - 9) && isCellEmpty(i - 11)) ||
//       (isCellFilled(i - 1) && isCellEmpty(i - 9) && isCellEmpty(i + 11)) ||
//       (isCellFilled(i - 10) && isCellEmpty(i + 9) && isCellEmpty(i + 11)) ||
//       (isCellEmpty(i + 1) &&
//         isCellEmpty(i - 9) &&
//         isCellEmpty(i + 10) &&
//         isCellEmpty(i - 1) &&
//         isCellEmpty(i - 10) &&
//         isCellEmpty(i + 11))
//     );
//   } else if (i <= 10) {
//     return (
//       (isCellFilled(i + 1) && isCellEmpty(i + 9)) ||
//       isCellFilled(i + 10) ||
//       (isCellFilled(i - 1) && isCellEmpty(i + 11)) ||
//       (isCellEmpty(i + 1) &&
//         isCellEmpty(i + 9) &&
//         isCellEmpty(i + 10) &&
//         isCellEmpty(i + 11) &&
//         isCellEmpty(i - 1))
//     );
//   } else if (i >= 89 && i < 99) {
//     return (
//       (isCellFilled(i + 1) && isCellEmpty(i - 11)) ||
//       (isCellFilled(i - 1) && isCellEmpty(i - 9)) ||
//       isCellFilled(i - 10) ||
//       (isCellEmpty(i + 1) &&
//         isCellEmpty(i - 1) &&
//         isCellEmpty(i - 9) &&
//         isCellEmpty(i - 10) &&
//         isCellEmpty(i - 11))
//     );
//   } else if (i === 99) {
//     return (
//       isCellFilled(i - 1) ||
//       isCellFilled(i - 10) ||
//       isCellEmpty(i - 11) ||
//       (isCellEmpty(i - 1) &&
//         isCellEmpty(i - 9) &&
//         isCellEmpty(i - 10) &&
//         isCellEmpty(i - 11))
//     );
//   }

//   return (
//     (isCellFilled(i + 1) && isCellEmpty(i + 9) && isCellEmpty(i - 11)) ||
//     (isCellFilled(i + 10) && isCellEmpty(i - 9) && isCellEmpty(i - 11)) ||
//     (isCellFilled(i - 1) && isCellEmpty(i - 9) && isCellEmpty(i + 11)) ||
//     (isCellFilled(i - 10) && isCellEmpty(i + 9) && isCellEmpty(i + 11)) ||
//     (isCellEmpty(i + 1) &&
//       isCellEmpty(i + 9) &&
//       isCellEmpty(i + 10) &&
//       isCellEmpty(i + 11) &&
//       isCellEmpty(i - 1) &&
//       isCellEmpty(i - 9) &&
//       isCellEmpty(i - 10) &&
//       isCellEmpty(i - 11))
//   );
// };

const isAllowedToFill = (a, i) => {
  const filledCells = a.filter((e) => !e.empty);

  if (filledCells.length >= 20) return false;

  const someNeighbourIsFilled = () =>
    filledCells.some((e) => {
      const idx = e.id - 1;
      if (idx < 10) {
        return idx - 1 === i || idx + 1 === i || idx + 10 === i;
      } else if (idx.toString().includes("9") && idx < 90) {
        return idx - 1 === i || idx - 10 === i || idx + 10 === i;
      } else if (idx.toString().includes("0") && idx !== 0) {
        return idx + 1 === i || idx - 10 === i || idx + 10 === i;
      } else if (idx > 89) {
        return idx - 1 === i || idx + 1 === i || idx - 10 === i;
      } else
        return (
          idx - 1 === i || idx + 1 === i || idx - 10 === i || idx + 10 === i
        );
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
  } else if (filledCells.length < 10 && !someNeighbourIsFilled()) {
    return false;
  } else if (filledCells.length < 10) {
    return true;
  } else if (filledCells.length === 10) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 12 && !someNeighbourIsFilled()) {
    return false;
  } else if (filledCells.length < 12) {
    return true;
  } else if (filledCells.length === 12) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 14 && !someNeighbourIsFilled()) {
    return false;
  } else if (filledCells.length < 14) {
    return true;
  } else if (filledCells.length === 14) {
    return !someNeighbourIsFilled();
  } else if (filledCells.length < 16 && !someNeighbourIsFilled()) {
    return false;
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
      // neighbourAllowsToFill(a, i)
      // &&
      isAllowedToFill(a, i)
      ? { ...cell, empty: false }
      : e;
  });

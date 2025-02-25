const isAllowedToFill = (a, i, filledCells) => {
  if (i === 0) {
    return (
      a[i + 1]["empty"] === false ||
      a[i + 10]["empty"] === false ||
      a[i + 11]["empty"] ||
      (a[i + 1]["empty"] &&
        a[i + 9]["empty"] &&
        a[i + 10]["empty"] &&
        a[i + 11]["empty"])
    );
  } else if (i <= 10) {
    return (
      (a[i + 1]["empty"] === false && a[i + 9]["empty"]) ||
      a[i + 10]["empty"] === false ||
      (a[i - 1]["empty"] === false && a[i + 11]["empty"]) ||
      (a[i + 1]["empty"] &&
        a[i + 9]["empty"] &&
        a[i + 10]["empty"] &&
        a[i + 11]["empty"] &&
        a[i - 1]["empty"])
    );
  } else if (i >= 89 && i < 99) {
    return (
      (a[i + 1]["empty"] === false && a[i - 11]["empty"]) ||
      (a[i - 1]["empty"] === false && a[i - 9]["empty"]) ||
      a[i - 10]["empty"] === false ||
      (a[i + 1]["empty"] &&
        a[i - 1]["empty"] &&
        a[i - 9]["empty"] &&
        a[i - 10]["empty"] &&
        a[i - 11]["empty"])
    );
  } else if (i === 99) {
    return (
      a[i - 1]["empty"] === false ||
      a[i - 10]["empty"] === false ||
      a[i - 11]["empty"] ||
      (a[i - 1]["empty"] &&
        a[i - 9]["empty"] &&
        a[i - 10]["empty"] &&
        a[i - 11]["empty"])
    );
  }
  return (
    (a[i + 1]["empty"] === false && a[i + 9]["empty"] && a[i - 11]["empty"]) ||
    (a[i + 10]["empty"] === false && a[i - 9]["empty"] && a[i - 11]["empty"]) ||
    (a[i - 1]["empty"] === false && a[i - 9]["empty"] && a[i + 11]["empty"]) ||
    (a[i - 10]["empty"] === false && a[i + 9]["empty"] && a[i + 11]["empty"]) ||
    (a[i + 1]["empty"] &&
      a[i + 9]["empty"] &&
      a[i + 10]["empty"] &&
      a[i + 11]["empty"] &&
      a[i - 1]["empty"] &&
      a[i - 9]["empty"] &&
      a[i - 10]["empty"] &&
      a[i - 11]["empty"])
  );
};

export const fillBattleField = (arr, cell) =>
  arr.map((e, i, a) => {
    return e.id === cell.id && isAllowedToFill(a, i)
      ? { ...cell, empty: false }
      : e;
  });

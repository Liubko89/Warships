import clsx from "clsx";
import css from "./Cell.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCellInBattleField_1,
  updateCellInBattleField_2,
} from "../../redux/warships/operations";
import {
  selectBattleField_1,
  selectBattleField_2,
} from "../../redux/warships/selectors";

const Cell = ({ cell, battleField }) => {
  const dispatch = useDispatch();
  const battleField_1 = useSelector(selectBattleField_1);
  const battleField_2 = useSelector(selectBattleField_2);

  const fillBattleField = (arr) =>
    arr.map((e, i, a) => {
      const isAllowedToFill = () => {
        if (i < 1) {
          return (
            a[i + 1]["empty"] === false ||
            a[i + 10]["empty"] === false ||
            (a[i + 1]["empty"] && a[i + 10]["empty"])
          );
        } else if (i < 10) {
          return (
            a[i + 1]["empty"] === false ||
            a[i + 10]["empty"] === false ||
            a[i - 1]["empty"] === false ||
            (a[i + 1]["empty"] && a[i + 10]["empty"] && a[i - 1]["empty"])
          );
        } else if (i >= 90) {
          return (
            a[i + 1]["empty"] === false ||
            a[i - 1]["empty"] === false ||
            a[i - 10]["empty"] === false ||
            (a[i + 1]["empty"] && a[i - 1]["empty"] && a[i - 10]["empty"])
          );
        } else if (i === 99) {
          return (
            a[i - 1]["empty"] === false ||
            a[i - 10]["empty"] === false ||
            (a[i - 1]["empty"] && a[i - 10]["empty"])
          );
        }

        return (
          a[i + 1]["empty"] === false ||
          a[i + 10]["empty"] === false ||
          a[i - 1]["empty"] === false ||
          a[i - 10]["empty"] === false ||
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

      return e.id === cell.id && isAllowedToFill()
        ? { ...cell, empty: false }
        : e;
    });

  const updateBattleField_1 = () => {
    if (!battleField_1[cell.id - 1].empty) return;
    dispatch(updateCellInBattleField_1(fillBattleField(battleField_1)));
  };
  const updateBattleField_2 = () => {
    if (!battleField_2[cell.id - 1].empty) return;
    dispatch(updateCellInBattleField_2(fillBattleField(battleField_2)));
  };

  const handleClick = () => {
    battleField === 1 ? updateBattleField_1() : updateBattleField_2();
  };

  return (
    <li>
      <div
        className={clsx(
          css.cell,
          !cell.empty && css.cellFilled,
          cell.checked && css.cellChecked
        )}
        role="button"
        onClick={handleClick}
      >
        {cell.id}
      </div>
    </li>
  );
};

export default Cell;

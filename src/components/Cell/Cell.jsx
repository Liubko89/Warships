import clsx from "clsx";
import css from "./Cell.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBattleField_1,
  selectBattleField_2,
} from "../../redux/warships/selectors";
import { fillBattleField } from "../../helpers/fillingTheCells";
import {
  fillBattleField_1,
  fillBattleField_2,
} from "../../redux/warships/slice";

const Cell = ({ cell, battleField }) => {
  const dispatch = useDispatch();
  const battleField_1 = useSelector(selectBattleField_1);
  const battleField_2 = useSelector(selectBattleField_2);

  const fillField_1 = () => {
    if (!battleField_1[cell.id - 1].empty) return;
    dispatch(fillBattleField_1(fillBattleField(battleField_1, cell)));
  };
  const fillField_2 = () => {
    if (!battleField_2[cell.id - 1].empty) return;
    dispatch(fillBattleField_2(fillBattleField(battleField_2, cell)));
  };

  const handleClick = () => {
    battleField === 1 ? fillField_1() : fillField_2();
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
        {cell.id - 1}
      </div>
    </li>
  );
};

export default Cell;

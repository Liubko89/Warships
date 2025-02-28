import clsx from "clsx";
import css from "./Cell.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBattleField_1,
  updateBattleField_2,
} from "../../redux/warships/operations";
import {
  selectBattleField_1,
  selectBattleField_2,
} from "../../redux/warships/selectors";
import { fillBattleField } from "../../helpers/fillingTheCells";

const Cell = ({ cell, battleField }) => {
  const dispatch = useDispatch();
  const battleField_1 = useSelector(selectBattleField_1);
  const battleField_2 = useSelector(selectBattleField_2);

  const updateField_1 = () => {
    if (!battleField_1[cell.id - 1].empty) return;
    dispatch(updateBattleField_1(fillBattleField(battleField_1, cell)));
  };
  const updateField_2 = () => {
    if (!battleField_2[cell.id - 1].empty) return;
    dispatch(updateBattleField_2(fillBattleField(battleField_2, cell)));
  };

  const handleClick = () => {
    battleField === 1 ? updateField_1() : updateField_2();
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

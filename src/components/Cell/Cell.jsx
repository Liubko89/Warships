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
import { fillBattleField } from "../../helpers/fillingTheCells";

const Cell = ({ cell, battleField }) => {
  const dispatch = useDispatch();
  const battleField_1 = useSelector(selectBattleField_1);
  const battleField_2 = useSelector(selectBattleField_2);

  const updateBattleField_1 = () => {
    if (!battleField_1[cell.id - 1].empty) return;
    dispatch(updateCellInBattleField_1(fillBattleField(battleField_1, cell)));
  };
  const updateBattleField_2 = () => {
    if (!battleField_2[cell.id - 1].empty) return;
    dispatch(updateCellInBattleField_2(fillBattleField(battleField_2, cell)));
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
        {cell.id - 1}
      </div>
    </li>
  );
};

export default Cell;

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

const Cell = ({ cell }) => {
  const dispatch = useDispatch();
  const battleField_1 = useSelector(selectBattleField_1);
  const battleField_2 = useSelector(selectBattleField_2);

  const updatedBattleField_1 = battleField_1.map((e) =>
    e.id === cell.id ? { ...cell, filled: !cell.filled } : e
  );
  const updatedBattleField_2 = battleField_2.map((e) =>
    e.id === cell.id ? { ...cell, filled: !cell.filled } : e
  );

  const handleClick = () => {
    dispatch(updateCellInBattleField_1(updatedBattleField_1));
    dispatch(updateCellInBattleField_2(updatedBattleField_2));
  };

  return (
    <li>
      <div
        className={clsx(
          css.cell,
          cell.filled && css.cellFilled,
          cell.wounded && css.cellWounded,
          cell.killed && css.seeKilled,
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

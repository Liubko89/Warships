import clsx from "clsx";
import css from "./Cell.module.css";
import useFillBattleField from "../../customHooks/fillBattleField";
import { useSelector } from "react-redux";
import { selectPlayer } from "../../redux/warships/selectors";
import useCheckCells from "../../customHooks/checkCells";

const Cell = ({ cell, battleField, blockedCells }) => {
  const { handleFilling } = useFillBattleField(battleField, cell);
  const player = useSelector(selectPlayer);

  const { handleCheckBF_1, handleCheckBF_2 } = useCheckCells(cell);

  const isCellBlocked =
    blockedCells.length !== 0 ? blockedCells.includes(cell.id) : false;

  return (
    <li>
      <div
        className={clsx(
          css.cell,
          !cell.empty && css.cellFilled,
          cell.checked && css.cellChecked,
          cell.wounded && css.cellWounded,
          (isCellBlocked || player === "") && css.cellBlocked,
          player === "1" && battleField === 2 && css.enemyCell,
          player === "2" && battleField === 1 && css.enemyCell
        )}
        role="button"
        onClick={
          (player === "1" && battleField === 2 && handleCheckBF_2) ||
          (player === "2" && battleField === 1 && handleCheckBF_1) ||
          handleFilling
        }
        aria-label="a cell"
      ></div>
    </li>
  );
};

export default Cell;

import clsx from "clsx";
import css from "./Cell.module.css";
import useFillBattleField from "../../customHooks/fillBattleField";
import { useSelector } from "react-redux";
import { selectPlayer } from "../../redux/warships/selectors";

const Cell = ({ cell, battleField, blockedCells }) => {
  const { handleClick } = useFillBattleField(battleField, cell);
  const isCellBlocked =
    blockedCells.length !== 0 ? blockedCells.includes(cell.id) : false;
  const player = useSelector(selectPlayer);

  return (
    <li>
      <div
        className={clsx(
          css.cell,
          !cell.empty && css.cellFilled,
          cell.checked && css.cellChecked,
          isCellBlocked || (player === "" && css.cellBlocked)
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

import clsx from "clsx";
import css from "./Cell.module.css";
import useFillBattleField from "../../customHooks/fillBattleField";

const Cell = ({ cell, battleField }) => {
  const { handleClick } = useFillBattleField(battleField, cell);
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

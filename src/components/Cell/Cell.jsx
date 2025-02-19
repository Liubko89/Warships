import clsx from "clsx";
import css from "./Cell.module.css";

const Cell = ({ cell }) => {
  const handleClick = () => {};

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
      ></div>
    </li>
  );
};

export default Cell;

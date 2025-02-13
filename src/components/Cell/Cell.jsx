import css from "./Cell.module.css";

const Cell = ({ id }) => {
  return (
    <li>
      <div className={css.cell}>{id}</div>
    </li>
  );
};

export default Cell;

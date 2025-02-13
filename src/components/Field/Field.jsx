import { nanoid } from "nanoid";
import Cell from "../Cell/Cell";
import css from "./Field.module.css";

const Field = ({ list }) => {
  return (
    <ul className={css.list}>
      {list.map(({ id }) => (
        <Cell key={nanoid()} id={id} />
      ))}
    </ul>
  );
};

export default Field;

import { nanoid } from "nanoid";
import Cell from "../Cell/Cell";
import css from "./Field.module.css";

const Field = ({ list }) => {
  return (
    <ul className={css.list}>
      {list.map((cell) => {
        console.log(cell);

        return <Cell key={nanoid()} />;
      })}
    </ul>
  );
};

export default Field;

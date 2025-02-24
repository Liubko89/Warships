import { nanoid } from "nanoid";
import Cell from "../Cell/Cell";
import css from "./Field.module.css";

const Field = ({ list, battleField }) => {
  return (
    <ul className={css.list}>
      {list.map((cell) => {
        return <Cell key={nanoid()} cell={cell} battleField={battleField} />;
      })}
    </ul>
  );
};

export default Field;

import { nanoid } from "nanoid";
import Cell from "../Cell/Cell";
import css from "./Field.module.css";

const Field = ({ list, battleField, blockedCells }) => {
  return (
    <ul className={css.list}>
      {list.map((cell) => {
        return (
          <Cell
            key={nanoid()}
            cell={cell}
            battleField={battleField}
            blockedCells={blockedCells}
          />
        );
      })}
    </ul>
  );
};

export default Field;

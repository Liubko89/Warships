import { nanoid } from "nanoid";
import Cell from "../Cell/Cell";
import css from "./Field.module.css";

const Field = ({ list, battleFieldNumber, blockedCells }) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Player N{battleFieldNumber}</h1>
      <ul className={css.list}>
        {list.map((cell) => {
          return (
            <Cell
              key={nanoid()}
              cell={cell}
              battleFieldNumber={battleFieldNumber}
              blockedCells={blockedCells}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Field;

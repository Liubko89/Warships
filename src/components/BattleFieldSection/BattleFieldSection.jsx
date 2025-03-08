import { useState } from "react";
import Field from "../Field/Field";
import ResetBtn from "../ResetBtn/ResetBtn";
import SaveBtn from "../SaveBtn/SaveBtn";
import css from "./BattleFieldSection.module.css";

const BattleFieldSection = ({
  list,
  battleFieldNumber,
  blockedCells,
  resetBlockedCellsBF,
  player,
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const closeModal = () => {
    setIsClosed(true);
  };
  return (
    <div className={css.fieldWrapper}>
      <Field
        list={list}
        battleFieldNumber={battleFieldNumber}
        blockedCells={blockedCells}
      />
      {battleFieldNumber.toString() === player && (
        <>
          {list.filter((e) => !e.empty).length === 20 && !isClosed && (
            <div className={css.saveWrapper}>
              <SaveBtn
                battleFieldNumber={battleFieldNumber}
                closeModal={closeModal}
              />
              <ResetBtn
                battleFieldNumber={battleFieldNumber}
                resetBlockedCells={resetBlockedCellsBF}
              />
            </div>
          )}
          {list.filter((e) => !e.empty).length < 20 && (
            <ResetBtn
              battleFieldNumber={battleFieldNumber}
              resetBlockedCells={resetBlockedCellsBF}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BattleFieldSection;

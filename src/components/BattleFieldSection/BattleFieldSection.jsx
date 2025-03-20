import { useState } from "react";
import Field from "../Field/Field";
import ResetBtn from "../ResetBtn/ResetBtn";
import SaveBtn from "../SaveBtn/SaveBtn";
import css from "./BattleFieldSection.module.css";
import { useSelector } from "react-redux";
import {
  selectFirstPlayerIsReady,
  selectSecondPlayerIsReady,
} from "../../redux/warships/selectors";

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

  const firstReady = useSelector(selectFirstPlayerIsReady);
  const secondReady = useSelector(selectSecondPlayerIsReady);

  return (
    <div className={css.fieldWrapper}>
      <Field
        list={list}
        battleFieldNumber={battleFieldNumber}
        blockedCells={blockedCells}
      />
      {battleFieldNumber.toString() === player &&
        ((!firstReady && player === "1") ||
          (!secondReady && player === "2")) && (
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

import { useEffect, useState } from "react";
import Field from "../Field/Field";
import ResetBtn from "../ResetBtn/ResetBtn";
import SaveBtn from "../SaveBtn/SaveBtn";
import css from "./BattleFieldSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFirstPlayerIsReady,
  selectSecondPlayerIsReady,
} from "../../redux/warships/selectors";
import {
  getBattleField_1,
  getBattleField_2,
} from "../../redux/warships/operations";

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
  const dispatch = useDispatch();

  const firstReady = useSelector(selectFirstPlayerIsReady);
  const secondReady = useSelector(selectSecondPlayerIsReady);

  useEffect(() => {
    let intID_1;
    let intID_2;
    if (player === "1" && firstReady && !secondReady) {
      intID_1 = setInterval(() => {
        dispatch(getBattleField_2());
      }, 5000);
    }
    if (player === "2" && !firstReady && secondReady) {
      intID_1 = setInterval(() => {
        dispatch(getBattleField_1());
      }, 5000);
    }
    return () => {
      if (intID_1) {
        clearInterval(intID_1);
      }
      if (intID_2) {
        clearInterval(intID_2);
      }
    };
  }, [firstReady, secondReady, player]);

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

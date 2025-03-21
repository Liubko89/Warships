import { useDispatch, useSelector } from "react-redux";
import css from "./PlayerChoice.module.css";
import { choosePlayer } from "../../redux/warships/slice";
import {
  engageFirstPlayer,
  engageSecondPlayer,
  getBattleField_1,
  getBattleField_2,
} from "../../redux/warships/operations";
import {
  selectEngagedFirstPlayer,
  selectEngagedSecondPlayer,
} from "../../redux/warships/selectors";
import { useEffect } from "react";
import clsx from "clsx";

const PlayerChoice = () => {
  const dispatch = useDispatch();

  const firstPlayerEngaged = useSelector(selectEngagedFirstPlayer);
  const secondPlayerEngaged = useSelector(selectEngagedSecondPlayer);

  const handleClickPlayer1 = () => {
    dispatch(choosePlayer("1"));
    dispatch(engageFirstPlayer({ engaged: true }));
  };
  const handleClickPlayer2 = () => {
    dispatch(choosePlayer("2"));
    dispatch(engageSecondPlayer({ engaged: true }));
  };

  useEffect(() => {
    dispatch(getBattleField_1());
    dispatch(getBattleField_2());
  }, []);

  return (
    <div className={css.wrapper}>
      <strong className={css.title}>Choose a player</strong>

      <button
        className={clsx(css.btn, firstPlayerEngaged && css.disabled)}
        type="button"
        onClick={handleClickPlayer1}
      >
        Player 1
      </button>
      <button
        className={clsx(css.btn, secondPlayerEngaged && css.disabled)}
        type="button"
        onClick={handleClickPlayer2}
      >
        Player 2
      </button>
    </div>
  );
};

export default PlayerChoice;

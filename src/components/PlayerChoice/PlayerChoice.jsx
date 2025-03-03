import { useDispatch } from "react-redux";
import css from "./PlayerChoice.module.css";
import { choosePlayer } from "../../redux/warships/slice";

const PlayerChoice = () => {
  const dispatch = useDispatch();
  const handleClickPlayer1 = () => {
    dispatch(choosePlayer("1"));
  };
  const handleClickPlayer2 = () => {
    dispatch(choosePlayer("2"));
  };
  return (
    <div className={css.wrapper}>
      <strong className={css.title}>Choose a player</strong>

      <button className={css.btn} type="button" onClick={handleClickPlayer1}>
        Player 1
      </button>
      <button className={css.btn} type="button" onClick={handleClickPlayer2}>
        Player 2
      </button>
    </div>
  );
};

export default PlayerChoice;

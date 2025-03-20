import { useDispatch } from "react-redux";
import { defaultArr } from "../../helpers/defaultBattleFields";
import { resetField_1, resetField_2 } from "../../redux/warships/operations";
import { choosePlayer } from "../../redux/warships/slice";

const FinishTheGameButton = ({
  resetBlockedCellsBF_1,
  resetBlockedCellsBF_2,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(choosePlayer(""));
    resetBlockedCellsBF_1();
    resetBlockedCellsBF_2();
    dispatch(resetField_1(defaultArr));
    dispatch(resetField_2(defaultArr));
  };

  return (
    <button
      className="btn"
      style={{ margin: "18px auto", backgroundColor: "red" }}
      type="button"
      onClick={handleClick}
    >
      Finish the Game
    </button>
  );
};

export default FinishTheGameButton;

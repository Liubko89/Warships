import css from "./FinishTheGameButton.module.css";
import { useDispatch } from "react-redux";
import { defaultArr } from "../../helpers/defaultBattleFields";
import { resetField_1, resetField_2 } from "../../redux/warships/operations";

const FinishTheGameButton = ({
  resetBlockedCellsBF_1,
  resetBlockedCellsBF_2,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    resetBlockedCellsBF_1();
    resetBlockedCellsBF_2();
    dispatch(resetField_1(defaultArr));
    dispatch(resetField_2(defaultArr));
  };

  return (
    <button className="btn" type="button" onClick={handleClick}>
      Finish the Game
    </button>
  );
};

export default FinishTheGameButton;

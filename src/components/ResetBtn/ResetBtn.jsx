import { useDispatch } from "react-redux";
import css from "./ResetBtn.module.css";
import { resetField_1, resetField_2 } from "../../redux/warships/operations";
import { defaultArr } from "../../helpers/defaultBattleFields";

const ResetBtn = ({ battleFieldNumber, resetBlockedCells }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    resetBlockedCells();
    battleFieldNumber === 1
      ? dispatch(resetField_1(defaultArr))
      : dispatch(resetField_2(defaultArr));
  };

  return (
    <button className={css.btn} onClick={handleClick}>
      Reset
    </button>
  );
};

export default ResetBtn;

import { useDispatch, useSelector } from "react-redux";
import css from "./SaveBtn.module.css";
import {
  updateBattleField_1,
  updateBattleField_2,
} from "../../redux/warships/operations";
import {
  selectBattleField_1,
  selectBattleField_2,
} from "../../redux/warships/selectors";

const SaveBtn = ({ battleField }) => {
  const dispatch = useDispatch();
  const field1 = useSelector(selectBattleField_1);
  const field2 = useSelector(selectBattleField_2);

  const handleCklick = () => {
    battleField === 1
      ? dispatch(updateBattleField_1(field1))
      : dispatch(updateBattleField_2(field2));
  };

  return (
    <button className={css.btn} onClick={handleCklick}>
      Save
    </button>
  );
};

export default SaveBtn;

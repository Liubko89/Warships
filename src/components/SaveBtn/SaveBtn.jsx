import { useDispatch, useSelector } from "react-redux";
import {
  updateBattleField_1,
  updateBattleField_2,
} from "../../redux/warships/operations";
import {
  selectBattleField_1,
  selectBattleField_2,
} from "../../redux/warships/selectors";

const SaveBtn = ({ battleFieldNumber, closeModal }) => {
  const dispatch = useDispatch();
  const field1 = useSelector(selectBattleField_1);
  const field2 = useSelector(selectBattleField_2);

  const handleCklick = () => {
    battleFieldNumber === 1
      ? dispatch(updateBattleField_1(field1))
      : dispatch(updateBattleField_2(field2));

    closeModal();
  };

  return (
    <button className="btn" onClick={handleCklick} style={{ margin: "0" }}>
      Start
    </button>
  );
};

export default SaveBtn;

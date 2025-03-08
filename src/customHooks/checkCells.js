import { useDispatch, useSelector } from "react-redux";
import {
  selectBattleField_1,
  selectBattleField_2,
} from "../redux/warships/selectors";
import {
  updateBattleField_1,
  updateBattleField_2,
} from "../redux/warships/operations";

const useCheckCells = (cell) => {
  const dispatch = useDispatch();
  const BF_1 = useSelector(selectBattleField_1);
  const BF_2 = useSelector(selectBattleField_2);

  const handleCheckBF_1 = () => {
    const checkedCells = BF_1.map((e) => {
      if (e.id === cell.id && !e.empty) {
        return { ...e, checked: true, wounded: true };
      } else if (e.id === cell.id) {
        return { ...e, checked: true };
      }
      return e;
    });

    dispatch(updateBattleField_1(checkedCells));
  };

  const handleCheckBF_2 = () => {
    const checkedCells = BF_2.map((e) => {
      if (e.id === cell.id && !e.empty) {
        return { ...e, checked: true, wounded: true };
      } else if (e.id === cell.id) {
        return { ...e, checked: true };
      }
      return e;
    });

    dispatch(updateBattleField_2(checkedCells));
  };

  return { handleCheckBF_1, handleCheckBF_2 };
};

export default useCheckCells;

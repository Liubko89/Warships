import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBattleField_1,
  selectBattleField_2,
  selectError,
  selectIsLoading,
} from "../redux/warships/selectors";
import {
  getBattleField_1,
  getBattleField_2,
} from "../redux/warships/operations";

const useFetchData = () => {
  const dispatch = useDispatch();
  const battleField_1 = useSelector(selectBattleField_1);
  const battleField_2 = useSelector(selectBattleField_2);
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

  useEffect(() => {
    dispatch(getBattleField_1());
    dispatch(getBattleField_2());
  }, []);

  return { battleField_1, battleField_2, isLoading, errorMessage };
};

export default useFetchData;

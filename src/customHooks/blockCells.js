import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBattleField_1,
  selectBattleField_2,
} from "../redux/warships/selectors";
import { setBlockedCells } from "../helpers/blockCells";

const useBlockCells = () => {
  const battleField_1 = useSelector(selectBattleField_1);
  const battleField_2 = useSelector(selectBattleField_2);
  const [blockedCellsBF_1, setBlockedCellsBF_1] = useState([]);
  const [blockedCellsBF_2, setBlockedCellsBF_2] = useState([]);

  useEffect(() => {
    const filledCellsBF_1 = battleField_1
      .filter((cell) => !cell.empty)
      .map((cell) => cell.id);
    const filledCellsBF_2 = battleField_2
      .filter((cell) => !cell.empty)
      .map((cell) => cell.id);

    setBlockedCells(filledCellsBF_1, setBlockedCellsBF_1, battleField_1);
    setBlockedCells(filledCellsBF_2, setBlockedCellsBF_2, battleField_2);
  }, [battleField_1, battleField_2]);

  const resetBlockedCellsBF_1 = () => {
    setBlockedCellsBF_1([]);
  };
  const resetBlockedCellsBF_2 = () => {
    setBlockedCellsBF_2([]);
  };

  return {
    blockedCellsBF_1,
    blockedCellsBF_2,
    resetBlockedCellsBF_1,
    resetBlockedCellsBF_2,
  };
};

export default useBlockCells;

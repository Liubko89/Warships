import "./App.css";
import useFetchData from "./customHooks/fetchData";
import useBlockCells from "./customHooks/blockCells";
import { useSelector } from "react-redux";
import PlayerChoice from "./components/PlayerChoice/PlayerChoice";
import {
  selectFirstPlayerIsReady,
  selectPlayer,
  selectSecondPlayerIsReady,
} from "./redux/warships/selectors";
import BattleFieldSection from "./components/BattleFieldSection/BattleFieldSection";

function App() {
  const { battleField_1, battleField_2, isLoading, errorMessage } =
    useFetchData();

  const player = useSelector(selectPlayer);
  const firstPlayerIsReady = useSelector(selectFirstPlayerIsReady);
  const secondPlayerIsReady = useSelector(selectSecondPlayerIsReady);

  const {
    blockedCellsBF_1,
    blockedCellsBF_2,
    resetBlockedCellsBF_1,
    resetBlockedCellsBF_2,
  } = useBlockCells();

  return (
    <>
      {player === "" && <PlayerChoice />}

      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}

      {!errorMessage &&
        !isLoading &&
        Array.isArray(battleField_1) &&
        battleField_1.length > 0 &&
        (player === "1" || (player === "2" && firstPlayerIsReady)) && (
          <BattleFieldSection
            list={battleField_1}
            battleFieldNumber={1}
            blockedCells={blockedCellsBF_1}
            resetBlockedCellsBF={resetBlockedCellsBF_1}
          />
        )}

      {!errorMessage &&
        !isLoading &&
        Array.isArray(battleField_2) &&
        battleField_2.length > 0 &&
        (player === "2" || (player === "1" && secondPlayerIsReady)) && (
          <BattleFieldSection
            list={battleField_2}
            battleFieldNumber={2}
            blockedCells={blockedCellsBF_2}
            resetBlockedCellsBF={resetBlockedCellsBF_2}
          />
        )}
    </>
  );
}

export default App;

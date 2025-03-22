import "./App.css";
import useFetchData from "./customHooks/fetchData";
import useBlockCells from "./customHooks/blockCells";
import { useDispatch, useSelector } from "react-redux";
import PlayerChoice from "./components/PlayerChoice/PlayerChoice";
import {
  selectFirstPlayerIsReady,
  selectPlayer,
  selectSecondPlayerIsReady,
} from "./redux/warships/selectors";
import BattleFieldSection from "./components/BattleFieldSection/BattleFieldSection";
import FinishTheGameButton from "./components/FinishTheGameButton/FinishTheGameButton";
import { BarLoader, BounceLoader } from "react-spinners";

function App() {
  const { battleField_1, battleField_2, isLoading, errorMessage } =
    useFetchData();
  const player = useSelector(selectPlayer);
  const firstPlayerIsReady = useSelector(selectFirstPlayerIsReady);
  const secondPlayerIsReady = useSelector(selectSecondPlayerIsReady);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const {
    blockedCellsBF_1,
    blockedCellsBF_2,
    resetBlockedCellsBF_1,
    resetBlockedCellsBF_2,
  } = useBlockCells();

  return (
    <div className="battleZone">
      {player === "" && <PlayerChoice />}
      {isLoading && (
        <div className="loader">
          <BarLoader width={320} />
        </div>
      )}
      {errorMessage && <div>{errorMessage}</div>}
      {!errorMessage &&
        // !isLoading &&
        Array.isArray(battleField_1) &&
        battleField_1.length > 0 &&
        (player === "1" || (player === "2" && firstPlayerIsReady)) && (
          <BattleFieldSection
            list={battleField_1}
            battleFieldNumber={1}
            blockedCells={blockedCellsBF_1}
            resetBlockedCellsBF={resetBlockedCellsBF_1}
            player={player}
          />
        )}
      {!errorMessage && !isLoading && player === "2" && !firstPlayerIsReady && (
        <div style={{ alignContent: "center" }}>
          <p style={{ textAlign: "center" }}>waiting for a player</p>
          <BounceLoader
            color={"green"}
            loading={true}
            cssOverride={override}
            size={120}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {!errorMessage &&
        // !isLoading &&
        Array.isArray(battleField_2) &&
        battleField_2.length > 0 &&
        (player === "2" || (player === "1" && secondPlayerIsReady)) && (
          <BattleFieldSection
            list={battleField_2}
            battleFieldNumber={2}
            blockedCells={blockedCellsBF_2}
            resetBlockedCellsBF={resetBlockedCellsBF_2}
            player={player}
          />
        )}
      {!errorMessage &&
        !isLoading &&
        player === "1" &&
        !secondPlayerIsReady && (
          <div style={{ alignContent: "center", width: "100%" }}>
            <p style={{ textAlign: "center" }}>waiting for a player</p>
            <BounceLoader
              color={"green"}
              loading={true}
              cssOverride={override}
              size={120}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      {firstPlayerIsReady && secondPlayerIsReady && (
        <FinishTheGameButton
          resetBlockedCellsBF_1={resetBlockedCellsBF_1}
          resetBlockedCellsBF_2={resetBlockedCellsBF_2}
        />
      )}
    </div>
  );
}

export default App;

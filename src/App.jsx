import "./App.css";
import Field from "./components/Field/Field";
import ResetBtn from "./components/ResetBtn/ResetBtn";
import SaveBtn from "./components/SaveBtn/SaveBtn";
import useFetchData from "./customHooks/fetchData";
import useBlockCells from "./customHooks/blockCells";
import { useSelector } from "react-redux";
import PlayerChoice from "./components/PlayerChoice/PlayerChoice";
import { selectPlayer } from "./redux/warships/selectors";

function App() {
  const { battleField_1, battleField_2, isLoading, errorMessage } =
    useFetchData();

  const player = useSelector(selectPlayer);

  const {
    blockedCellsBF_1,
    blockedCellsBF_2,
    resetBlockedCellsBF_1,
    resetBlockedCellsBF_2,
  } = useBlockCells();

  return (
    <div className="container">
      {player === "" && <PlayerChoice />}

      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}

      {!errorMessage &&
        !isLoading &&
        Array.isArray(battleField_1) &&
        battleField_1.length > 0 && (
          <div>
            <Field
              list={battleField_1}
              battleField={1}
              blockedCells={blockedCellsBF_1}
            />
            {battleField_1.filter((e) => !e.empty).length === 20 && (
              <SaveBtn battleField={1} />
            )}
            <ResetBtn
              battleField={1}
              resetBlockedCells={resetBlockedCellsBF_1}
            />
          </div>
        )}

      {!errorMessage &&
        !isLoading &&
        Array.isArray(battleField_2) &&
        battleField_2.length > 0 && (
          <div>
            <Field
              list={battleField_2}
              battleField={2}
              blockedCells={blockedCellsBF_2}
            />
            {battleField_2.filter((e) => !e.empty).length === 20 && (
              <SaveBtn battleField={2} />
            )}
            <ResetBtn
              battleField={2}
              resetBlockedCells={resetBlockedCellsBF_2}
            />
          </div>
        )}
    </div>
  );
}

export default App;

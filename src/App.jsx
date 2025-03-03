import "./App.css";
import Field from "./components/Field/Field";
import ResetBtn from "./components/ResetBtn/ResetBtn";
import SaveBtn from "./components/SaveBtn/SaveBtn";
import useFetchData from "./customHooks/fetchData";
import useBlockCells from "./customHooks/blockCells";

function App() {
  const { battleField_1, battleField_2, isLoading, errorMessage } =
    useFetchData();

  const {
    blockedCellsBF_1,
    blockedCellsBF_2,
    resetBlockedCellsBF_1,
    resetBlockedCellsBF_2,
  } = useBlockCells();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}

      {!errorMessage &&
        !isLoading &&
        Array.isArray(battleField_1) &&
        battleField_1.length > 0 && (
          <>
            <Field
              list={battleField_1}
              battleField={1}
              blockedCells={blockedCellsBF_1}
            />
            <SaveBtn battleField={1} />
            <ResetBtn
              battleField={1}
              resetBlockedCells={resetBlockedCellsBF_1}
            />
          </>
        )}

      {!errorMessage &&
        !isLoading &&
        Array.isArray(battleField_2) &&
        battleField_2.length > 0 && (
          <>
            <Field
              list={battleField_2}
              battleField={2}
              blockedCells={blockedCellsBF_2}
            />
            <SaveBtn battleField={2} />
            <ResetBtn
              battleField={2}
              resetBlockedCells={resetBlockedCellsBF_1}
            />
          </>
        )}
    </>
  );
}

export default App;

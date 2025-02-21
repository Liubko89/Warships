import "./App.css";
import Field from "./components/Field/Field";
import ResetBtn from "./components/ResetBtn/ResetBtn";
import useFetchData from "./customHooks/fetchData";

function App() {
  const { battleField_1, battleField_2, isLoading, errorMessage } =
    useFetchData();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}

      {!errorMessage &&
        !isLoading &&
        Array.isArray(battleField_1) &&
        battleField_1.length > 0 && <Field list={battleField_1} />}

      {!errorMessage &&
        !isLoading &&
        Array.isArray(battleField_2) &&
        battleField_2.length > 0 && <Field list={battleField_2} />}
      <ResetBtn />
    </>
  );
}

export default App;

import "./App.css";
import Field from "./components/Field/Field";
import useFetchData from "./customHooks/fetchData";

function App() {
  const { field1, field2, isLoading, isError, errorMessage } = useFetchData();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{errorMessage}</div>}
      {!isError && !isLoading && Array.isArray(field1) && field1.length > 0 && (
        <Field list={field1} />
      )}
      {!isError && !isLoading && Array.isArray(field2) && field2.length > 0 && (
        <Field list={field2} />
      )}
    </>
  );
}

export default App;

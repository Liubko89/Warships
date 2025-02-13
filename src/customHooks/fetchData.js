import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { getFirstField, getSecondField } from "../helpers/apiService";

const useFetchData = () => {
  const [field1, setField1] = useState([]);
  const [field2, setField2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getFirstField();
        const response2 = await getSecondField();

        setField1(response);
        setField2(response2);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { field1, field2, isLoading, isError, errorMessage };
};

export default useFetchData;

import axios from "axios";

axios.defaults.baseURL = "https://67ae61519e85da2f020d5545.mockapi.io";

export const getFirstField = async () => {
  const response = await axios.get("firstcells");
  console.log(response);

  return response.data;
};

export const getSecondField = async () => {
  const { data } = await axios.get("secondcells");
  return data;
};

// const cell = {
//   empty: true,
//   filled: false,
//   wounded: false,
//   killed: false,
//   checked: false,
// };

// export const fieldArrayFirst = Array(100).fill(cell);
// export const fieldArraySecond = Array(100).fill(cell);

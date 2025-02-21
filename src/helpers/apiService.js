import axios from "axios";

axios.defaults.baseURL = "https://67ae61519e85da2f020d5545.mockapi.io";

export const getFirstField = async () => {
  const { data } = await axios.get("firstcells");

  return data[0].cells;
};

export const updateCellByIdInFild_1 = async (body) => {
  const { data } = await axios.put(`firstcells/1`, { cells: body });
  return data.cells;
};

export const resetFild_1 = async (body) => {
  const { data } = await axios.put("firstcells/1", body);
  return data.cells;
};

export const getSecondField = async () => {
  const { data } = await axios.get("secondcells");
  return data[0].cells;
};

export const updateCellByIdInFild_2 = async (body) => {
  const { data } = await axios.put(`secondcells/1`, { cells: body });
  return data.cells;
};

export const resetFild_2 = async (body) => {
  const { data } = await axios.put("secondcells/1", body);
  return data.cells;
};

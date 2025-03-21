import axios from "axios";

axios.defaults.baseURL = "https://67ae61519e85da2f020d5545.mockapi.io";

export const getFirstField = async () => {
  const { data } = await axios.get("firstcells");

  return data[0];
};

export const updateFild_1 = async (body) => {
  if (body.filter((e) => !e.empty).length === 20) {
    const { data } = await axios.put(`firstcells/1`, {
      cells: body,
      isReadyToPlay: true,
    });
    return data;
  } else {
    const { data } = await axios.put(`firstcells/1`, {
      cells: body,
      isReadyToPlay: false,
    });
    return data;
  }
};

export const resetFild_1 = async (body) => {
  const { data } = await axios.put("firstcells/1", body);
  return data.cells;
};

export const engagePlayer_1 = async (body) => {
  const { data } = await axios.put("firstcells/1", body);
  return data;
};

export const getSecondField = async () => {
  const { data } = await axios.get("secondcells");
  return data[0];
};

export const updateFild_2 = async (body) => {
  if (body.filter((e) => !e.empty).length === 20) {
    const { data } = await axios.put(`secondcells/1`, {
      cells: body,
      isReadyToPlay: true,
    });
    return data;
  } else {
    const { data } = await axios.put(`secondcells/1`, {
      cells: body,
      isReadyToPlay: false,
    });
    return data;
  }
};

export const resetFild_2 = async (body) => {
  const { data } = await axios.put("secondcells/1", body);
  return data.cells;
};

export const engagePlayer_2 = async (body) => {
  const { data } = await axios.put("secondcells/1", body);
  return data;
};

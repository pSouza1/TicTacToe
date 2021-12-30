import axios from "axios";

const baseUrl = "http://localhost:3001/score";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const update = (newObject) => {
  const request = axios.put(baseUrl, newObject);
  return request.then((response) => response.data);
};

export default {
  getAll: getAll,
  update: update,
};

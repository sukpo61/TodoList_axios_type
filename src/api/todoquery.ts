import axios from "axios";

// 모든 todos를 가져오는 api
const getTodos = async () => {
  const response = await axios.get("http://localhost:3003/todos");
  return response;
};

export { getTodos };

import axios from "axios";

// 공통으로 뺐어요
export const SERVER_URI = "http://localhost:3003/todos";

const getTodos = async () => {
  const response = await axios.get(`${SERVER_URI}`);
  return response.data;
};

const addTodo = async (newTodo: any) => {
  await axios.post(`${SERVER_URI}`, newTodo);
};
const deleteTodo = async (newTodo: any) => {
  await axios.delete(`${SERVER_URI}/${newTodo}`);
};
const updateTodo = async (newTodo: any) => {
  await axios.patch(`${SERVER_URI}/${newTodo.id}`, newTodo);
};

export { getTodos, addTodo, deleteTodo, updateTodo };

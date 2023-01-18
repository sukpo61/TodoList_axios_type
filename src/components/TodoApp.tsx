import React, { useEffect } from "react";
import TodoAddform from "./TodoAddform";
import TodosContainer from "./TodosContainer";
import styled from "styled-components";
import { __getTodo } from "../redux/modules/todos";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const TodoApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  return (
    <TodoAppWrap>
      <TodoAddform></TodoAddform>
      <TodosContainer isActive={false}></TodosContainer>
      <TodosContainer isActive={true}></TodosContainer>
    </TodoAppWrap>
  );
};

const TodoAppWrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default TodoApp;

// const createTodoKind = (...args) => {
//   return {}
// }

// const shiftTodo = {
//   todo: "progress",
//   progress: "QA",
//   QA: "Done",
// }

// const unshiftTodo = {
//   progress: "todo",
//   QA: "progress",
//   Done: "QA",
// }

// const TodoItem = ({ id, kind, content, title }) => {
//   const dispatch = useDispatch();
//   const handleDelete = (id) => {
//     dispatch(deleteTodoThunk(id));
//   };
//   const handleMove = (kind) => {
//     const updateItem = {
//       id,
//       content,
//       title,
//       kind: shiftTodo[kind],
//     };
//     dispatch(moveTodoThunk(updateItem));
//   };
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{content}</p>
//       <div>
//         <button onClick={() => handleDelete(id)}>삭제</button>
//         <button onClick={() => handleMove(kind)}>{shiftTodoText[kind]}</button>
//         {/* 완료 : 취소 */}
//       </div>
//     </div>
//   );
// };

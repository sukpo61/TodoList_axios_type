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

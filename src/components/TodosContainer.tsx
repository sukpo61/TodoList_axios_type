import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getTodo } from "../redux/modules/todos";
import TodoContainer from "./TodoContainer";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

interface TodosContainerType {
  isActive: boolean;
}

const TodosContainer = ({ isActive }: TodosContainerType) => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <TodosContainerWrap>
      {isActive ? <Title>Done</Title> : <Title>Working</Title>}
      <Contents>
        {todos.map(
          (todo, index) =>
            todo.isDone === isActive && (
              <TodoContainer key={todo.id} todo={todo}></TodoContainer>
            )
        )}
      </Contents>
    </TodosContainerWrap>
  );
};

export default TodosContainer;

const TodosContainerWrap = styled.div`
  margin: 20px 0;

  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const Contents = styled.div`
  margin: 20px 0;

  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-direction: row;
`;

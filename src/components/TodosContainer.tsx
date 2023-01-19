import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoContainer from "./TodoContainer";
import { getTodos } from "../api/todoquery";
import { useQuery } from "react-query";

const TodosContainer = ({ isActive }) => {
  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <TodosContainerWrap>
      {isActive ? <Title>Done</Title> : <Title>Working</Title>}
      <Contents>
        {data?.map(
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

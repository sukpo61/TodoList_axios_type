import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoContainer from "./TodoContainer";
import { getTodos } from "../api/todoquery";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
interface errortype {}

interface todotype {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  displaytoggle: boolean;
}

interface TData {
  title: string;
  content: string;
}

const TodosContainer = ({ isActive }: any) => {
  const { isLoading, isError, data } = useQuery<todotype[], AxiosError>(
    "todos",
    getTodos
  );

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
          (todo) =>
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

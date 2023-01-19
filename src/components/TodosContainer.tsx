import styled from "styled-components";
import { __getTodo } from "../redux/modules/todos";
import TodoContainer from "./TodoContainer";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getTodos } from "../api/todoquery";
import { useQuery } from "react-query";

interface TodosProps {
  TQueryFnData: unknown;
  TError: unknown;
}

interface TodosContainerType {
  isActive: boolean;
}

const TodosContainer = ({ isActive }: TodosContainerType) => {
  const { data } = useQuery<any>({
    queryKey: ["todo"],
    queryFn: getTodos,
  });
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

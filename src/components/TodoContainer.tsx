import React from "react";
import styled from "styled-components";
import CusttomButton from "./CusttomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo, updateTodo } from "../api/todoquery";
import { useMutation, useQueryClient } from "react-query";

const TodoContainer = ({ todo }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const queryClient = useQueryClient();

  const deleteMutate = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const updateMutate = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  // const canSave = [content, title].every(Boolean);
  const UpdateTodo = () => {
    // if (content === "" || title === "") {
    //   window.alert("제목및 내용을 입력하세요");
    //   return;
    // }
    let NewTodo = {
      ...todo,
      title,
      content,
      displaytoggle: !todo.displaytoggle,
    };

    updateMutate.mutate(NewTodo);
  };

  const ToggleTodo = () => {
    let NewTodo = {
      ...todo,
      displaytoggle: !todo.displaytoggle,
    };

    updateMutate.mutate(NewTodo);
  };

  const ToggleisDone = () => {
    let NewTodo = {
      ...todo,
      isDone: !todo.isDone,
    };
    console.log(NewTodo);

    updateMutate.mutate(NewTodo);
  };

  return (
    <TodoContainerWrap>
      <TitleWrap>
        <div>제목 : {todo.title}</div>
        <CusttomButton
          onClickFuntion={() => {
            navigate(`/${todo.id}`);
          }}
        >
          보기
        </CusttomButton>
      </TitleWrap>
      {todo.displaytoggle ? (
        <div> 내용 : {todo.content} </div>
      ) : (
        <InputsWrap>
          <TodoInput
            className="contents"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TodoInput
            className="contents"
            type="text"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </InputsWrap>
      )}
      {todo.displaytoggle ? (
        <ButtonsWrap>
          <CusttomButton
            onClickFuntion={() => {
              deleteMutate.mutate(todo.id);
            }}
          >
            삭제
          </CusttomButton>
          <CusttomButton onClickFuntion={ToggleTodo}>수정</CusttomButton>
          <CusttomButton onClickFuntion={ToggleisDone}>
            {todo.isDone ? "취소" : "완료"}
          </CusttomButton>
        </ButtonsWrap>
      ) : (
        <ButtonsWrap>
          <CusttomButton onClickFuntion={ToggleTodo}>취소</CusttomButton>
          <CusttomButton onClickFuntion={UpdateTodo}>수정</CusttomButton>
        </ButtonsWrap>
      )}
    </TodoContainerWrap>
  );
};

export default TodoContainer;

// Tailwind
// https://www.youtube.com/watch?v=pYaamz6AyvU&list=PL0Zuz27SZ-6M8znNpim8dRiICRrP5HPft

const TodoInput = styled.input`
  border: 1px solid #eee;
  margin: 0 12px;
  height: 25px;
  width: 90%;
  border-radius: 12px;
  outline: none;
`;

const TodoContainerWrap = styled.div`
  height: 200px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`;

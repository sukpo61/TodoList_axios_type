import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useInput } from "../hooks";

// https://tkdodo.eu/blog/practical-react-query

const TodoAddform = () => {
  const {
    value: title,
    setinputValue: setTitleValue,
    reset: resetTitle,
  } = useInput("");
  const {
    value: content,
    setinputValue: setContentValue,
    reset: resetContent,
  } = useInput("");

  const dispatch = useAppDispatch();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (content === "" || title === "") {
      window.alert("제목및 내용을 입력하세요");
      return;
    }

    let NewData = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
      displaytoggle: true,
    };

    dispatch(__addTodo(NewData));

    resetTitle();
    resetContent();

    // setTitle("");
    // setContent("");
  };

  return (
    <TodoAddformWrap>
      <TodoForm onSubmit={onSubmitHandler}>
        <TodoInput
          className="title"
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={setTitleValue}
        />
        <TodoInput
          className="contents"
          type="text"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={setContentValue}
        />
        <CusttomButton>추가</CusttomButton>
      </TodoForm>
    </TodoAddformWrap>
  );
};

export default TodoAddform;

const TodoAddformWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;
const TodoForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const TodoInput = styled.input`
  border: 1px solid #eee;
  margin: 0 12px;
  height: 25px;
  width: 40%;
  border-radius: 12px;
  outline: none;
`;

const CusttomButton = styled.button`
  width: 60px;
  height: 30px;
  cursor: pointer;
  border: 0.5px solid #a5a5a5;
  border-radius: 30px;
  font-weight: 200;
  font-size: 12px;
  color: #000000;
  background-color: white;
`;

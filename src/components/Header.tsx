import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <span>TodoList</span>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 400;
    font-size: 18px;
  }
`;

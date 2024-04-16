import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <StTest>
      <div className="mainFrame">
        <div className="leftFrame">사진</div>
        <div className="rightFrame">
          <div className="upperContent">소개글</div>
          <div className="bottomContent">해시태그</div>
        </div>
      </div>
    </StTest>
  );
}

const StTest = styled.div`
  .mainFrame {
    display: flex;
    gap: 20px;
    width: 100%;
    .leftFrame {
      width: 500px;
      height: 600px;
      background-color: red;
    }
    .rightFrame {
      display: flex; // 가로 정렬을 하겠다.
      flex-direction: column; // 세로 정렬 하겠다.
      width: 800px;
      height: 600px;
      background-color: green;
      gap: 50px;
      .upperContent {
        width: 800px;
        height: 500px;
        background-color: blue;
      }
      .bottomContent {
        width: 800px;
        height: 50px;
        background-color: purple;
      }
    }
  }
`;

export default App;

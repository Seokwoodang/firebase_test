import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <StTest>
      <div className="mainFrame">
        <div className="leftFrame">
          <img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20210703000259&path-prefix=ko" />
          <p>성함</p>
        </div>
        <div className="rightFrame">멤버 표시Name="upperContent"소개글sss</div>
        <div className="bottomContent">해dd시태그dd</div>
      </div>
    </StTest>
  );
}

const StTest = styled.div`
  .mainFrame {
    display: flex;
    /* gap: 20px; */

    width: 100%;
    .leftFrame {
      width: 500px;
      height: 600px;
      background-color: red;
    }
    .rightFrame {
      /* display: flex; // 가로 정렬을 하겠다. */
      /* flex-direction: column; // 세로 정렬 하겠다. */
      /* justify-content: space-between; // 각각의 컨텐츠가 양 끝으로가! */
      width: 800px;
      height: 600px;
      background-color: green;
      /* gap: 50px; */
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

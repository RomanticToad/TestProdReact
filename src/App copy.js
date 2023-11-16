import logo from "./logo.svg";
import "./App.css";
import { Button, Space, DatePicker, version } from "antd";
// 페이지 이동을 위한 설정1
import { BrowserRouter, Route, Routes } from "react-router-dom";

//자식 컴포넌트 요소
import Main from "./component/Main";
import Join from "./component/Join";
import MyCount from "./component/MyCount";
import RefPracticeScrollTest from "./ch_5component/RefPracticeScrollTest";
import DataListKeyAddDelTest from "./ch6_component/DataListKeyAddDelTest";
import LifeCycleTest from "./ch7_classLifeCycle/LifeCycleTest";
import { useState } from "react";

function App() {

  //색상을 랜덤하게 변경시켜서, 이전상태와 props, 스냅샷 확인
  function getRandomColor(){
    //0~1사이에 숫자에서, 16777215 이만큼 : RGB코드 #00ff00 : 16*16*16*16*16*16*= 16^6
    // 0~16777215 사이의 값을 랜덤하게 출력하기
    //출력의 모양은 16진수 : 0~f
    return "#+Math.floor(Math.random() * 16777215).toString(16)"
  }
  //부모 App -> 자식컴포넌트로 , props 에 color 전달하기
  //초기값 상태 , state
//??????????????????????????????????????
  //자식에게 색깔을 전달하기 위해서, 이벤트 함수를 수행
//??????????????????????????????????????

  return (


    // 페이지 이동을 위한 설정2.
    // 전체 요소를 BrowserRouter로 감싸기
    // 구성요소는 Routes ->Route 로 구성할 예정.
    <BrowserRouter>
      <Routes>
        {/* 메인으로 사용할 페이지를 App 또는 Main.js로 해도 됨 */}
        <Route index element={<Main />} />

        {/* 주소 : http://localhost:3000/join -> 해당 페이지 안내 : element={<이동할 컴포넌트>} */}
        <Route path="join" element={<Join />} />

        <Route path="mycount" element={<MyCount />} />

        <Route path="scrollRefTest" element={<RefPracticeScrollTest />} />

        <Route path="listKeyDataAddDel" element={<DataListKeyAddDelTest />} />

        <Route path="ClassLifeCycleTest" element={<LifeCycleTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="App"> */
}
{
  /* <header className="App-header"> */
}
// <img src={logo} className="App-logo" alt="logo" />
{
  /* 튜토리얼 샘플 가져오기 */
}
// <div style={{ padding: "0 24px" }}>
// <h1>antd version: {version}</h1>
// <Space>
// <DatePicker />
// <Button type="primary">Primary Button</Button>
// </Space>
// </div>
{
  /* 튜토리얼 샘플 가져오기 */
}
// <Join />
// <p>
// Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
// </header>
// </div>

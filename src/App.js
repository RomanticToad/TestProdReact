//ch7 용 App.js
// import logo from "./logo.svg";
// import "./App.css";

// import { Component } from "react";
// import { Button } from "antd";
// import LifeCycleTest from "./ch7_classLifeCycle/LifeCycleTest";

// function getRandomColor() {
//   // 0~1 사이에 숫자에서, 16777215 이만큼 : RGB코드 #00ff00:16x16x16x16x16x16=16^6
//   // 0~16777215 사이의 값을 랜덤하게 출력하기.
//   // 출력의 모양은 16진수 : 0~f,
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   // 색상을 랜덤하게 변경 시켜서, 이전 상태와 props , 스냅샷 확인.

//   // 부모 App -> 자식 컴포넌트로, props에 color 전달하기.
//   state = {
//     color: "#000000",
//   };
//   // 자식에게 색깔을 전달하기 위해서, 이벤트 함수를 수행.
//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };
//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={this.handleClick}>
//           랜덤색상
//         </Button>
//         {/* 부모 컴포넌트 App, 자식 컴포넌트 LifeCycleTest
//         color={this.state.color} 전달, props 전달방식*/}
//         {/* color 라는 속성이 props라는 객체에 담겨져서 전달이 됨
//         자식 입장에서, props.color */}
//         <LifeCycleTest color={this.state.color} />
//       </div>
//     );
//   }
// }

// export default App;

//=========================================================================================================
import "./App.css";
// 페이지 이동을 위한 설정1
import { BrowserRouter, Route, Routes } from "react-router-dom";

//자식 컴포넌트 요소
import Main from "./component/Main";
import Join from "./component/Join";
import MyCount from "./component/MyCount";
import RefPracticeScrollTest from "./ch_5component/RefPracticeScrollTest";
import DataListKeyAddDelTest from "./ch6_component/DataListKeyAddDelTest";
import LifeCycleTest from "./ch7_classLifeCycle/LifeCycleTest";
import InfoTestUseState from "./ch8_hooksTest/InfoTestUseState";
import InfoTestUseEffect from "./ch8_hooksTest/InfoTestUseEffect";
import CountUseReducerTest from "./ch8_hooksTest/CountUseReducerTest";
import InfoTestUseReducer from "./ch8_hooksTest/InfoTestUseReducer";
import AverageUseMemoTest from "./ch8_hooksTest/AverageUseMemoTest";
import AverageUseCallbackTest from "./ch8_hooksTest/AverageUseCallbackTest";
import AverageUseRefTest from "./ch8_hooksTest/AverageUseRefTest";
import AverageUseParamsTest6 from "./ch8_hooksTest/AverageUseParamsTest6";
import InfoTestCustomHooks from "./ch8_hooksTest/InfoTestCustomHooks";
import TestSass from "./ch9_component/TestSass";
import StyledComponentsTest from "./ch9_component/StyledComponentsTest";
import TodoMain from "./ch10_TodoTest/TodoMain";
import ImmerTest from "./ch12_ImmerTest/ImmerTest";
import TestZone from "./ch12_ImmerTest/TestZone";
import ApiTest from "./ch13_API_PublicDataTest/ApiTest";
import ApiTestKoreaNews from "./ch13_API_PublicDataTest/ApiTestKoreaNews";
import MainNews from "./ch13_API_PublicDataTest/component/MainNews";
import NewsPage from "./ch13_API_PublicDataTest/page/NewsPage";
import TestColorBox from "./ch14_ContextAPITest/TestColorBox";
import TestColorMain from "./ch14_ContextAPITest/TestColorMain";
import MainRes from "./my_api_test/component/MainRes";

function App() {
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

        <Route path="useStateTest" element={<InfoTestUseState />} />

        <Route path="useEffectTest" element={<InfoTestUseEffect />} />

        <Route path="useReducerTest" element={<CountUseReducerTest />} />

        <Route path="InfouseReducerTest" element={<InfoTestUseReducer />} />

        <Route path="useMemoTest" element={<AverageUseMemoTest />} />

        <Route path="useCallbackTest" element={<AverageUseCallbackTest />} />

        <Route path="useRefTest" element={<AverageUseRefTest />} />

        <Route path="useParamsTest/:id" element={<AverageUseParamsTest6 />} />

        <Route path="customHooksTest" element={<InfoTestCustomHooks />} />

        <Route path="sassTest" element={<TestSass />} />

        <Route path="styledComponentsTest" element={<StyledComponentsTest />} />

        <Route path="toDoMainTest" element={<TodoMain />} />

        <Route path="immerTest" element={<ImmerTest />} />

        <Route path="testZone" element={<TestZone />} />

        <Route path="apiTest" element={<ApiTest />} />

        <Route path="apiTestKoreaNews" element={<ApiTestKoreaNews />} />

        <Route path="mainNews" element={<MainNews />} />

        <Route path="newsPageTest/:category" element={<NewsPage />} />

        <Route path="contextAPITest" element={<TestColorBox />} />

        <Route path="contextAPITest2" element={<TestColorMain />} />

        <Route path="myMatZipList" element={<MainRes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

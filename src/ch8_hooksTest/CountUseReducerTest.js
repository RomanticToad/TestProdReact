//훅스 useState 먼저 확인
//복습 해보기
//지금 부터는 모두 함수형 컴포넌트로 작업하기.
import {Button } from "antd";
import React, { useReducer} from "react";
import { useNavigate } from "react-router-dom";

// 설정1, 리듀서 함수 만들기
// state : 상태값,
// action : 무엇을 실행할 지 표시 ex) 증가 : "INCREMENT" , 감소 : "DECREMENT"
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const CountUseReducerTest = () => {
  //설정2, useReducer(리듀서함수, 초깃값) 사용하기
  //반환값 : 상태값, dispatch 함수
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const navigate = useNavigate();
  return (
    <div>
      <p>
        현재 값 : <b>{state.value}</b>
      </p>
      {/* 적용하기, dispatch 함수 호출해서, 해당 액션 문자열 사용하기 */}
      <Button type="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
        +1 증가
      </Button>
      <Button type="primary" onClick={() => dispatch({ type: "DECREMENT" })}>
        -1 감소
      </Button>

      <Button
        title="메인화면으로"
        type="primary"
        onClick={() => {
          navigate("/");
        }}
      >
        메인화면으로
      </Button>
    </div>
  );
};

export default CountUseReducerTest;

//훅스 useState 먼저 확인
//복습 해보기
//지금 부터는 모두 함수형 컴포넌트로 작업하기.
import { Affix, Button } from "antd";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
//=====================================================================================================
//기존에 useState로 구성된 컴포넌트
//Info 내용이, name, nickname ....

// 설정1, 리듀서 함수 만들기
// state : 상태값,
// action : 무엇을 실행할 지 표시
const reducer = (state, action) => {
  return {
    //Info 의 속성값, name, nickname 2개를
    //...spread 연산자 이용해서, 사본 만들고
    // 여기에 값을 추가하기.

    ...state,
    [action.name]: action.value,
  };
};
//=====================================================================================================
const InfoTestUseReducer = () => {
  //설정2, useReducer(리듀서함수, 초깃값) 사용하기
  //반환값 : 상태값, dispatch 함수
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  //비구조화 할당. 해당 객체의 멤버를 구조분해
  //name = state.name
  //nickname = state.nickname
  const { name, nickname } = state;

  //이벤트 핸들러 입력값에 변경사항을 반영하는 로직
  const onChange = (e) => {
    //적용하기. dispatch함수 호출해서 동작 시키기.
    dispatch(e.target);
  };

  const navigate = useNavigate();

  return (
    <div>
      {/* 적용하기, dispatch 함수 호출해서, 해당 액션 문자열 사용하기 */}
      <div>
        <div>
          {/* 입력창인데, 값을 입력시, onChange 이벤트 핸들러가 동작해서, 결과뷰에 반영 */}
          <input name="name" value={name} onChange={onChange} />
          <input name="nickname" value={nickname} onChange={onChange} />
        </div>
        {/* 결과뷰 출력 */}
        <div>
          <h1>이름 : {name}</h1>
        </div>
        <div>
          <h1>닉네임 : {nickname}</h1>
        </div>
      </div>
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

export default InfoTestUseReducer;

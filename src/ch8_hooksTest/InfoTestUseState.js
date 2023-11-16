//훅스 useState 먼저 확인
//복습 해보기
//지금 부터는 모두 함수형 컴포넌트로 작업하기.
import React, { useState } from "react";

const InfoTestUseState = () => {
  //state : 상태 , useState : 초기값 -> 결과는 2개를 반환.
  // 1 : state 상태값
  // 2 : 세터함수를 반환 -> 업데이트를 하는 함수.
  // setName -> name 의 값을 업데이트 해줌.
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 이벤트 핸들러 추가
  // 1.이름 캐멀케이스 표기법, 2.인자로는 함수형태로 전달.
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  //결과 출력하기 . 작성 문법은 JSX. -> 기존 HTML형식과 동일
  //리액트 컴포넌트는 대문자 시작
  // 기존DOM , 소문자태그
  return (
    <div>
      <div>
        {/* 입력창인데, 값을 입력시, onChange 이벤트 핸들러가 동작해서, 결과뷰에 반영 */}
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickName}></input>
      </div>
      {/* 결과뷰 출력 */}
      <div>
        <h1>이름 : {name}</h1>
      </div>
      <div>
        <h1>닉네임 : {nickname}</h1>
      </div>
    </div>
  );
};

export default InfoTestUseState;

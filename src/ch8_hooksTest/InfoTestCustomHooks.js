// 입력받는 기능을 분리한 파일을
//불러와서 테스트 할 환경
import React, { useState } from "react";
//순서1 설정. 파일 분리한 기능을 불러오기
import useInfoInputFunc from "./InfoInputFunc";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const InfoTestCustomHooks = () => {
  const navigate = useNavigate();
  //순서2 설정. 불러와서 사용하기.
  //useInfoInputFunc 의 반환값 2개,
  //1) state 상태값
  //2) 이벤트 핸들러함수
  //비구조화 할당 문법으로.
  const [state, onChange] = useInfoInputFunc({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <h1>customHooksTest 테스트</h1>
      <div>
        {/* 입력창인데, 값을 입력시, onChange 이벤트 핸들러가 동작해서, 결과뷰에 반영 */}
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      {/* 결과뷰 출력 */}
      <div>
        <h1>이름 : {name}</h1>
      </div>
      <div>
        <h1>닉네임 : {nickname}</h1>
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

export default InfoTestCustomHooks;

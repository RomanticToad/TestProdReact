//훅스 useState 먼저 확인
//복습 해보기
//지금 부터는 모두 함수형 컴포넌트로 작업하기.
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InfoTestUseEffect = () => {
  const navigate = useNavigate();
  //state : 상태 , useState : 초기값 -> 결과는 2개를 반환.
  // 1 : state 상태값
  // 2 : 세터함수를 반환 -> 업데이트를 하는 함수.
  // setName -> name 의 값을 업데이트 해줌.
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  //============================================================================
  //useEffect 테스트 하기
  //정의 useEffect (콜백함수, 의존성배열)
  //의존성 배열모양
  //1) 아무것도 없을 때 , 매번 콜백함수 실행되고
  //2) [], 빈 배열이라면, 한번만 실행된다.
  //3) [list], list의 상태가 변경 될 때 마다 , 콜백 함수가 실행이 된다.

  //1..
  useEffect(() => {
    console.log("useEffect  호출이 됨");
    console.log({
      name,
      nickname,
    });
    //후처리 함수 추가하기
    //문법 : return () =>{수행할 로직}
    return () => {
      console.log("후처리 함수 호출");
      console.log(name);
    };
  // }); // 현재, 두번째 매개변수에 모양이 아무것도 없다. 1)아무것도 없을 때 , 매번 콜백함수 실행
  // }, []); // [], 빈 배열이라면, 한번만 실행된다.
  }, [name]); // [---], ---의 상태가 변경 될 때 마다 콜백함수 실행

  //추가, 버튼 추가해서 visible 속성 확인.
  const [visible, setVisible] = useState(false);

  //============================================================================

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
      <Button
        type="primary"
        onClick={() => {
          setVisible(!visible);
          console.log(visible);
        }}
      >
        {visible ? "show" : "hide"}
      </Button>
      <div>{visible ? "true" : "false"}</div>
      <div>
        <div style={{ display: !visible ? "flex" : "none" }}>
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
    </div>
  );
};

export default InfoTestUseEffect;

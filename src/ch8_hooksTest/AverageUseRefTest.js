//useRef 연습 해보기
//설정 1, 설정2, 적용하기

// 순서1 useRef
import React, { useState, useMemo, useCallback, useRef } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

//함수1
const doAverage = (numbers) => {
  console.log("평균 계산중 -========-");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseRefTest = () => {
  // 숫자들을 담을 임시배열
  const [list, setList] = useState([]);
  // 숫자 타입 문자열, 연산시 정수로 변환 필요.
  const [number, setNumber] = useState("");

  //순서 2 useRef 설정1
  const inputElement = useRef(null);

  const onChange = useCallback((e) => {
    console.log("useCallback 확인중.onChange 호출");
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    console.log("useCallback 확인중.onInsert  호출");
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    //순서4 , useRef, 적용
    inputElement.current.focus();
  }, [number, list]);

  // 키 이벤트 추가 해보기.
  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  const avgResult = useMemo(() => doAverage(list), [list]);
  const navigate = useNavigate();

  return (
    <div>
      {/* 순서3, useRef 설정2 */}
      <input
        value={number}
        onChange={onChange}
        ref={inputElement}
        onKeyPress={onKeyPress}
      />
      <Button type="primary" onClick={onInsert}>
        등록하기{" "}
      </Button>
      {/* 리액트 리스트 출력시, 키가 의무적으로 설정 주의하기. */}
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      {/* 연산의 결과  */}
      {/* 사용하기전 */}
      {/* <div>평균값 : {doAverage(list)}</div> */}
      {/* useMemo 사용후  */}
      <div>평균값 : {avgResult}</div>

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

export default AverageUseRefTest;

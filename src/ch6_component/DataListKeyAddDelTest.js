// 내장 함수에서 concat, filter, map : 함수들의 특징?
// => 새로운 배열을 생성한다.
// 데이터와 연동을 해서 생각.
// 리스트의 요소를 출력할 때, key 라는 부분이 필요
// 마치, 데이터베이스 인덱스 개념과 비슷
// 인덱스 있으면, 인덱스를 기준으로 검색해서 빠름.
// 만약, 인덱스가 없으면 , 풀스캔을 해야함. 작업의 효율성 나락감
// 리액트에서 특정의 데이터를 리스트로 출력시, 이런 인덱스 부분 설정.
// 인덱스는, 반복이 가능한 iterable 한 그룹을 처리를 하기는 하지만...
// 유니크 해야한다 = 중복이 안된다.
// RDBMS -> 각 테이블마다, PK 존재함. 그래서 , 이 값을 인덱스로 사용하면된다<<
// No SQL-> MongoDB(Object ID) -> PK 사용하면됨
// 결론 , 데이터 연동해서 ,리스트 출력시 key 값 설정을 반드시 해야함.

import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const DataListKeyAddDelTest = () => {
  const navigate = useNavigate();
  //
  const [testArr, setTestArr] = useState([
    { id: 1, text: "스프링" },
    { id: 2, text: "부트" },
    { id: 3, text: "안드로이드" },
    { id: 4, text: "리액트" },
  ]);

  //id, text 관련해서 input 태그를 설정
  const [inputText, setInputText] = useState("");
  //기본 아이디 4까지 사용했고, 그 이후의 id 값 5부터
  const [nextId, setNextId] = useState(5);

  //리스트 출력하기-> 리스트 컴포넌트, 리스트의 아이템 컴포넌트
  //key 값 의무사항입니다. 하지만 오류먼저 확인후에 설정하기
  //아이템 요소를 출력하는 부분

  //삭제기능 추가하기
  //여기에 더블 클릭 이벤트를 넣고
  //삭제하는 기능도 추가하면된다
  const testArrList = testArr.map((item) => (
    <li key={item.id} onDoubleClick={() => onRemoveText(item.id)}>
      {item.id} : {item.text}
    </li>
  ));

  //데이터 추가. 배열의 내장함수 concat이용

  //text input부분이 변경시, 세터 함수로 변경사항을 업데이트 함.
  const onChangeText = (e) => setInputText(e.target.value);

  //onClick으로 , 데이터 추가 반영하기 로직
  //설정 다했다면 붙이기 작업
  const onClickText = () => {
    const nextTestArr = testArr.concat(
      //기본값 ID : 5
      {
        id: nextId,
        // inputText, 입력된 내용이 계속 변경을 감지하면서, 최종 단어가 업데이트됨
        text: inputText,
      }
    );
    //id가 추가되어서 1씩 증가하는 로직
    setNextId(nextId + 1);
    // 배열에 새로운 요소가 추가된 배열을 업데이트
    setTestArr(nextTestArr);
    // 입력창에 입력을 다 했으면 입력창 비우기
    setInputText("");
  };

  //데이터 삭제하기, 해당 아이템 요소 더블 클릭해서 삭제하기
  //filter 이용하기
  //id로 전달
  const onRemoveText = (id) => {
    // item.id !== id -> (다른게 맞냐 ? 라는 질문 )틀리면 참 , 같으면 거짓
    // item.id == id -> 같으면 참 , 틀리면 거짓
    //filter(콜백함수(조건)),
    //filter 조건이 참이되는 요소만 뽑아서 , 새로운 배열을 만든다
    //원본의 아이디 id : 1~4 .. , 삭제할 아이디가 : 3번
    //1~4 검사
    // 1 !==3 : true-> 1 필터됨, 결과 배열 [1]
    // 2 !==3 : true-> 2 필터됨, 결과 배열 [1,2]
    // 3 !==3 : false-> 3 필터 안됨, 결과 배열 [1,2] 포함 안됨.
    // 4 !==3 : true-> 4 필터됨, 결과 배열 [1,2,4]

    const nextTestArr2 = testArr.filter((item) => item.id !== id);
    //필터가 된, 원소를 제거한 새로운 배열을 업데이트, 세터로
    setTestArr(nextTestArr2);
  };

  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickText();
    }
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={onChangeText}
        onKeyPress={onKeyPress}
      ></input>

      <Button type="primary" danger onClick={onClickText}>
        추가하기
      </Button>
      <ul>{testArrList}</ul>

      <Button
        title="메인화면으로 이동"
        type="primary"
        onClick={() => navigate("/")}
      >
        메인 화면으로 이동
      </Button>
    </div>
  );
};

export default DataListKeyAddDelTest;

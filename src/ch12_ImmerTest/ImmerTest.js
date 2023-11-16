import { Button } from "antd";
import React, { useCallback, useRef, useState } from "react";

//준비물 , immer 모듈 설치하기
//yarn add immer
import { produce } from "immer";
//간단히 , 이름 , 나이, 입력란에서 , 추가, 삭제(더블클릭이벤트) 예제 이용하기

const ImmerTest = () => {
  //순서2 , useRef, 설정1 (등록후 이름으로 포커스를 하기 위한추가)
  const inputElement = useRef(null);

  //id 임의로 useRef로 만들어 사용하기
  const nextId = useRef(1);
  //form, 객체의 기본값 , name: "", age : ""
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  //sample data
  const [data, setData] = useState({
    array: [],
    dummyObject: null,
  });

  //이벤트 핸들러
  const onChange = useCallback(
    (e) => {
      //input name 태그의 name 속성과 ,value가져오기
      //input age 태그의 name 속성과 ,value가져오기
      //비구조화 할당
      //const name = e.target.name
      //const value = e.target.value
      const { name, value } = e.target;
      //기존방법1
      // setForm({
      //   //기존 spread 연산자를 이용한, 불변성 유지하면서 , 업데이트하기
      //   ...form,
      //   [name]: [value],
      // });

      // 방법2
      // immer 라이브러리 변경
      // produce(원본객체, 변경할 업데이트 함수)
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  //form을 등록하는 이벤트 핸들러
  const onSubmit = useCallback(
    (e) => {
      //기본 submit의 기능을 막기위한 함수.
      e.preventDefault();
      //info data
      const info = {
        //useRef의 값 이용하기.
        id: nextId.current,
        name: form.name,
        age: form.age,
      };

      //방법1
      // //sample data의 array에 새 항목 추가
      // setData({
      //   //기존 spread 연산자를 이용한, 불변성 유지하면서 , 업데이트하기
      //   ...data,
      //   array: data.array.concat(info),
      // });

      // 방법2
      // immer 라이브러리 변경
      // produce(원본객체, 변경할 업데이트 함수)
      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        })
      );

      //form data 초기화, 입력란 비우기
      setForm({
        name: "",
        age: "",
      });

      //nextId 값 1 증가 시키기
      nextId.current += 1;
      //순서3 , useRef, 적용 (등록후 이름으로 포커스를 하기 위한추가)
      inputElement.current.focus();
      //useCallback 의 의존성 배열, data,form.name,form.age 변경시 새 함수를 설정하는것으로 세팅 . (최적화)
    },
    [data, form.name, form.age]
  );

  //삭제하는 함수
  const onRemove = useCallback(
    // 1 매개변수 : 콜백함수
    (id) => {
      // //기존방법1
      // setData({
      //   //기존 spread 연산자를 이용한, 불변성 유지하면서 , 업데이트하기

      //   ...data,
      //   array: data.array.filter((info) => info.id !== id),
      // });

      // 방법2
      // immer 라이브러리 변경
      // produce(원본객체, 변경할 업데이트 함수)
      // splice(startIndex,deletecount, newItem, newItem,...)
      // splice(1,1) : 1이라는 인덱스부터, 1개 요소를 삭제를 하는 내장 함수.
      //데이터 제거 1, 제거한 원소를 가지는 배열을 출력.
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    //2매개변수
    //의존성 배열
    [data]
  );

  //인풋2개, 버튼하나, 리스트목록
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="이름 입력해주세요."
          value={form.name}
          onChange={onChange}
          //(등록후 이름으로 포커스를 하기 위한추가)
          ref={inputElement}
        />
        <input
          name="age"
          placeholder="나이 입력해주세요."
          value={form.age}
          onChange={onChange}
        />
        {/* <Button type="submit">등록하기</Button> */}
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </form>
      {/* 리스트 출력하기 */}
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              이름 : {info.name}, 나이 : {info.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImmerTest;

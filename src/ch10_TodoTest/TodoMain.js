// 부모 : App, 자식 : TodoMain
// 자식 : TodoMain (베이스 컴포넌트)

//전체 가운데 요소로 정렬시켜주는 템플릿 : TodoBase

// 1)제목 ...2)입력란 : TodoInsert 3)리스트... 4)리스트의 아이템 등..

import React, { useCallback, useReducer, useRef, useState } from "react";
import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";
import TodoBase from "./TodoBase";
import TodoInsert from "./TodoInsert";
import TodoListItem from "./TodoListItem";
import TodoList from "./TodoList";

const Main_css = styled.div`
  margin: 0;
  padding: 0%;
  background: #e9ecef;
`;

//Todo만들기 준비 메인
const TodoMain = () => {
  //1) 리듀서함수
  const todoReducer = (todos, action) => {
    switch (action.type) {
      case "INSERT":
        return todos.concat(action.todo);
      case "REMOVE":
        return todos.filter((todo) => todo.id !== action.id);
      case "TOGGLE":
        return todos.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                checked: !todo.checked,
              }
            : todo
        );
      default:
        return todos;
    }
  };

  //샘플 더미데이터를 임시 배열에 만들어서 전달. props 테스트
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "아침 돼지국밥먹기.", checked: true },
  //   { id: 2, text: "점심 수육백반먹기.", checked: true },
  //   { id: 3, text: "저녁 소머리국밥먹기.", checked: false },
  // ]);

  const array = [];
  for (let i = 4; i <= 20000; i++) {
    array.push({
      id: i,
      text: `더미데이터 : ${i}`,
      checked: false,
    });
  }

  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 1, text: "할거 1", checked: false },
    { id: 2, text: "할거 2", checked: false },
    { id: 3, text: "할거 3", checked: false },
    ...array,
  ]);

  //문제점제시, 더미데이터 약 3000개 추가
  // const createBulkTodos = () => {
  //   const array = [];
  //   for (let i = 1; i <= 20000; i++) {
  //     array.push({
  //       id: i,
  //       text: `더미데이터 : ${i}`,
  //       checked: false,
  //     });
  //   }
  //   return array;
  // };
  // createBulkTodos() 의 결과 배열 -> todos 의 초깃값으로 설정.
  // const [todos, setTodos] = useState(createBulkTodos()); -------------------------성능개선위해 임시주석

  //추가로 입력이 되는 todo부분의 아이디를 id : 4부터 할당
  // const nextId = useRef(4);
  // 3000개 더미데이터
  const nextId = useRef(4);

  //TodoMain -> TodoInsert 자식 컴포넌트에게, props로 함수를 전달하기
  //onInsert 라는 함수는, onChange함수와는 다르게
  //매번 새로운 함수를 생성한다. 이유는 함수안에 배열이 변경이 되어서
  // todos 배열의 변경에 따라서, 동작하게 만들기

  // 방법1) useCallback에서 , 세터함수 (값 형태x => 함수형태)
  // 추가로 , 의존성배열모양을 빈배열 [], 함수생성을 1회만 했다는점.

  //방법2 ) 성능상 큰 차이없고 규모가 커지고 상태를 관리해주는 라이브러리 Redux 사용하게되면
  // useReducer를 이용하게된다
  //순서1) useReducer를 임포트
  //준비물 1) 리듀서함수 2) useReducer 생성 3) dispatch 함수를 호출

  //페이징, 한번에 데이터 전부 다 불러오는게 아니라, 눈에 보이는 정도의 크기만 불러온다
  //예를들어서 현재 20000개를 다 불러오고있는데
  // 실제로 스크롤을 내리지 않는 이상 한번에 전체 데이터를 볼 수 없다.
  //결론 , 일부분만 보기 때문에 나머지 199~~개는 불필요한 데이터 트레픽이 발생하므로
  //내가 볼 수 있는 양 만큼만 잘라서 불러오기.
  //준비물
  //1) 모듈설치
  // yarn add react-virtualized 설치
  //2) 각 아이템 요소의 높이를 구해야함. 첫번째 요소 말고 두번째 요소부터의 높이를 구하기
  //왜냐하면 첫번째 항목은 테두리가 없어서 .. 56px
  //3) TodoList 이동하기

  // //1) 리듀서함수
  // const todoReducer = (todos, action) => {
  //   switch (action.type) {
  //     case "INSERT":
  //       return todos.concat(action.todo);
  //     case "REMOVE":
  //       return todos.filter((todo) => todo.id !== action.id);
  //     case "TOGGLE":
  //       return todos.map((todo) =>
  //         todo.id === action.id
  //           ? {
  //               ...todo,
  //               checked: !todo.checked,
  //             }
  //           : todo
  //       );
  //     default:
  //       return todos;
  //   }
  // };

  //2)useReducer 생성 -> 기존에 더미데이터를 만드는 부분이 있어서 , 위에부분 주석하기
  // const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        //const nextId = useRef(4); 4부터 id 시작
        id: nextId.current,
        text,
        checked: false,
      };

      // setTodos(todos.concat(todo));
      //성능개선2
      //기존과 차이점이, useCallback 의존성 배열이 값이 변경시 마다, 새로 함수를 생성하는 부분을
      //방법1) 기존의 값으로 변경하는것 -> 함수 형태로 변경.
      //매번 새롭게 함수를 생성 할 필요가 없음.

      // setTodos((todos) => todos.concat(todo));

      //3) dispatch 함수를 호출
      dispatch({ type: "INSERT", todo }); //더미데이터용

      nextId.current += 1;
    },
    // [todos]
    //성능개선2
    []
  );

  //지우기 기능 함수 추가하기
  //데이터 추가시 : 내장함수 concat 이용해서 새로운배열생성
  //데이터 삭제시 : 내장함수 filter 이용해서 새로운배열생성
  //콜백함수 ,
  const onRemove = useCallback(
    (id) => {
      //만약 id가 2를 선택했다면, todo.id!==id
      //선택된 id2를 제외한 나머지 요소를 뽑아서 (필터해서) 새로운배열생성
      // 결론, 선택된 id2를제거하는효과와같다

      // setTodos(todos.filter((todo) => todo.id !== id));
      //성능개선2 , 함수형태로 변경하고 의존성배열에서 todos 참조 안하기
      //결론 새롭게 매번 함수 생성을 안함
      // setTodos((todos) => todos.filter((todo) => todo.id !== id));

      dispatch({ type: "REMOVE", id }); //더미데이터용
    },
    // [todos]
    //의존성 배열 없이 동작
    []
  );

  //토글(스위치 on/off), checkbox 부분에, 이벤트 핸들러 추가하기.
  // onToggle 이라는 이름. 함수를 자식 컴포넌트에게 전달하기.
  //순서1
  const onToggle = useCallback(
    (id) => {
      // setTodos(
      //   //선택된 todo의 id가 일치하면, 기존 배열을 복사해서, 선택된 id 의 속성 checked 부분 변경시키기
      //   // todos.map((todo) =>
      //   //   todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //   //성능개선2 값이 아니라 함수형태로 변경
      //   (todos) =>
      //     todos.map((todo) =>
      //       todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //     )
      // );

      // 3) dispatch 함수를 호출.
      dispatch({ type: "TOGGLE", id }); // 더미데이터용
    },
    // [todos]
    //성능개선2
    []
  );

  return (
    <div>
      <Main_css>
        Todo만들기 준비 메인
        <AiFillApple />
        <TodoBase>
          {/* 위에서 만든 useCallBack 함수를 자식컴포넌트에 전달하기 */}
          <TodoInsert onInsert={onInsert} />
          {/* 위에서 만든 임시 데이터 배열을 전달 : props속성으로 전달 */}
          {/* <TodoList /> */}
          {/* 제거하는 함수를 props이용해서, 전달 */}
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoBase>
      </Main_css>
    </div>
  );
};

// export default TodoMain;
export default React.memo(TodoMain);

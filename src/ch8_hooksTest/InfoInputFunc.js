//여기서 입력을 받는 기능을 따로 분리작업 하는 곳.
//Info, name, nickname 분리작업
//순서1, 설정1
import { useReducer } from "react";

//순서2, 설정2 리듀서 함수 만들기
const reducer = (state, action) => {
  return {
    //state의 값은, 객체이고 속성은 name과 nickname
    ...state,
    [action.name]: action.value,
  };
};

export default function InfoInputFunc(initialForm) {
  //순서2, 설정2 리듀서 함수 만들기
  //useReducer의 반환값
  // 1: 상태값
  // 2: dispatch이름의 함수 : 액션의 문자열을 호출하는 함수
  //useReducer(콜백함수, 초깃값)
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}

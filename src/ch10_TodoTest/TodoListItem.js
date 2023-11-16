import React from "react";
import {
  MdCheckBox,
  MdCheckbox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

import cn from "classnames";

// https://react-icons.github.io/react-icons/search?q=checkBox
// 체크안된박스MdCheckBoxOutlineBlank
// 체크된 박스 MdCheckBox
// https://react-icons.github.io/react-icons/search?q=remove
// 삭제버튼 MdRemoveCircleOutline

// css파일을 분리해서 작업하지만,
//해당 컴포넌트 내부에서 한번에 css 작업을 같이 하는 경우가 많음
import styled from "styled-components";

//작업 순서
//1) TodoListItemCss
//2) CheckboxCss
//3) TestCss
//4) RemoveCss

//컴포넌트 내부에, 각 요소에 css 작업해보기

const TodoListItemCss = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  /* 짝수 번째 자식 요소의 배경색 지정. &: => 현재 본인 요소 (div) */
  &:nth-child(even) {
    background: #f8f9fa;
  }

  //checkbox 속성빠짐
  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
    }
    &.checked {
      svg {
        color: #22b8cf;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }
`;
const CheckboxCss = styled.div`
  cursor: pointer;
  /* 차지 할수 있는 영역 모두 차지 ,  */
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`;
const TextCss = styled.div`
  margin-left: 1.5rem;
  flex: 1;
`;
const RemoveCss = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

//가성 페이징 처리하는 클래스 style-components 추가하기
const ListvirtualizedCss = styled.div`
  //각 목록 요소가 출력이 될 때, 구분선 넣기.
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

//부모 컴포넌트 TodoList 로 부터 전달받은 속성
// <TodoListItem todo={todo} key={todo.id} />
// todo={id:1,text="내용", checked : true}

//지우는 기능을 하는 함수를 전달 받아서 사용하기
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  //todo에서 text checked를 꺼내서 비구조화할당
  // const text = todo.text
  // const checked = todo.checked
  //이 두문장을 하나로 압축한것.

  //삭제를 하려면 그 요소를 선택하기
  //어느 요소를 삭제할지는 시스템에 알려줘야함
  //예) todo id=1, id =2
  const { text, checked, id } = todo;

  return (
    //부모로부터 전달받은 더미데이터를 사용
    //1)TodoMain -> TodoList -> TodoListItem : 더미데이터가 전달되고있는순서 props로

    //2 조건부 렌더링 하기
    // 도구를 사용. classnames 모듈 이용해서 쉽게 조건부 렌더링하기.조건부 렌더링 하기
    // yarn add classnames : 이미 설치했음
    //"classnames" : "^2.3.2"

    // 페이징 추가, 기존의 아이템요소 css부분을 감싸주기
    <ListvirtualizedCss className="TodoListItem-virtualized" style={style}>
      <TodoListItemCss>
        {/* cn 이용하면 , checkbox라는 속성이 checked의 속성에 의해서
      true 이면 className에 등록이 되고
      false 이면 className에 등록이 안됨 */}

        {/* 체크하는 함수 적용하기. */}

        <CheckboxCss
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {/* 조건부 렌더링 cn이용해서 하기 */}
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

          {/* 체크박스의 상태를 표시하는 checked 변수를 기준으로 , 
        조건이 true : MdCheckBock 를 사용하고
        조건이 false : MdCheckBoxOutlineBlank를 사용하기 */}
          {/* <MdCheckBoxOutlineBlank /> */}
          {/* 더미데이터 내용중 text가져오기 */}
          {/* <TextCss>샘플 할일</TextCss> */}
          <TextCss className="text">{text}</TextCss>
        </CheckboxCss>
        <RemoveCss>
          <MdRemoveCircleOutline onClick={() => onRemove(id)} />
        </RemoveCss>
      </TodoListItemCss>
    </ListvirtualizedCss>
  );
};

//맨 마지막에서 디폴트 부분 react.memo 적용해서 , 1차 성능 개선 확인
// export default TodoListItem;
export default React.memo(TodoListItem);

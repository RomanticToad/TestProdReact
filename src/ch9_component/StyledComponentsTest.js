//아이콘 적용하기위해서
//yarn add react-icons

//아이콘 적용하기
import { DiApple, DiBingSmall } from "react-icons/di";

import React from "react";
import styled, { css } from "styled-components";
//순서1 import 모듈 가져오기

const StyledComponentsTest = () => {
  //props가 있다면 해당 컬러를 사용하고, 없다면, or 조건으로 blue 선택됨.
  const Box = styled.div`
    background: ${(props) => props.color || "blue"};
    padding: 1rem;
    display: flex;
  `;

  //순서2 , 적용하기. styled.DOM요소 ``(백틱)
  const Button = styled.button`
    //원래는 백틱 안에서 속성들이 문자열로 인식해서 , 하이라이트가 원래 안되는데
    //확장팩 , vscode-styled-components 설치를 했기때문에 된다.
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 500;

    // & 현재요소
    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }

    //props를 이용할 수 있음. 전달된 props 내용을 이해해서 조건부도 가능.
    ${(props) =>
      props.test &&
      css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
          background: white;
          color: black;
        }
      `}

    //형제연산자, 버튼과 버튼사이에 주는 효과
    & + button {
      margin-left: 1rem;
    }
  `; // button 끝

  return (
    <div>
      <h1>
        Test react icons
        <DiApple />
        <DiBingSmall />
      </h1>
      {/* Box 라는 사용자정의 컴포넌트에 props 전달 해보기 */}
      <Box color="red">
        <Button test={true}>hello</Button>
      </Box>
      <Box>
        <Button>칼라속성 안주기</Button>
      </Box>
      <Box color="indigo">
        <Button test={true}>속성주기</Button>
        <Button>속성 안주기</Button>
      </Box>
    </div>
  );
};

export default StyledComponentsTest;

import React from "react";
import { ColorConsumer } from "./testColor";
const colors = ["red", "orange", "blue", "indigo", "violet", "aqua", "navy"];

//전역의 설정 값 또는 함수를 사용하기
//Consumer = 게터, Provider = 세터, 비슷한 역할을 한다

const TestSelectColors = () => {
  return (
    <div>
      <h2>색상 선택하기</h2>
      {/* 설정, 순서2 */}
      {/* 적용하기, 액션을 가져와서 이용하기 */}
      <ColorConsumer>
        {
          // 시작<ColorConsumer> 에 있는 속성이 2가지인데 1)state 2)actions
          ({ actions }) => (
            <div style={{ display: "flex" }}>
              {/* colors 색깔 배열 원소중에서 하나를 꺼내어 순회동작을 함. */}
              {colors.map((color) => (
                <div
                  key={color}
                  style={{
                    // 전역 저장소 state에 있는 칼라를 쓴것
                    background: color,
                    width: "24px",
                    height: "24px",
                    cursor: "pointer",
                  }}
                  //이벤트 핸들러 추가하기, 전역의 함수를 사용하기
                  onClick={() => actions.setColor(color)}
                  //우클릭 이벤트 핸들러
                  onContextMenu={(e) => {
                    //우클릭 메뉴가 뜨는게 기본인데, 기본동작을 막음.
                    e.preventDefault();
                    actions.setSubcolor(color);
                  }}
                />
              ))}
            </div>
          ) //함수 끝부분
        }
        {/* 끝 */}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default TestSelectColors;

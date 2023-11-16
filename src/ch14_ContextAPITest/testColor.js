//준비물
// createContext 임포트
// 전역으로 사용할 예제 속성추가
// 내보내기 하기.

import { createContext, useState } from "react";

// 속성 예시 만들기.
// const ColorContext = createContext({ color: "blue" });

// 속성 예시2 , 함수로 전달하기.
const ColorContext = createContext({
  // state 속성으로 값으로
  state: { color: "aqua", subcolor: "violet" },
  // actions 속성으로 함수로
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

// provider 만들기.
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("indigo");
  const [subcolor, setSubcolor] = useState("violet");
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  // 오류 발생해도 잠시 보류.

  // return (
  //   <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  // );
};

const { Consumer: ColorConsumer } = ColorContext;
// 추가
export { ColorProvider, ColorConsumer };
// 내보내기
export default ColorContext;

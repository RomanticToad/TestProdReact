//방금 만든 css 문법을 테스트 할 빈도화지

//CSS Module 테스트 해보기
//만든 module.css 불러오기
import cssmodule from "./CSSModule.module.css";

import React from "react";
import "./SassComponent.scss";

const TestSass = () => {
  //[파일이름]_[클래스이름]_[해시값]
  console.log("css module 확인 : " + cssmodule);
  return (
    <>
      {/* CSS Module 테스트 적용 해보기 */}
      <div className={cssmodule.wrapper}> CSS Module 테스트 적용 WRAPPER</div>
      <div className="testGlobal"> CSS Module testGlobal 테스트 적용2</div>
      <div className={cssmodule.wrapper2}> WRAPPER2</div>
      {/* 크롬 개발자 도구에서 해당 태그명을 확인하면... */}
      {/*  //<div class="CSSModule_wrapper2__NzEsu, CSSModule_wrapper__1UYCv"> */}
      <div className={`${cssmodule.wrapper} ${cssmodule.wrapper2}`}>
        {" "}
        CSS모듈 2개 클래스 동시적용
      </div>

      <div className="SassTest">
        <div className="box red"></div>
        <div className="box blue"></div>
        <div className="box lime"></div>
        <div className="box steelblue"></div>
        <div className="box indigo"></div>
      </div>
    </>
  );
};

export default TestSass;

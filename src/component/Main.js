//Main 임시 페이지
import { Button } from "antd";
import React from "react";

//yarn add react-router-dom
//라우팅 모듈, 도구 설치.
import { useNavigate } from "react-router-dom";

//styled-component, 컴포넌트에서 좀더 편하게 css 작업하는 모듈
//yarn add styled-components
//확장팩 : styled-components
//설치 후 임포트 후 사용
import styled from "styled-components";

// styled-components 사용해보기
// 예제
//styled. 원하는태그 선택 `(백틱) `(백틱) , 열고 닫고.
//이 사이에 css 문법을 작성
const MainTitleTextCss = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const MainTextCss = styled.p`
  font-size: 20px;
  font-weight: bold;
  background-color: black;
  color: rgb(51, 255, 0);
  text-align: center;
`;

//Wrapper 라고 해서 블록 부분 설정
const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//Container 만들기.
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin-left: 20px;

  // & : 현재 태그
  // div 태그 하위의 자식 태그중 마지막 자식태그를 제외하고
  // 각 요소의 마진 바텀을 16px 씩 간격을 주겠다.
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  //useNavigate 라는 훅스를 이용해서, 페이징 하기..
  const navigate = useNavigate();

  return (
    //래퍼 씌우기
    <Wrapper>
      <div>
        <h1>메인화면 입니다.</h1>
        <Container>
          {/* css 적용하기 */}
          <MainTitleTextCss>
            <p>styled-components test</p>
          </MainTitleTextCss>

          {/* 2번째 텍스트 효과 확인하기 */}
          <MainTextCss>가나다라마바사</MainTextCss>

          {/* join 컴포넌트로 이동하는 버튼 하나 추가 */}
          <Button
            title="회원가입으로 이동"
            type="primary"
            onClick={() => navigate("/join")}
          >
            회원가입으로 이동
          </Button>
          <br />
          <br />
          <Button
            title="mycount으로 이동"
            type="primary"
            onClick={() => navigate("/mycount")}
          >
            mycount으로 이동
          </Button>
          <br />
          <br />
          <Button
            title="스크롤 ref 테스트 이동"
            type="dashed"
            onClick={() => {
              navigate("/scrollRefTest");
            }}
          >
            스크롤 ref 테스트 이동
          </Button>
          <br />
          <br />
          <Button
            title="listKeyDataAddDel테스트 이동"
            type="primary"
            onClick={() => {
              navigate("/listKeyDataAddDel");
            }}
          >
            키 설정의무 확인 및 데이터 추가 삭제 이동
          </Button>
          <br />
          <br />
          <Button
            title="LifeCycleTest 이동"
            type="primary"
            onClick={() => {
              navigate("/ClassLifeCycleTest");
            }}
          >
            클래스형 컴포넌트 생명주기 테스트
          </Button>
          <br />
          <br />
          <Button
            title="InfoTestUseState 이동"
            type="primary"
            onClick={() => {
              navigate("/useStateTest");
            }}
          >
            함수형 컴포넌트 훅스 1 useState
          </Button>
          <br />
          <br />
          <Button
            title="InfoTestUseEffect 이동"
            type="primary"
            onClick={() => {
              navigate("/useEffectTest");
            }}
          >
            함수형 컴포넌트 훅스 2 useEffect
          </Button>
          <br />
          <br />
          <Button
            title="useReducerTest 이동"
            type="primary"
            onClick={() => {
              navigate("/useReducerTest");
            }}
          >
            함수형 컴포넌트 훅스 3 useReducer
          </Button>
          <br />
          <br />
          <Button
            title="InfouseReducerTest 이동"
            type="primary"
            onClick={() => {
              navigate("/InfouseReducerTest");
            }}
          >
            함수형 컴포넌트 훅스 3 useReducer2
          </Button>
          <br />
          <br />
          <Button
            title="useMemoTest 이동"
            type="primary"
            onClick={() => {
              navigate("/useMemoTest");
            }}
          >
            함수형 컴포넌트 훅스 4 useMemo
          </Button>
          <br />
          <br />
          <Button
            title="useCallbackTest 이동"
            type="primary"
            onClick={() => {
              navigate("/useCallbackTest");
            }}
          >
            함수형 컴포넌트 훅스 5 useCallback
          </Button>
          <br />
          <br />
          <Button
            title="useRefTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useRefTest");
            }}
          >
            useRefTest 테스트
          </Button>

          <br />
          <br />
          <Button
            title="useParamsTest/:id 테스트 "
            type="primary"
            onClick={() => {
              navigate("/useParamsTest");
            }}
          >
            useParamsTest/:id 테스트 주소에다가 /숫자 붙이기 ex) /100
          </Button>

          <br />
          <br />
          <Button
            title="customHooksTest 테스트 "
            type="primary"
            onClick={() => {
              navigate("/customHooksTest");
            }}
          >
            customHooks 테스트
          </Button>
          <br />
          <br />
          <Button
            title="Sass 테스트 "
            type="primary"
            onClick={() => {
              navigate("/sassTest");
            }}
          >
            Sass 테스트
          </Button>
          <br />
          <br />
          <Button
            title="styledComponentsTest "
            type="primary"
            onClick={() => {
              navigate("/styledComponentsTest");
            }}
          >
            styledComponentsTest
          </Button>
          <br />
          <br />
          <Button
            title="toDoMainTest "
            type="primary"
            onClick={() => {
              navigate("/toDoMainTest");
            }}
          >
            toDoMainTest
          </Button>
          <br />
          <br />
          <Button
            title="immerTest "
            type="primary"
            onClick={() => {
              navigate("/immerTest");
            }}
          >
            immerTest, 불변성 쉽게 유지
          </Button>

          <br />
          <br />
          <Button
            title="TestZone "
            type="primary"
            onClick={() => {
              navigate("/testZone");
            }}
          >
            TestZone
          </Button>
          <br />
          <br />
          <Button
            title="apiTest "
            type="primary"
            onClick={() => {
              navigate("/apiTest");
            }}
          >
            apiTest
          </Button>
          <br />
          <br />
          <Button
            title="apiTestKoreaNews "
            type="primary"
            onClick={() => {
              navigate("/apiTestKoreaNews");
            }}
          >
            apiTestKoreaNews
          </Button>
          <br />
          <br />
          <Button
            title="mainNews "
            type="primary"
            onClick={() => {
              navigate("/mainNews");
            }}
          >
            mainNews
          </Button>
          <br />
          <br />
          <Button
            title="newsPageTest/:category "
            type="primary"
            onClick={() => {
              navigate("/newsPageTest/all");
            }}
          >
            newsPageTest/:category
          </Button>
          <br />
          <br />
          <Button
            title="contextAPITest "
            type="primary"
            onClick={() => {
              navigate("/contextAPITest");
            }}
          >
            contextAPITest
          </Button>
          <br />
          <br />
          <Button
            title="contextAPITest2 "
            type="primary"
            onClick={() => {
              navigate("/contextAPITest2");
            }}
          >
            contextAPITest2
          </Button>
          <br />
          <br />
          <Button
            title="myMatZipList "
            type="primary"
            onClick={() => {
              navigate("/myMatZipList");
            }}
          >
            myMatZipList
          </Button>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Restaurant from "../model/Restaurant";
import axios from "axios";

const ResListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 더미 데이터
const sampleItem = {
  MAIN_TITLE: "제목",
  ADDR1: "주소",
  RPRSNTV_MENU: "메인 메뉴",
  ITEMCNTNTS: "설명",
  MAIN_IMG_THUMB: "https://via.placeholder.com/160",
};

const RestaurantList = () => {
  // useEffect 이용해서, 마운트시, 최초 1회 데이터 받아오기.
  // create, update, delete 없어서,
  // 단순, 데이터 만 가져오기 때문에,
  // REST API 서버에서 데이터를 다 받으면, articles 에 넣기.
  const [articles, setArticles] = useState(null);
  // 만약, 데이터를 받고 있는 중이면, loading 값을 true,
  // 데이터를 다 받으면, loading 값을 false 로 변경하기.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json"
        );
        //console.log(response.data)
        // 해당 주소를 입력해서, 모델링 조사할 때, 이미 구조를 다 봤음.
        setArticles(response.data.getFoodKr.item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }; // resultData async 함수 블록 끝부분,
    // 비동기 함수 만들어서, 사용하기.
    resultData();
  }, []); //의존성 배열 부분의 모양은 빈배열, 최초 1회 마운트시 한번만 호출.

  // 주의사항, 데이터 널 체크하기.
  if (loading) {
    return <ResListCss>데이터 받는중(대기중 ....)</ResListCss>;
  }

  // 데이터를 못받아 왔을 경우, 화면에 아무것도 안그리기.
  if (!articles) {
    return <ResListCss>데이터 못받아옴</ResListCss>;
  }

  // 로딩도 끝나고, 받아온 데이터가 존재 한다면, 그때 그리기.

  return (
    <ResListCss>
      {/* 더미데이터테스트 흔적 */}
      {/* <Restaurant item={sampleItem} />  */}

      {articles.map((article) => (
        <Restaurant key={article.MAIN_IMG_THUMB} article={article} />
      ))}
    </ResListCss>
  );
};

export default RestaurantList;

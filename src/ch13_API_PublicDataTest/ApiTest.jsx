import React, { useState } from "react";
//import axios
// 가져올 REST API서버
// 'https://jsonplaceholder.typicode.com/todos/1'
import axios from "axios";
import { Button } from "antd";

const ApiTest = () => {
  //REST API 서버에서, 임시로 받아온 data, state로 확인하기.
  const [data, setData] = useState(null);

  //기존방식 방법1
  //이벤트 핸들러
  // const onClick = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/1")
  //     //위에 get함수로 데이터를 받는것에 성공했다면, then이 실행된다.
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  // 방법2 , async, await 버전으로 변경.
  // 비동기 함수로 구현할 함수앞에 키워드 : async 붙이기.
  const onClick = async () => {
    try {
      // await 는 Promise 를 반환하는 함수 앞에 사용
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={onClick}>
        가져오기
      </Button>
      <div>
        {data && (
          <textarea
            rows={8}
            // stringify 함수의 출력할 data
            // 2번째 인자, 모양인데, null 이면 문자열 의미
            // 3번째 인자 2, 들여 쓰기
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default ApiTest;

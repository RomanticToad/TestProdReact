//비동기 방식 설명 및 setTimeout 함수소개
//콜백 지옥모양 소개
//promise 로 개선하는 부분
//axios 진행하기 -> yarn add axios : 통신 http 라이브러리(앱 : Retrofit2)

// 비동기 vs동기 방식 차이점
//동기
// 작업순서 1) 작업완료 2) 작업완료 3) 작업완료 작업 있다면
//각 작업이 순서대로 완료가 되면 다음 작업 진행함
//-----------------------------------------------
//비동기
//작업순서 1)2)3) 완료되는 순서에 상관없이
//같이 실행을 하고,  끝나는대로 알려준다.

// function printHello() {
//   console.log("Hello world~~~");
// }
// function ones() {
//   console.log("1초 지났습니다");
// }
// function twos() {
//   console.log("2초 지났습니다");
// }
// function thirs() {
//   console.log("출력완료.");
// }

// setTimeout(콜백함수, 기다리는 시간) : 기다리는 시간 후에 콜백함수가 동작함
//작업1
// setTimeout(printHello, 3000);
// setTimeout(ones, 1000);
// setTimeout(twos, 2000);
// setTimeout(thirs, 3001);

//작업2 -> 위에 작업이 실행되는중에도 끝나고 나오는게 아니라 바로 걍 튀어나옴
// console.log("3초 기다리십쇼.");

//포인트 , 비동기적으로 다같이 실행 후 , 작업이 완료가 되는대로 후출이 됨
//ctrl + alt + n : 코드러너라는 확장팩으로 실행중
//
//===============================================================================================
//
//콜백 함수 지옥 모양 보기
//1000 : 기다리는 시간
function decrease(number, callbackFunction) {
  setTimeout(() => {
    const result = number - 1;
    if (callbackFunction) {
      callbackFunction(result);
    }
  }, 1000);
}
//호출해보기
// decrease(0, (result) => {
//   console.log(result);
// });

// 콜백 지옥 함수 모양 보기.
// console.log("작업 시작");
// decrease(0, (result) => {
//   console.log(result);
//   decrease(result, (result) => {
//     console.log(result);
//     decrease(result, (result) => {
//       console.log(result);
//       decrease(result, (result) => {
//         console.log(result);
//         console.log("작업완료");
//       });
//     });
//   });
// });

//결론, 기존의 콜백 함수 모양으로 작업시 , 가독성이 떨어지고 , 불편하다
//promise로 개선하기

function decrease2(number) {
  // resolve : 성공시 수행할 함수,
  // reject : 실패시 수행할 함수
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number - 1;
      if (result < 50) {
        const error = new Error("error");
        return reject(error);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

// Promise 이용해서, 콜백함수 가독성 높이기.
// console.log("작업 시작");
// decrease2(60)
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .catch((e) => console.log(e));

// async, await  확인해보기.
// decrease2 함수 내부에 Promise 구성이 되었고,
// 이 함수를 async, await 문법으로 변경해서, 조금 더 가독성및 구성 확인.

async function test() {
  try {
    let result = await decrease2(60);
    console.log(result);

    result = await decrease2(result);
    console.log(result);

    result = await decrease2(result);
    console.log(result);

    result = await decrease2(result);
    console.log(result);

    result = await decrease2(result);
    console.log(result);

    result = await decrease2(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

//작업1
console.log("작업시작 ,async await 이용해서 가독성 더 높이기");
// 작업2 , 비동기로 확인.
test();

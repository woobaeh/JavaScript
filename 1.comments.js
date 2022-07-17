// 주석 Comments
// 한줄 짜리 주석을 작성할 때 씀
// TODO(): 해야할 일을 작성
// TODO(Woo): XX기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * WHY와 HOW를 설명하는 것이 좋음
 * (단, 정말 필요한 경우에만)
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하면 좋음
/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한 값
 */
function add(a, b) {
  return a + b;
}

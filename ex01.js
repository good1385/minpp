/*이름 클릭시 변경할 이름 입력 후 수정*/ 

const para = document.querySelector('p');
// p태그 선택

para.addEventListener('click', updateName);
// para에 저장된 객체가 클릭됐을 때 updateName 함수 실행


function updateName() {
    let name = prompt('변경할 이름을 입력하세요');
    // 안내 문구 + 입력란 출력 후 사용자 입력 값을 변수 name에 저장
    para.textContent = 'Player 1: ' + name
    // para에 새로운 문자열 저장
}


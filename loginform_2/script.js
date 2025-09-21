const usersDatabase = [
    { name: '김철수', birthdate: '1990-05-15', phone: '010-1234-5678' },
    { name: '이영희', birthdate: '1992-11-20', phone: '010-9876-5432' },
];

// push() 메서드를 사용해서 사용자 정보 추가를 할 수도 있다
// usersDatabase.push({
//     name: '김철수',
//     birthdate: '1990-05-15',
//     phone: '010-1234-5678'
// });

// usersDatabase.push({
//     name: '이영희',
//     birthdate: '1992-11-20',
//     phone: '010-9876-5432'
// });

// 현재 캡차 값을 저장하는 변수 
let currentcaptcha = '';

//폼 제출 이벤트를 막는 역할
function handlesubmit(event){ // 폼을 제출하는 이벤트가 발생 할 때 호출되는 함수
    event.preventDefault(); // 새로고침을 막아줌 

    const nameInput = document.getElementById('name').value; // nameInput 변수에 id가 name인 요소를 찾아 저장한다
    const birthdateInput = document.getElementById('birthdate').value;
    const phoneInput = doucument.getElemenById('phone').value;
    const captchaInput = document.getElementById('captcha').value;

    if(captchaInput !== currentcaptcha){
        showMessage('자동 입력 방지 숫자가 올바르지 않습니다.', 'error');
        generatacaptcha(); // 캡차 새로고침
        doucument.getElemenById('captcha').value = ''; // 캡차 입력 필드 초기화
        return;
    }

    /**
     * find 메서드를 사용해서 특정요소를 찾아 주어진 
     * 조건에 만족하는 첫 번째 요소를 반환하고 만족하는 요소가 없으면 undefined 를 반환
     */
    const foundUser = usersDatabase.find(user =>
        user.name === nameInput &&
        user.birthdate === birthdateInput &&
        user.phone === phoneInput
    );

    if(foundUser){
        showMessage('로그인 성공! 환영합니다.', 'success');
        // console.log('로그인된 사용자', foundUser);
    } else{
        showMessage('일치하는 사용자 정보가 없습니다.', 'error');
        generateCaptcha();
        document.getElementById('captcha').value = '';
    }
}

function showMessage(message, type){
    const exishtingMessage = document.querySelector('.message'); // class 를 선택자로 사용할 때 . 을 붙인다.
    if(exishtingMessage){
        exishtingMessage.remove(); // exishtingMessage 변수에 저장된 HTML 요소를 문서에서 제거
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textcontent = message;

    const formContainer = document.querySelector('.login-form');
    formContainer.appendChild(messageDiv); // appendChild() 메서드를 사용해 화면에 보이게 함
    // messageDiv가 formContainer의 자식으로 추가
}

// 랜덤 캡차 생성 및 새로고침
function generatacaptcha(){

    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    currentCaptcha = randomNumber.toString();
    document.getElementById('captcha-image').textContent = currentcaptcha;
}

// 'DOMContentLoaded' -> HTML 문서가 완전히 로드되고 준비되었을 때 발생하는 이벤트
document.addEventListener('DOMContentLoaded', function (){ 
    generateCaptcha();

    const refreshButton = document.getElementById('refresh-captcha');
    if(submitbutton){
        submitbutton.addEventListener('click', handleSubmit);
    }
});



    




// // 4. 랜덤 캡차 생성 및 새로고침
// function generateCaptcha() {
//     const min = 1000;
//     const max = 9999;
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     currentCaptcha = randomNumber.toString();
//     document.getElementById('captcha-image').textContent = currentCaptcha;
// }

// // 5. HTML 로드 후 초기화
// document.addEventListener('DOMContentLoaded', function () {
//     generateCaptcha(); // 페이지 로드 시 캡차 생성

//     const refreshButton = document.getElementById('refresh-captcha');
//     refreshButton.addEventListener('click', generateCaptcha);

//     const submitButton = document.querySelector('.login-btn');
//     if (submitButton) {
//         submitButton.addEventListener('click', handleSubmit);
//     }
// });
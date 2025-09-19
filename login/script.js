let isLogin = true;

function toggleForm(){
    isLogin = !isLogin;
    document.getElementById("form-title").innerText = isLogin ? "로그인" : "회원가입";
    document.getElementById("signup-extra").style.display = isLogin ? "none" : "block"
}

function handleForm(){
    const email = document.getElementById("email").value;
    const pw = document.getElementById("password").value;

    if(!email || !pw)
        return alert("이메일과 비밀번호를 입력하세요");

    if(isLogin){
        alert(`[로그인] ${email}님 환영합니다`);
    }else {
        const name = document.getElementById("name").value;
        if (!name)
            return alert("이름도 입력해주세요");
        alert(`[회원가입 완료] ${name}님 환영합니다`);
    }
}
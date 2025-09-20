const usersDatabase = [];

class User {
    _email;
    _password;
    
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    get email(){
        return this._email;
    }

    set email(newEmail){
        if(newEmail && newEmail.length > 0){
            this._email = newEmail;
        }else{
            console.log("이메일을 채워주세요");
        }
    }

    get password(){
        return this._password;
    }

    set password(newPassword){
        if (newPassword && newPassword.length > 0){
            this._password = newPassword;
        }else {
            console.log("비밀번호를 입력해주세요");
        }
    }

}
// const user1 = new User('id@email.com', '12345');

// console.log(user1);



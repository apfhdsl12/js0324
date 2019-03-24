var uuid = require('uuid') 

var users = [] // 실제로는 DB사용.

//es5
function User(id, email, name, password){
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
}

//es6
// class User{
//     constructor(id, email, name, password){
//         this.id = id;
//         this.email = email;
//         this.name = name;
//         this.password = password;
//     }
// }

//회원가입 함수
function signup(email, name, password){

    //해당 email이 우리 유저인지 확인 해주고 만약 있다면 오류를 던져야 한다.
    for(var i =0; i<users.length; i++){
        if(users[i].email === email){
            // throw new Error('이미 가입되어있음');
            return;
        }
    }

    //uuid 생성
    var id = uuid.v1();
    //새로운 유저 생성
    var newUser = new User(id, email, name, password);
    //저장
    users.push(newUser);

    //회원가입 완료 메일 전송 ...
    //데이터베이스에 저장(여기서는 배열)

}

//로그인 함수
function login(email, password){
    //users에 해당 email과 password가 일치하는 유저가 있으면
    //user정보를 리턴(비밀번호를 제외)
    //없다면 null를 리턴

    for(var i=0; i<users.length; i++){
        if(users[i].email === email && users[i].password === password){
            return{
                id: users[i].id,
                email:users[i].email,
                name:users[i].name
            }
        }
    }

    return null;
}

//회원이름 수정
function updateName(id, newName){
    for(var i =0; i<users.length; i++){
        if(users[i].id ===id){
            users[i].name = newName;
        }
    }
}

//비밀번호 변경
function updatePassword(id, newPassword){
     
}


//초기화
signup('abc@google.com', 'ab', 'secret');
signup('abb@google.com', 'ad', 'secret');

//로그인
// var result = login('abc@google.com', 'secret');

// if(result){
//     console.log('로그인 성공', result);
//     }else{('로그인 실패')
// }

// abc@google.com 계정의 비밀번호는 secret입니다.
// abc@google.com 계정의 name을 jack으로 수정해보세요 updateName를 사용해서
// 중요!! email이 아니라 id에요
var user = login('abc@google.com', 'secret');
updateName(user.id,'jack');

console.log(users);
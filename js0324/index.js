// This (메소드? 함수?)


// function User(name){
//     this.name = name;
//     console.log(this);
// }

// var user1 = new User('jack');

// var user2 = {
//     name:"joy",
//     say:function(){
//         console.log(this);
//     }
// }
// user2.say();

// User();

// function User(name){
//     this.name = name;
//     console.log(this);
// }

// User.prototype.say = function(){
//     console.log(this);
// }

// var User = new User('jack');

// User.say();


// Call by Value

// function swap (num1, num2){
//     var temp = num1;
//     num1 = num2;
//     num2 = temp;
// }

// var a = 3;
// var b = 7;

// swap(a,b);

// console.log(a)
// console.log(b)


// Call by Reference

// function changePassword(user, newPassword){
//     user.password = newPassword
// }

// var user = {
//     password:'secret'
// }

// console.log('before', user)

// changePassword(user, 'new secret');

// console.log('after')



// 스코프 (유효범위)

var a = 7  // 전역 변수 (유효범위는 함수내, 함수외.)

function test(){
    var b = 3; // 지역 변수 (유효범위는 함수 내에서만.)
    console.log(a);
    console.log(b);
}

test();

console.log(a);











// 실행 컨텍스트
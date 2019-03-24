
var user = {
    name: 'jack',
    age: 5,
    address: 'secret'
}

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.address);
// console.log(typeof(user));

// var user1 = new Object();
// user1.name = 'jack'
// user1.age = 20;
// user1.address = 'secret';



var user1 = {
    name: 'jack',
    age: 20,
    say: function(){
        console.log('hi')
    }
}

var user2 = {
    name: 'joi',
    age : 20,
    say:function(){
        console.log('hi')
    }
}

user1.say();

//이름이  jack이고 나이가 20인 변수 user1
//이름이 joi이고 나이가 20인 변수 user2


// console.log(user1);
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.address);
// console.log(typeof(user1));


//객체의 나이가 10이상 20미만이면 console.log('어린놈');
//객체의 나이가 20이상이면 console.log('청춘');

// if(user.age>=10 && user.age <20){
//     console.log('어린놈');    
// }else if(user.age>=20){
//     console.log('청춘');
// }else{
//     console.log('??')
// }

// function add(num1, num2){

//     return num1 + num2;
// }

// var result = add(1,2);

var add = function(num1, num2){
    return num1 + num2;
}

var result = add(1,2);





//함수


// var add = function(num1, num2){
//     return num1 + num2;
// }

// var result = add(1,2);


// var user = {
//     name: 'jack',
//     age: 20,
//     address: 'secret',
//     class: 'B',
//     grade: 'A',
// }

// function printUser(user){
//     console.log('=================')
//     console.log('이름 :'+user.name);
//     console.log('나이 :'+user.age);
//     console.log('주소 :'+user.address);
//     console.log('반 :'+user.class);
//     console.log('등급 :'+user.grade);
//     console.log('=================');
// }


// printUser(user);

// printUser(user);

// printUser(user);

// printUser(user);


var user = {
    name:'jack',
    level:'gole'
}

function calNewPrice(price, user){
    var newPrice = 0;

    switch(user.level){
        case 'gole':
        // user.level gole 새 가격은 이전 가격의 0.9
            newPrice = price * 0.9;
            break;
        case 'silver':
        // user.level silver 새 가격은 이전 가격의 0.95
            newPrice = price * 0.95;
            break;
        case 'bronze':
        // user.level bronze 새 가격은 이전 가격의 0.98
            newPrice = price * 0.98;
            break;
        default:
        // user.level 나머지 새 가격은 기존가격
        newPrice = price;
    }

    return newPrice;
}

var newPrice = calNewPrice(3000, user);
console.log(newPrice);




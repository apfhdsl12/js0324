// 타입변환

// var name = "yoon";
// console.log(typeof(name));


// var num1 = '1';
// var num2 = 1;

/*
    == 값이 같으면 된다
    === 값과 타입이 모두 같아야 한다.

    != 값이 다르면 된다.
    !== 값과 타입이 모두 달라야 한다.
*/

// if(num1 !== num2){
//     console.log('nam1 type :', typeof(num1));
//     console.log('num2 type :', typeof(num2));
//     console.log('true');
// }


//명시적 타입 변환 Type casting
/*
    숫자를 문자로. 'String' , 'toString' 함수를 사용해서 변환.
*/

// var num = 10;
// var s_num = String(num);

// console.log(typeof(num));
// console.log(typeof(s_num));

// var test = true;
// var s_test = String(test);

// console.log(s_test);
// console.log(typeof(s_test));

/*
    문자를 숫자로. 'Number' , 'parseInt' , 'parseFloat'(소수점) 함수를 사용해서 변환.
*/

// var s_num = '100';
// var num = Number(s_num);
// var num2 = parseInt(s_num);
// var num3 = parseFloat(s_num);

// console.log(typeof(s_num));
// console.log(typeof(num));
// console.log(typeof(num2));
// console.log(typeof(num3));



//값을 Boolean 으로 변환
// var test = Boolean('aa');
// console.log(typeof(test));



//암묵적 타입 변환 Type coersion

//문자열 암묵적 변환.
// var num = 10;
// var s_num = 10 +''; // 암묵적으로 '10'이라는 문자를 만듦
// console.log(typeof(s_num));

// 'Number' , 'num*1'
//숫자 암묵적 변환
// var s_num = '10';
// var num = s_num*1;
// console.log(num);
// console.log(typeof(num));

/*불리언 암묵적 변환
// false
// undefined
// null
// 0, -0
// NaN
// ''
*/ // 조건식 안에서 실행이 안됨.

// if('aaa'){
//     console.log('true')
// }












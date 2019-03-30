//list에 있는 값들을 다 더한뒤에 출력해라
//만약 값중에 숫자가 아닌게 들어있다면 0을 출력해라


// var list = [10, undefined, 5, 7];

// var sum = 0;
// for(var i = 0; i<list.length; i++){
//     // console.log(list[i]);
//     if(list[i]=== undefined){
//         throw new Error('숫자가 아니다.')
//     }
//     sum = sum + list[i];
// }

// console.log('sum = ', sum)


//list에 있는 값들을 다 더한뒤에 출력해라
//만약 값중에 숫자가 아닌게 들어있다면 0을 출력해라
//오류가 발생하더라도 0을 출력해라
// try{
//     for(var i = 0; i<list.length; i++){
//         if(typeof list[i] !== 'numbver'){
//             sum = 0;
//             break;
//         }

//         sum = sum + list[i];
//     }
// }catch(e){
//     sum=0;
// }finally{    
//     console.log(sum);
// }



// function test1(){
//     console.log('test1')
//     for(var i = 0; i<100; i++){
//         if(i%10===0){
//             console.log(i)
//         }
//     }
// }

// function test2(){
//     console.log('test2')
// }

// function test3(){
//     console.log('test3')
// }

// test1();
// console.log('test1 호출 했음')

// test2();
// console.log('test2 호출 했음')

// test3();
// console.log('test3 호출 했음')


// console.log('작업 1 시작')
// setTimeout(function(){
//     console.log('3초 뒤')
// },3000)

// console.log('작업 2 시작')
// setTimeout(function(){
//     console.log('2초 뒤')
// },2000)

// console.log('작업 3 시작')
// setTimeout(function(){
//     console.log('1초 뒤')
// },1000)



// setTimeout(function(){
//     console.log('작업 1')

//     setTimeout(function(){
//         console.log('작업 2')
        
//         setTimeout(function(){
//             console.log('작업 3')
//         },1000)
//     },2000) 
// },3000)

//비동기 작업 처리할 때 사용하는 스킬

//promise 문법

//async await 문법 : promise 문법에 대해서 알고 있어야 함.



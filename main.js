//import { WriteStream } from "fs"

// $(document).ready(function() {
//     'use strict';

//     paper.install(window);
//     paper.setup(document.getElementById('mainCanvas'));

//     var tool = new Tool();
//     var c = Shape.Circle(200, 200, 80);
//     c.fillColor = 'black';
//     var text = new PointText(200, 200);
//     text.justification = 'center';
//     text.fillColor = 'white';
//     text.fontSize = 20;
//     text.content = 'hello world';
    
//     tool.onMouseDown = function(event) {
//         var c = Shape.Circle(event.point, 20);
//         c.fillColor = 'green';
//     }

//     // var c;
//     // for (var x=25; x<400; x+=50) {
//     //     for (var y=25; y<400; y+=50) {
//     //         c = Shape.Circle(x, y, 20);
//     //         c.fillColor = 'green';
//     //     }
//     // }

//     // var c = Shape.Circle(200, 200, 50);
//     // c.fillColor = 'green';

//     paper.view.draw();

//     console.log('main.js loaded');
// });

//////////////////////////////////////////////////////////////////
// TEST
// const obj = {};
// obj.color = "yellow";
// obj["not an identifier"] = 3;
// obj["not an identifier"];
// obj["color"];

// const s = "hello";
// s.rating = 3;
// s.rating;

// let x = 2;
// const r1 = x++ + x++; // 2 + 3 => x : 4
// const r2 = ++x + ++x; // 5 + 6 => x : 6
// const r3 = x++ + ++x; // 6 + 8 => x : 8
// const r4 = ++x + x++; // 9 + 9 => x : 10
// let y = 10;
// const r5 = y-- + y--; // 10 + 9 = 10 => y : 8
// const r6 = --y + --y;
// const r7 = y-- + --y;
// const r8 = --y + y--;

// console.log(`r1 : ${r1}`);
// console.log(`r2 : ${r2}`);
// console.log(`r3 : ${r3}`);
// console.log(`r4 : ${r4}\n`);

// console.log(`r5 : ${r5}`);
// console.log(`r6 : ${r6}`);
// console.log(`r7 : ${r7}`);
// console.log(`r8 : ${r8}`);

// let x = 3 ,y;
// x += y = 6*5/2;
// console.log(`${x}\n${y}`);
// 이 표현식을 우선순위에 따라 다음에 일어날 행동에 괄호를 치겠습니다.
// x - 18, y 15

// const n = 5;
// const s = "5";
// n === s;
// n !== s;
// n === Number(s);
// n !== Number(s);
// n == s;
// n != s;

// const a = { name: "an object"};
// const b = { name: "an object"};
// a === b;
// a !== b;
// a == b;
// a != b;

// let n = 0;
// while(true) {
//     n += 0.1;
//     if(Math.abs(n - 0.3) < Number.EPSILON) break;
// //    if (n === 0.3) break;
// }

// console.log(`Stopped at ${n}`);

// const FLAG_EXECUTE = 1  // 0b001
// const FLAG_WRITE = 2    // 0b010
// const FLAG_READ = 3     // 0b100

// let p = FLAG_READ | FLAG_WRITE;
// let hasWrite = p & FLAG_WRITE;
// let hasExecute = p & FLAG_EXECUTE;
// p = p ^ FLAG_WRITE;
// p = p ^ FLAG_READ;

// const hasReadOfExecute = p & (FLAG_READ | FLAG_EXECUTE);
// const hasReadAndExecute = p & (FLAG_READ | FLAG_EXECUTE) === FLAG_READ | FLAG_EXECUTE;

// let v, v0;
// v = v0 = 9.8;

// // while 문의 조건에 있는 할당을 보십시오. 먼저 n이 nums[i]의 값을 받고
// // 다음에는 표현식 전체가 그 값으로 평가되므로 숫자로 비교할 수 있습니다.
// const nums = [3, 5, 15, 7, 5];
// let n, i = 0;
// while((n = nums[i]) < 10 && i++ < nums.length) {
//     console.log(`Number less than 10: ${n}.`);
// }
// console.log(`Number greater than 10 found: ${n}.`);
// console.log(`${nums.length - i - 1} numbers remain`);

const obj = { b: 2, c: 3, d: 4};

const {a, b, c} = obj;
console.log(`${a}`);
console.log(`${b}`);
console.log(`${c}`);
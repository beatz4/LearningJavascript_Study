//import { doesNotReject } from "assert";

//import { throws } from "assert";

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

// const obj = { b: 2, c: 3, d: 4};

// const {a, b, c} = obj;
// console.log(`${a}`);
// console.log(`${b}`);
// console.log(`${c}`);

// const arr = [1, 2, 3, 4, 5];
// let [x, y, ...rest] = arr;
// console.log(`${x}`);
// console.log(`${y}`);
// console.log(`${rest}`);

// const roomTempC = 21.5;
// let currentTempC = 19.5;
// const message = `The current temperature is ` + `${currentTempC-roomTempC}\u0060C different than room temperature.`;
// const fahrenheit = `The curremt temperature is ${currentTempC * 9/5 + 32}\u00b0F`;

// function getGreeting() {
//     return "Hello world";
// }

// console.log(getGreeting());

// const f = getGreeting;
// console.log(f());

// const o = {};
// o.f = getGreeting;
// console.log("o.f : " + o.f());

// const arr = [1, 2, 3];
// arr[1] = getGreeting;
// console.log(arr);

// function f(o) {
//     o.message = `f 안에서 수정함 (이전 값: '${o.message}')`;
// }

// let o = {
//     message: "초기 값"
// };

// console.log(`f를 호출하기 전: o.message="${o.message}"`);
// f(o);
// console.log(`f를 호출한 다음: o.message="${o.message}"`);

// function f(x) {
//     return `in f: x=${x}`;
// }

// console.log(f());       // "in f: x=undefined"

// function getSentence([subject, verb, object]) {
//     return `${subject} ${verb} ${object}`;
// }

// // const o = {
// //     subject: "I",
// //     verb: "love",
// //     object: "JavaScript",
// // };

// const arr = ["I", "love", "JavaScript"];

// console.log(getSentence(arr));

// function addPrefix(prefix, ...words) {
//     const prefixedWords = [];
//     for (let i=0; i<words.length; i++) {
//         prefixedWords[i] = prefix + words[i];
//     }

//     return prefixedWords;
// }

// const arr = addPrefix("con", "verse", "vex");
// console.log(arr);

// function f(a, b = "default", c=3) {
//     return `${a} - ${b} - ${c}`;
// }

// f(5, 6, 7);
// f(5, 6);
// f(5);
// f();

// const o = {
//     name: 'Julie',
//     greetBackwards: function() {
//         const self = this;
//         function getReverseName() {
//             let nameBackwards = '';
//             for(let i=self.name.length-1; i>=0; i--) {
//                 nameBackwards += self.name[i];
//             }

//             return nameBackwards;
//         }

//         return `${getReverseName()} si eman ym ,olleH`;
//     },
// };
// console.log(o.greetBackwards());

// const o = {
//     name: 'Julie',
//     greetBackwards: function() {
//         const getReverseName = () => {
//             let nameBackwards = '';
//             for(let i=this.name.length-1; i>=0; i--) {
//                 nameBackwards += this.name[i];
//             }
//             return nameBackwards;
//         }

//         return `${getReverseName()} si eman ym ,olleH`;
//     },
// };

// console.log(o.greetBackwards());

// const bruce = { name: "Bruce" };
// const madeline = {name: "Madeline"};

// // 이 함수는 어떤 객체에도 연결되지 않지만 this를 사용합니다.
// function greet() {
//     return `Hello I'm ${this.name}`;
// }

// // console.log(greet());
// // console.log(greet.call(bruce));
// // console.log(greet.call(madeline));

// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// // update.call(bruce, 1949, 'singer');
// // console.log(bruce);

// // update.apply(bruce, [1955, "actor"]);
// // console.log(bruce);

// const arr = [2, 4, -5, 15, 7];
// // console.log(Math.min.apply(null, arr));
// // console.log(Math.max.apply(null, arr));

// const updateBruce = update.bind(bruce);

// updateBruce(1904, "actor");

// let name = "Irena";
// let age = 25;

// function greet() {
//     console.log(`Hello, ${name}!`);
// }

// function getBirthYear() {
//     return new Date().getFullYear() - age;
// }

// greet();
// console.log(getBirthYear());

// {
//     let x = {color: "blue"};
//     let y = x;
//     let z = 3;

//     {
//         // 내부 블록
//         let x = 5;
//         console.log(x);
//         console.log(y.color);
//         y.color = "red";
//         console.log(z);
//     }
//     console.log(x.color);
//     console.log(y.color);
//     console.log(z);
// }

// let globalFunc;
// {
//     let blockVar = 'a';
//     globalFunc = function() {
//         console.log(blockVar);
//     }
// }
// globalFunc();

// let f;
// {
//     let o = { note:'Safe' };
//     f = function() {
//         return o;
//     }
// }
// let oRef = f();
// console.log(oRef);
// oRef.note = "Not so safe after all";
// console.log(oRef);

// const message = (function() {
//     const secret = "I'm a secret!";
//     return `The secret is ${secret.length} charactors long.`;
// })();
// console.log(message);

// const f = (function() {
//     let count = 0;
//     return function() {
//         return `I have been called ${++count} time(s)`;
//     }
// })();

// console.log(f());
// console.log(f());
// const arr1 = [1, 2, 3];
// const arr2 = ["one", 2, "three"];
// const arr3 = [[1, 2, 3], ["one", 2, "three"]];
// const arr4 = [
//     {name: "Fred", type: "object", luckyNumber: [5, 7, 13]},
//     [
//         {name: "Susan", type:"object"},
//         {name: "Anthony", typoe:"object"},
//     ],
//     function() { return "arrays can  contain functions too"; },
//     "three",
// ];

// // 배열 요소에 접근하기
// arr1[0];
// arr1[1];
// arr3[2];
// arr4[1][0];

// // 배열 길이
// arr1.length;
// arr4.length;
// arr4[1].length;

// // 배열 길이 늘리기
// arr1[4] = 5;
// arr1;
// arr1.length;

// // 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로 배열의 길이가 늘어나지는 않습니다.
// arr2[10];
// arr2.length;

// // Arrary 생성자 (거의 사용하지 않습니다.)
// const arr5 = new Array();
// const arr6 = new Array(1, 2, 3);
// const arr7 = new Array(2);
// const arr8 = new Array("2");

// const arr = [{name: "Suzanne"}, {name: "Jim"}, 
// {name: "Trevor"}, {name: "Amanda"}];
// arr.sort();
// arr.sort((a,b) => a.name > b.name);
// arr.sort((a,b) => a.name[1] < b.name[1]);

// class Person {
//     constructor(name) {
//         this.name = name;
//         this.id = Persone.nextId++;
//     }
// }

// Person.nextId = 0;
// const jamie = new Person("Jamie"),
//     juliet = new Person("Juliet"),
//     peter = new Person("Peter"),
//     jay = new Person("Jay");

// const arr = [jamie, juliet, peter, jay];

// arr.find(p => p.id === juliet.id);

// arr.find(function(p)  {
//     return p.id === this.id
// }, juliet);

// const cards = [];
// for(let suit of ['H', 'C', 'D', 'S'])
//     for(let value=1; value<=13; value++)
//         cards.push({suit, value});

// // console.log(cards.filter(c => c.value === 2));
// // console.log(cards.filter(c => c.value > 10));
// console.log(cards.filter(c => c.value > 10 && c.suit === 'H'))

// function cardToString(c) {
//     const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
//     const values = {1: 'A', 11: 'J', 12: 'Q', 13:'K'};

//     for (let i=2; i<=10; i++) values[i]=i;
//     return values[c.value] + suits[c.suit];
// }

// console.log(cards.filter(c => c.value === 2).map(cardToString));
// console.log(cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString));

// const SYM = Symbol();
// const o = {a: 1, b: 2, c: 3, [SYM]: 4};

// for (let prop in o) {
//     if (!o.hasOwnProperty(prop)) continue;
//     console.log(`${prop}: ${o[prop]}`);
// }

// const Car = function() {

//     const carProps = new WeakMap();
//     class Car {

//         static getNextVin() {
//             return Car.nextVin++;
//         }

//         constructor(make, model) {
//             this.make = make;
//             this.model = model;
//             this.vin = Car.getNextVin();
//             // this._userGears = ['P', 'N', 'R', 'D'];
//             // carProps.set(this, { userGear: this._userGears[0]});
//         }
//         static areSimilar(car1, car2) {
//             return car1.make === car2.make && car1.model === car2.model;
//         }
//         static areSame(car1, car2) {
//             return car1.vin === car2.vin;
//         }
//         // get userGear() { return carProps.get(this).userGear; }
//         // set userGear(value) {
//         //     if(this._userGears.indexOf(value) < 0)
//         //         throw new Error(`Invalid gear:${value}`);
//         //     carProps.get(this).userGear = value;
//         // }
//         // shift(gear) { this.userGear = gear; }
//     }

//     return Car;
// }();

// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");
// car1.shift('D');
// car2.shift('R');
// -------------------------------------- 2019/11/19

// const car1 = new Car();
// const car2 = new Car();
// console.log(car1.shift === Car.prototype.shift);
// car1.shift('D');
// //car1.shift('d'); error exception
// car1.userGear;
// car1.shift === car2.shift;

// car1.shift === function(gear) { this.userGear = gear.toUpperCase(); }
// car1.shift === Car.prototype.shift;
// car1.shift === car2.shift;
// //car1.shift('d'); error exception
// car1.userGear;

// Car.nextVin = 0;

// const car1 = new Car("Tesla", "S");
// const car2 = new Car("Mazda", "S");
// const car3 = new Car("Mazda", "S");

// console.log(car1.vin);
// console.log(car2.vin);
// console.log(car3.vin);

// console.log(Car.areSimilar(car1, car2));
// console.log(Car.areSimilar(car2, car3));
// console.log(Car.areSame(car1, car2));
// console.log(Car.areSame(car2, car2));

// class Vehicle {
//     constructor() {
//         this.passenger = [];
//         console.log("Vehicle created");
//     }

//     addPassenger(p) {
//         this.passenger.push(p);
//     }
// }

// class Car extends Vehicle {
//     constructor() {
//         super();
//         console.log("Car creted");
//     }

//     deployAirbags() {
//         console.log("BWOOSH!");
//     }

//     toString() {
//         return `${this.make} ${this.model}: ${this.vin}`;
//     }
// }

// const v = new Vehicle();
// v.addPassenger("Frank");
// v.addPassenger("Judy");
// console.log(v.passenger);
// const c = new Car();
// c.addPassenger("Alice");
// c.addPassenger("Cameron");
// console.log(c.passenger);
// console.log(v.deployAirbags());     // error
// console.log(c.deployAirbags());

// class Motorcycle extends Vehicle {}
// const c = new Car();
// const m = new Motorcycle();
// console.log(c instanceof Car);
// console.log(c instanceof Vehicle);
// console.log(m instanceof Car);
// console.log(m instanceof Motorcycle);
// console.log(m instanceof Vehicle);

// class Super {
//     constructor() {
//         this.name = 'Super';
//         this.isSuper = true;
//     }
// }

// // 유효하지만 추천하지 않는 방법, property로 지정하는 방식을 추천
// // 뇌피셜 : 아래 방법으로 생성할 경우 관리가 어렵고 외부에서 사용하기가 어려움
// Super.prototype.sneaky = 'not recommended!';

// class Sub extends Super {
//     constructor() {
//         super();
//         this.name = 'Sub';
//         this.isSub = true;
//     }
// }

// const obj = new Sub();

// for(let p in obj) {
//     console.log(`${p}: ${obj[p]}` + 
//     (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
// }

// class InsurancePolicy {}
// const ADD_POLICY = Symbol();
// const GET_POLICY = Symbol();
// const IS_INSURED = Symbol();
// const _POLICY = Symbole();
// function makeInsurable(o) {
//     o[ADD_POLICY] = function(p) { this[_POLICY] = p; }
//     o[GET_POLICY] = function() { return this[_POLICY]; }
//     o[IS_INSURED] = function() { return !!this[_POLICY]; }

//     // o.addInsurancePolicy = function(p) { this.InsurancePolicy = p; }
//     // aogetInsurancePolicy = function() { return this.InsurancePolicy; }
//     // o.isInsured = function() { return !!this.InsurancePolicy; }
// }

// // makeInsurable(Car);
// // const car1 = new Car();
// // car1.addInsurancePolicy(new InsurancePolicy());

// makeInsurable(Car.prototype);
// const car1 = new Car();
// car1.addInsurancePolicy(new InsurancePolicy());

// const u1 = { name: 'Cynthia' };
// const u2 = { name: 'Jackson' };
// const u3 = { name: 'Olive' };
// const u4 = { name: 'James' };

// const userRoles = new Map();
// userRoles.set(u1, 'User');
// userRoles.set(u2, 'User');
// userRoles.set(u3, 'Admin');

// userRoles
//     .set(u1, 'User')
//     .set(u2, 'User')
//     .set(u3, 'Admin');

// const userRoles = new Map([
//     [u1, 'User'],
//     [u2, 'User'],
//     [u3, 'Admin'],
// ]);

//console.log(userRoles.get(u2));

// console.log(userRoles.has(u1));
// console.log(userRoles.get(u1));
// console.log(userRoles.has(u4));
// console.log(userRoles.get(u4));

// console.log(userRoles.get(u1));
// userRoles.set(u1, 'Admin');
// console.log(userRoles.get(u1));

// console.log(userRoles.size);

// for(let u of userRoles.keys())
//     console.log(u.name);

// for(let r of userRoles.values())
//     console.log(r)

// for(let ur of userRoles.entries())
//     console.log(`${ur[0].name}: ${ur[1]}`);

// // 맵도 분해할 수 있습니다.
// // 분해하면 좀 더 자연스러운 코드가 됩니다.
// for(let [u,r] of userRoles.entries())
//     console.log(`${u.name}: ${r}`);

// // entries() 메서드는 맵의 기본 이터레이터입니다.
// // 위 코드는 다음과 같이 단축해서 쓸 수 있습니다.
// for(let [u,r] of userRoles)
//     console.log(`${u.name}: ${r}`);

// userRoles.delete(u2);
// userRoles.size;

// const SecretHolder = (function() {
//     const secrets = new WeakMap();
//     return class {
//         setSecret(secret) {
//             secrets.set(this, secret);
//         }
//         getSecret() {
//             return secrets.get(this);
//         }
//     }
// }) ();

// const a = new SecretHolder();
// const b = new SecretHolder();

// a.setSecret('secret A');
// b.setSecret('secret B');

// console.log(a.getSecret());
// console.log(b.getSecret());

// const roles = new Set();
// roles.add("User");
// roles.add("Admin");

// console.log(roles.size);
// roles.add("User");
// console.log(roles.size);

// console.log(roles.delete("Admin"));
// console.log(roles);
// console.log(roles.delete("Admin"));

// const naughty = new WeakSet();

// const children = [
//     { name: "Suzy" },
//     { name: "Derek" },
// ];

// naughty.add(children[1]);

// for(let child of children) {
//     if(naughty.has(child))
//         console.log(`Coal for ${child.name}!`);
//     else
//         console.log(`Presents for ${child.name}!`);
// }

// 2019/11/25 ---- chapter 11 예외와 에러처리

// const err = new Error('invalid email');

// function validateEmail(email) {
//     return email.match(/@/) ?
//         email :
//         new Error(`invalid email: ${email}`);
// }

// const email = "jane@doe.com";

// const validatedEmail = validateEmail(email);
// if(validatedEmail instanceof Error) {
//     console.log(`Error: ${validatedEmail.message}`);
// } else {
//     console.log(`Valid email: ${validatedEmail}`);
// }

// const email = null;

// try {
//     const validatedEmail = validateEmail(email);
//     if(validatedEmail instanceof Error) {
//         console.log(`Error: ${validatedEmail.message}`);
//     } else {
//         console.log(`Valid email: ${validatedEmail}`);
//     }
// } catch(err) {
//     console.log(`Error: ${err.message}`);
// }

// function billPay(amount, payee, account) {
//     if(amount > account.balance)
//         throw new Error("insufficient funds");
//     account.tranfer(payee, amount);
// }

// function a() {
//     console.log('a: calling b');
//     b();
//     console.log('a: done');
// }
// function b() {
//     console.log('b: calling c');
//     c();
//     console.log('b: done');
// }
// function c() {
//     console.log('c: throwing error');
//     throw new Error('c error');
//     console.log('c: done');
// }
// function d() {
//     console.log('d: calling c');
//     c();
//     console.log('d: done');
// }

// try {
//     a();
// } catch(err) {
//     console.log(err.stack);
// }

// try {
//     d();
// } catch(err) {
//     console.log(err.stack);
// }

// try {
//     console.log("this line is executed...");
//     throw new Error("whoops");
//     console.log("this line is not...");
// } catch (err) {
//     console.log("there was an error...");
// } finally {
//     console.log("...always executed");
//     console.log("perform cleanup here");
// }

// const book = [
//     "Twinkle, twinkle, little bat!",
//     "How I wonder what you're at!",
//     "Up above the world you fly",
//     "Like a tea tray in the sky.",
//     "Twinkle, twinkle, little bat!",
//     "How I wonder what you're at!",
// ];

// const it = book.values();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let current = it.next();
// while(!current.done) {
//     console.log(current.value);
//     current = it.next();
// }

// const it1 = book.values();
// const it2 = book.values();

// it1.next();
// it1.next();

// class Log {
//     constructor() {
//         this.messages = [];
//     }
//     add(message) {
//         this.messages.push({message, timestamp: Date.now()});
//     }
//     [Symbol.iterator]() {
//         //return this.messages.values();
//         let i = 0;
//         const message = this.message;
//         return {
//             next() {
//                 if(i >= messages.length)
//                     return { value: undefined, done: true };
//                 return { value: messages[i++], done: false };
//             }
//         }
//     }
// }

// const log = new Log();
// log.add("first day at sea");
// log.add("spotted whale");
// log.add("spotted another vessel");

// for(let entry of log) {
//     console.log(`${entry.message} @ ${entry.timestamp}`);
// }

// class FibonacciSequence {
//     [Symbol.iterator]() {
//         let a = 0, b = 1;
//         return {
//             next() {
//                 let rval = { value: b, done: false };
//                 b += a;
//                 a = rval.value;
//                 return rval;
//             }
//         }
//     }
// }

// const fib = new FibonacciSequence();
// let i = 0;
// for(let n of fib) {
//     console.log(n);
//     if(++i > 9) break;
// }

// function* rainbow() {
//     yield 'red';
//     yield 'orange';
//     yield 'yellow';
//     yield 'green';
//     yield 'blue';
//     yield 'indigo';
//     yield 'violet';
// }

// const it = rainbow();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for(let color of rainbow()) {
//     console.log(color);
// }

// function* interrogate() {
//     const name = yield "What is your name?";
//     const color = yield "What is your favorite color?";
//     return `${name}'s favorite color is ${color}.`;
// }

// const it = interrogate();
// console.log(it.next('123'));
// console.log(it.next('Ethan'));
// console.log(it.next('orange'));
// console.log(it.next('123'));

// function* abc() {
//     yield 'a';
//     yield 'b';
//     return 'c';
// }

// const it = abc();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function printLeapYearStatus() {
//     const year = new Date().getFullYear();
//     if(year % 4 !== 0) console.log(`${year} is NOT a leap year`);
//     else if(year % 100 != 0) console.log(`${year} IS a leap year`);
//     else if(year % 400 != 0) console.log(`${year} is NOT leap year`);
//     else console.log(`${year} IS a leap year`);
// }

// function printLeapYearStatus() {
//     const year = new Date().getFullYear();
//     if(year % 4 !== 0) return false;
//     else if(year % 100 != 0) return true;
//     else if(year % 400 != 0) return false;
//     else return true;
// }

// console.log("Before timeout: " + new Date());
// function f() {
//     console.log("After timeout: " + new Date());
// }

// setTimeout(f, 60*1000); // 1분
// console.log("I happen after setTimeout");
// console.log("Me too!");

// const start = new Date();
// let i = 0;
// const intervalId = setInterval(function() {
//     let now = new Date();
//     if(now.getMinutes() !== start.getMinutes() || ++i>10)
//         return clearInterval(intervalId);
//     console.log(`${i}: ${now}`);
// }, 5*1000);

// function countdown() {
//     //let i;
//     console.log("Countdown:");
//     for(let i=5; i>=0; i--) {
//         setTimeout(function() {
//             console.log(i===0 ? "GO!" : i);
//         }, (5-i)*1000);
//     }
// }

// countdown();

// const fs = require('fs');

// const fname = 'may_or_may_not_exist.txt';
// fs.readFile(fname, function(err, data) {
//     if(err) return console.error(`error reading file ${fname}: ${err.message}`);
//     console.log(`${fname} contents: ${data}`);
// });

const fs = require('fs');

fs.readFile('a.txt', function(err, dataA) {
    if(err) console.error(err);
    fs.readFile('b.txt', function(err, dataB) {
        if(err) console.error(err);
        fs.readFile('c.txt', function(err, dataC) {
            if(err) console.error(err);
            setTimeout(function() {
                fs.writeFile('d.txt', dataA+dataB+dataC, function(err) {
                    if(err) console.error(err);
                });
            }, 60*1000);
        });
    });
});
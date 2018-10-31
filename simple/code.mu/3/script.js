/*
* @Author: User
* @Date:   2018-09-07 21:36:24
* @Last Modified by:   User
* @Last Modified time: 2018-09-09 13:29:57
*/

/* Глава 3 */

/*01*/
/*
//var a = 1;
//var a = 0;
//var a = -3;

if (a == 0) {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*02*/
/*
//var a = 1;
//var a = 0;
//var a = -3;

if (a > 0) {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*03*/
/*
//var a = 1;
//var a = 0;
//var a = -3;

if (a < 0) {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*04*/
/*
//var a = 1;
//var a = 0;
//var a = -3;

if (a >= 0) {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*05*/
/*
//var a = 1;
//var a = 0;
//var a = -3;

if (a <= 0) {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*06*/
/*
//var a = 1;
//var a = 0;
//var a = -3;

if (a != 0) {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*07*/
/*
//var a = 'test';
//var a = 'тест';
//var a = 3;

if (a == 'test') {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*08*/
/*
//var a = '1';
//var a = 1;
//var a = 3;

if (a === '1') {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*09*/
/*
//var test = true;
//var test = false;

// Possible 1

if (test == true) {
  alert("Верно!");
} else {
  alert("Не верно!");
}

// Possible 2

if (test) {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*10*/
/*
//var test = true;
//var test = false;

// Possible 1

if (test != true) {
  alert("Верно!");
} else {
  alert("Не верно!");
}

// Possible 2

if (!test) {
  alert("Верно!");
} else {
  alert("Не верно!");
}
*/
/*11*/
/*
//var a = 5;
//var a = 0;
//var a = -3;
//var a = 2;

if (a > 0 && a < 5) {
  alert ("Верно!");
} else {
  alert ("Неверно!");
}
*/
/*12*/
/*
//var a = 5;
//var a = 0;
//var a = -3;
//var a = 2;

if (a == 2 || a == 0) {
  a = a + 7;
  alert (a);
} else {
  a = a/10;
  alert (a);
}
*/
/*13*/
/*
//var a = 1;
//var a = 3;
//var a = 0;
//var b = 6;
//var b = 3;
//var b = 5;

if (a <= 1 && b >= 3) {
  alert (a + b);
} else {
  a = a/10;
  alert (a - b);
}
*/
/*14*/
/*
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
  alert ("Верно");
} else {
  alert ("Неверно");
}
*/
/*15*/
/*
var num = 3;

switch (num) {
  case 1: var result = "Зима"; break;
  case 2: var result = "Весна"; break;
  case 3: var result = "Лето"; break;
  case 4: var result = "Осень"; break;
}
alert (result);
*/
/*16*/
/*
var day = 30;

if (day >= 0 && day <= 10){
  alert ("Первая декада");
} else if (day >= 11 && day <= 20) {
  alert ("Вторая декада");
} else if (day >= 21 && day <= 31) {
  alert ("Третья декада");
} else {
  alert ("Неверно!");
}
*/
/*17*/
/*
var month = 12;

switch (month){
  case 1: var result = "Зима"; break;
  case 2: var result = "Зима"; break;
  case 3: var result = "Весна"; break;
  case 4: var result = "Весна"; break;
  case 5: var result = "Весна"; break;
  case 6: var result = "Лето"; break;
  case 7: var result = "Лето"; break;
  case 8: var result = "Лето"; break;
  case 9: var result = "Осень"; break;
  case 10: var result = "Осень"; break;
  case 11: var result = "Осень"; break;
  case 12: var result = "Зима"; break;
}
alert(result);
*/
/*18*/
/*
var str = "abcde";

if (str[0] == 'a') {
  alert ("ДА!");
} else {
  alert ("нет!");
}
*/
/*19*/
/*
var str = "12345";

if (str[0] === '1' || str[0] === '2' || str[0] === '3') {
  alert ("ДА!");
} else {
  alert ("нет!");
}
*/
/*20*/
/*
var str = "345";
var result = Number(str[0]) + Number(str[1]) + Number(str[2]);
alert (result);
*/
/*21*/
/*
var str = "345678";
var result1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
var result2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (result1 == result2) {
  alert ("Верно!");
} else {
  alert ("Неверно!");
}
*/
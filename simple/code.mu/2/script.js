/*
* @Author: Vitaly
* @Date:   2018-09-07 16:57:55
* @Last Modified by:   User
* @Last Modified time: 2018-09-07 17:56:48
*/

/* ГЛАВА 2 */

/*01*/
/*
var arr = ["a", "b", "c"];
alert (arr);
*/
/*02*/
/*
var arr = ["a", "b", "c"];
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);
*/
/*03*/
/*
var arr = ['a', 'b', 'c', 'd']
alert("'"+arr[0]+"+"+arr[1]+", "+arr[2]+"+"+arr[3]+"'");
*/
/*04*/
/*
var arr=[2,5,3,9];
var a = arr[0] * arr[1];
var b = arr[2] * arr[3];
var result = a + b;
alert(result);
*/
/*05*/
/*
var obj = {a: 1, b: 2, c: 3};
alert(obj['c']);
alert(obj.c);
*/
/*06*/
/*
var obj = {Коля: '1000', Вася: '500', Петя: '200'};
alert("Зарплата Пети: " +
 			obj['Петя'] + " рублей. Зарплата Коли: " + 
 			obj['Коля'] + " рублей"); 
*/
/*07*/
/*
var week = {
	1: 'Понедельник',
	2: 'Вторник',
	3: 'Среда', 
	4: 'Четверг',
	5: 'Пятница',
	6: 'Суббота',
	7: 'Воскресенье'};
alert(week['5']);
*/
/*08*/
/*
var day = 3;
var week = {
	1: 'Понедельник',
	2: 'Вторник',
	3: 'Среда', 
	4: 'Четверг',
	5: 'Пятница',
	6: 'Суббота',
	7: 'Воскресенье'};
alert(week[day]);
*/
/*09*/
/*
var arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
alert (arr[1][0]);
*/
/*10*/
/*
var obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(obj.js[0]);
*/
/*11*/
/*
var week = {
	ru:[
	'Понедельник',
	'Вторник',
	'Среда',
	'Чертверг',
	'Пятница',
	'Суббота',
	'Воскресенье'],
	en:[
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
	]};
alert(week.ru[0] +" "+ week.en[2]);
*/
/*12*/
/*
var day = 3;
var lang = 'ru';
var week = {
	ru:[
	'Понедельник',
	'Вторник',
	'Среда',
	'Чертверг',
	'Пятница',
	'Суббота',
	'Воскресенье'],
	en:[
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
	]};
alert(week[lang][day - 1]);
*/
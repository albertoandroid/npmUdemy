
//var start = new Date(2021, 00, 01);
//var end = new Date(2021, 00, 18);

const d3 = require('d3-time')

var start = new Date(2021, 02, 01);
var end = new Date(2021, 03, 01);

var miliSegundosDia = 24*60*60*1000;

var resultado = (end-start)/miliSegundosDia;

console.log(resultado);

resultado = d3.timeDay.count(start, end);

console.log(resultado);


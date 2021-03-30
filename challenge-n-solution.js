
alert("enter 5 numpurs");
let n1=prompt("Type a number", "");
let n2=prompt("Type a number", "");
let n3=prompt("Type a number", "");
let n4=prompt("Type a number", "");
let n5=prompt("Type a number", "");

let arr = [n1,n2,n3,n4,n5];
let max = Math.max(...arr);
let min = Math.min(...arr);
document.write("max"+max+"min"+min);






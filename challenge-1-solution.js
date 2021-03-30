
alert("enter 5 numpurs");
let n1=prompt("Type a number", "");
let n2=prompt("Type a number", "");
let n3=prompt("Type a number", "");
let n4=prompt("Type a number", "");
let n5=prompt("Type a number", "");

let arr = [n1,n2,n3,n4,n5];
function my(){for (let i=0;i<arr.length;i++){
    let sqr = Math.sqrt(arr[i]);
    document.write(sqr)


}}
my();









var num = new Array();
for (var i=0; i<5; i=i+1){
    num[i]=parseInt(prompt("Enter a Number"));
}
var sum = 0;
for (var i=0; i<5; i=i+1){
    document.write(num[i] + "</br>");
    sum = sum + num[i];
}
document.write("Sum is: " + sum);

document.write("count the odd number od an array"+"<br>")
document.write("--------------------------------"+"<br>")

var odd=[21,23,45,98,77,73,21];
var a=[];
for(let i=0;i<=odd.length-1;i++){

    if(odd[i]%2!==0){
         a.push(odd[i])
    }
}
document.write(a+"<br>")

function add(){
   let num1= document.getElementById("num1").value;
   let num2= document.getElementById("num2").value;
   document.getElementById("answer").innerHTML=parseInt(num1)+parseInt(num2);
}
function sub(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    document.getElementById("answer").innerHTML=parseInt(num1)-parseInt(num2);
 }
 function mul(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    document.getElementById("answer").innerHTML=parseInt(num1)*parseInt(num2);
 }
 function div(){
    let num1= document.getElementById("num1").value;
    let num2= document.getElementById("num2").value;
    document.getElementById("answer").innerHTML=parseInt(num1)/parseInt(num2);
 }
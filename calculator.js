
document.getElementById("add").onclick=function add(){
    let num1=Number(document.getElementById("number1").value);
let num2=Number(document.getElementById("number2").value);
let sum=num1+num2;
document.getElementById("p").innerHTML="The sum is "+sum;
}
document.getElementById("subtract").onclick=function sub(){
    let num1=Number(document.getElementById("number1").value);
let num2=Number(document.getElementById("number2").value);
     let difference=num1-num2;
    document.getElementById("p").innerHTML="The difference is "+difference;
    }
    document.getElementById("multiply").onclick=function multiply(){
        let num1=Number(document.getElementById("number1").value);
let num2=Number(document.getElementById("number2").value);
        product=num1*num2;
        document.getElementById("p").innerHTML="The product is "+product;
        }
        document.getElementById("divide").onclick=function divide(){
            let num1=Number(document.getElementById("number1").value);
let num2=Number(document.getElementById("number2").value);
           let quotient=num1/num2;
            document.getElementById("p").innerHTML="The quotient is "+quotient;
            }
            document.getElementById("modulo").onclick=function modulo(){
                let num1=Number(document.getElementById("number1").value);
let num2=Number(document.getElementById("number2").value);
                let mod=num1%num2;
                document.getElementById("p").innerHTML="The remainder is "+mod;
                }

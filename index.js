//INTEREST CALCULATOR

//const mytext=document.getElementById(mytext).value;
//const mytext1=document.getElementById(mytext1).value;
//const mytext2=document.getElementById(mytext2).value;


function calculate(){
const myinput=document.getElementById("myinput");
const myinput1=document.getElementById("myinput1");
const myinput2=document.getElementById("myinput2");
const totalAmount=document.getElementById("total-amt");

let principle=Number(myinput.value);
let rate=Number(myinput1.value  / 100);
let years=Number(myinput2.value);

const result= (principle * rate * years)/100;
console.log(result)
totalAmount.textContent=result.toLocaleString(undefined,{style:"currency",currency:"INR"})
}

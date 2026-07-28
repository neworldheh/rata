const amount=document.getElementById("amount");
const rate=document.getElementById("rate");
const years=document.getElementById("years");
const extra=document.getElementById("extra");

[amount,rate,years,extra].forEach(x=>x.oninput=calculate);

function money(x){

return x.toLocaleString('pl-PL',{
minimumFractionDigits:2,
maximumFractionDigits:2
})+" PLN";

}

function calculate(){

let P=parseFloat(amount.value);
let annual=parseFloat(rate.value)/100;
let n=parseFloat(years.value)*12;
let extraPay=parseFloat(extra.value);

let r=annual/12;

let payment=P*r/(1-Math.pow(1+r,-n));

let balance=P;

let totalInterest=0;

let totalPrincipal=0;

let schedule="";

let month=0;

while(balance>0.01){

month++;

let interest=balance*r;

let principal=payment-interest+extraPay;

if(principal>balance){
principal=balance;
}

balance-=principal;

totalInterest+=interest;

totalPrincipal+=principal;

}

let monthlyReal=(payment+extraPay);

document.getElementById("monthly").innerHTML=money(monthlyReal);

document.getElementById("principal").innerHTML=money(P);

document.getElementById("interest").innerHTML=money(totalInterest);

document.getElementById("total").innerHTML=money(totalInterest+P);

document.getElementById("ratio").innerHTML=((totalInterest/P)*100).toFixed(2)+" %";



balance=P;

let html="";

let months=Math.ceil(month/12);

for(let y=1;y<=months;y++){

let principalYear=0;
let interestYear=0;

for(let m=1;m<=12;m++){

if(balance<=0) break;

let interest=balance*r;

let principal=payment-interest+extraPay;

if(principal>balance)
principal=balance;

balance-=principal;

principalYear+=principal;
interestYear+=interest;

}

html+=`
<div class="year">

<div class="row">
<b>Year ${y}</b>
<b>${money(balance)}</b>
</div>

<div class="green">
Principal Paid:
${money(principalYear)}
</div>

<div class="red">
Interest Paid:
${money(interestYear)}
</div>

</div>
`;

}

document.getElementById("schedule").innerHTML=html;

}

calculate();
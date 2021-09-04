function gst(){const Menu = document.getElementById("menu")
const A = Menu.value;
const amount = document.getElementById("amount")
const finalamount=document.querySelector(".amountwithgst")
var btn = document.querySelector('.calculate-btn');

const amount1 = amount + amount*0


const amount2 = amount + (amount*0.25)/100


const amount3 = amount + (amount*5)/100


const amount4 = amount + (amount*12)/100

const amount5 = amount + (amount*18)/100

const amount6 = amount + (amount*28)/100
if(A=="Grains,sanitary napkins , etc."){
    finalamount.innerHTML="Amount with gst for such goods is : " +amount1
}
if(A=="Cut and semi-polished stones"){
    finalamount.innerHTML="Amount with gst for such goods is : " +amount2
}
if(A=="sugar,spices,edible oil,etc."){
    finalamount.innerHTML="Amount with gst for such goods is : " +amount3
}
if(A=="Computer Monitor,Spectacles,etc."){
    finalamount.innerHTML="Amount with gst for such goods is : " +amount4
}
if(A=="Soaps,Hair oil,etc."){
    finalamount.innerHTML="Amount with gst for such goods is : " +amount5
}
if(A=="AC,Refrigerator,etc."){
    finalamount.innerHTML="Amount with gst for such goods is : " +amount6
}}

btn.addEventListener('click',gst);
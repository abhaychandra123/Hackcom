function sici(){
    
    const p = document.getElementById("principle").value;
    const r = document.getElementById("rate").value;
    const t = document.getElementById("time").value;
    const SI = (p*r*t)/100;
    const A = p*(1+r/100)**t;
    const CI = A-p;
    document.getElementById("num").innerHTML=`${SI}`;
    document.getElementById("num1").innerHTML=`${CI}`;
}
var n=prompt("reqemi daxil et");
if (99<n<1000){
var teklik=n%10;
console.log(teklik);
var onluq=(n-teklik)%100/10;
console.log(onluq);
var yuzluk=(n-n%100)%1000/100;
console.log(yuzluk);
if (teklik==onluq==yuzluk){
    console.log("reqemler eynidir");
}
else{
    console.log("reqemler eyni deyil");
}
}
else if(n>999){
    console.log("Zehmet olmasa 3 reqemli eded daxil edin");
}


alert();
var subject=prompt("simvol daxil et");
switch(subject){
    case "a":
        console.log("Azerbaycan dili secildi");
        break;
    case "r":
        console.log("Rus dili secildi");
        break;
    default: 
        console.log("Yalnis cavab");
        break;
}




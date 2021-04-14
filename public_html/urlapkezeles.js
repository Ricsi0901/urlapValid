window.addEventListener("load",init);
function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
    return document.querySelectorAll(nev);
}
function init(){
  ID("kuld").addEventListener("click",validalas);
    
}
function validalas(){
    console.log("validálás");
    var urlapAdat="";
    var hiba="";
    var filter=/[A-Z]+[a-z]{2,}/;
    var filter1=/[a-z]{1}+\@+[a-z]{3}+\.+[a-z]{2}/;
    if(!filter.test(ID("nev").value)){
        hiba+="A név nagybetűvel kezdődjön! <br> Legalább 3 karakter legyen!";
        ID("nev").style.border="3px solid red";
        
    }else{
        ID("nev").style.border="none";
        
        urlapAdat+="Név: "+ID("nev").value+"<br>";
    }
    if(!filter.test(ID("email").value)){
        hiba+="Az e-mail betűvel kezdődjön! <br> Legalább 1 karakter legyen!<br> Legyen benne @ és egy E-mail fajta,valamint a hozzá tartozó régió";
    }else{
        if(filter1.test(ID("email").value)===filter.test(ID("emailujra").value)){
            urlapAdat+="Email: "+ID("email").value+"<br>";
        }
        else{
            hiba+="Az e-mail nem egyezik";
        }
    }
console.log(hiba);
$("aside section:nth-child(1) p")[0].innerHTML=hiba;


$("aside section:nth-child(2) p")[0].innerHTML=urlapAdat;
}



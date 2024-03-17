function toChoose(play) {
let kullaniciSecim = play.id;
console.log(kullaniciSecim);
let randomNum = Math.floor(Math.random()*3);
let pcSecim = ["tas","kagit","makas"][randomNum];
console.log(pcSecim);

let playScor= {
    "tas" : {"makas":1,"tas" : 0.5,"kagit":0},
    "kagit" : {"tas":1,"kagit":0.5,"makas":0},
    "makas" : {"kagit":1,"makas":0.5,"tas":0}
};
let adminScor = playScor[kullaniciSecim][pcSecim];
console.log(adminScor);

let successScor = playScor[kullaniciSecim][pcSecim];
console.log(successScor);

let kayitliResimler ={
    "tas":document.getElementById("tas").src,
    "kagit" :document.getElementById("kagit").src,
    "makas":document.getElementById("makas").src
};

document.getElementById("tas").remove();
document.getElementById("kagit").remove();
document.getElementById("makas").remove();

let kullaniciResim = document.createElement("img");
let pcResim = document.createElement("img");
let resultMessage=document.createElement("div");

kullaniciResim.src=kayitliResimler[kullaniciSecim];
pcResim.src=kayitliResimler[pcSecim];

document.getElementById("container").appendChild(kullaniciResim);
document.getElementById("container").appendChild(resultMessage);
document.getElementById("container").appendChild(pcResim);

}


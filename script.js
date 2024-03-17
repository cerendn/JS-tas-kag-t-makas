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

}
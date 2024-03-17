function toChoose(play) {
let kullaniciSecim = play.id;
console.log(kullaniciSecim);
let randomNum = Math.floor(Math.random()*3);
let pcSecim = ["tas","kagit","makas"][randomNum];
console.log(pcSecim);

}
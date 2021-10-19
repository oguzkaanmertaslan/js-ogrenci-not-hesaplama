/***Java Script İle Vize ve Final Notunun Ortalması İle Geçme Kalma Durumunu Hesaplama */
//Kullanıcıdan gelen bilgiye göre aşağıdan gelen bilgiyi ekrana yazdırma

//AA 90-100
//BA 85-89
//BB 80-84
//CB 75-79
//CC 70-74
//DC 65-69
//DD 60-64
//FD 50-59
//FF 0-49

let vize = prompt("Lütfen Vize Notunuzu Giriniz: ")
let final= prompt("Lütfen Final Notunuzu Giriniz: ")
let notOrtalamasi=(vize*0.3)+(final*0.7)
console.log(notOrtalamasi)


let vizeN=document.querySelector("#vizeN")
vizeN.innerHTML=`${vizeN.innerHTML} <strong>${vize}</strong>`
let finalN=document.querySelector("#finalN")
finalN.innerHTML=`${finalN.innerHTML} <strong>${final}</strong>`
let ortalama=document.querySelector("#ortalama")

if (notOrtalamasi>=90) {
   ortalama.innerHTML=`${ortalama.innerHTML} : ${notOrtalamasi} 
   Harf Notunuz: AA ,
   Tebrikler Geçtiniz
   ` 
}
else if (notOrtalamasi>=85 && notOrtalamasi<=89) {
    ortalama.innerHTML=`${ortalama.innerHTML} : ${notOrtalamasi} 
    Harf Notunuz: BA ,
    Tebrikler Geçtiniz
    ` 
} 
else if (notOrtalamasi>=80 && notOrtalamasi<=84) {
    ortalama.innerHTML=`${ortalama.innerHTML} : ${notOrtalamasi} 
    Harf Notunuz: BB ,
    Tebrikler Geçtiniz
    ` 
} 
else if (notOrtalamasi>=75 && notOrtalamasi<=79) {
    ortalama.innerHTML=`${ortalama.innerHTML} : ${notOrtalamasi} 
    Harf Notunuz: CB ,
    Tebrikler Geçtiniz
    ` 
} 
else if (notOrtalamasi>=70 && notOrtalamasi<=74) {
    ortalama.innerHTML=`${ortalama.innerHTML} : ${notOrtalamasi} 
    Harf Notunuz: CC ,
    Tebrikler Geçtiniz
    ` 
} 
else if (notOrtalamasi>=65 && notOrtalamasi<=69) {
    ortalama.innerHTML=`${ortalama.innerHTML} : ${notOrtalamasi} 
    Harf Notunuz: DC ,
    Tebrikler Geçtiniz
    ` 
} 
else if (notOrtalamasi>=60 && notOrtalamasi<=64) {
    ortalama.innerHTML=`${ortalama.innerHTML} : ${notOrtalamasi} 
    Harf Notunuz: DD ,
    Tebrikler Geçtiniz
    ` 
} 
else if (notOrtalamasi>=50 && notOrtalamasi<=59) {
    ortalama.innerHTML=`${ortalama.innerHTML} : ${notOrtalamasi} 
    Harf Notunuz: FD ,
    Tebrikler Geçtiniz
    ` 
} 
else if (notOrtalamasi>=0 && notOrtalamasi<=49) {
    ortalama.classList.add('text-danger')
    ortalama.style.color="red"
    ortalama.innerHTML=`${ortalama.innerHTML} : ${notOrtalamasi} 
    Harf Notunuz: FF ,
    KALDINIZ :(
    ` 
} 
// ****JAVASCRIPT DEGISKENLER****
//const degiskenAdi = "Javascript";
//console.log(degiskenAdi, "gayet kullanisli bir dildir");
//const sayi = 45;
//Const ve Let EcmaScript6 (ES6) ile gelen özelliklerdir. VAR eski versiyonlardan beri bulunmaktadır
//console.log(sayi + 52);
// *****GLOBAL VE LOKAL KULLANIMI*******
//? Global Scope: Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen scope tipidir.
//? Kodu yamaya bağladığımızda global scope yazarız.SAdece tek global scope var.
const global = "bu bir global degiskendir";
//?Local Scope : bir blok ici (fonksiyon,if blogu gibi alanlar)
{
  const local = "bu bir lokal degiskendir";
  console.log(global);
  console.log(local);
}
console.clear();
//console.log(global);
//console.log(local);
// VAR KULLANIMI
//var text = "bu bir var ile tanimlanma degiskenidir";
//console.clear();
//const number = 200;
//farkli bir deger atamaya calisirsak hata verir
//number = 400;
const pi = 3.14;
console.log(pi);

//let kullanimi
let KisiSayisi = 300;
KisiSayisi = 300 + 5;
console.log("binadaki kisi sayisi:", KisiSayisi);
{
  let ad = "gülsen";
  let okulNo = 29;
  console.log(ad);
  console.log(okulNo);
  console.log(pi);
}
{
  let ad = "rabia";
  console.log(ad);
}
console.clear();

//************ DEGISKEN TÜRLERI*********

// Number
let toplam = 5.1;
//toplam = 10 + 10;
console.log(typeof toplam);
console.log(toplam + 10);
//STRING
let str = "10.eleman";
console.log(str + "cok basarili oldu"); //!contanat -strin birlestirme
//Boolean
let kontrol = false;
console.log(kontrol);
console.log(typeof kontrol);

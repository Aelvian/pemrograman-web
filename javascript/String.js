//1. contoh escaping (\' , \" , \n, \r, \t , \b, \f)
let Data1 = 'Binnas Berkata \"cantik Banget hutao gw"';
console.log(Data1);

let Data2 = "Husein pun Berkata \" Aduhh binn-binn\"";
console.log(Data2);

let Data3 = "Putra Pun \tBerkata \" Udah gila ni orang\" ";
console.log( Data3);

let data4 = "gw pun berkata \nyasudahlah"
console.log( data4);

let data5 = "hari hari pun berlanjut seperti biasa\r dan akhirnya";
console.log( data5);

let data6 = "ketiga orang itu pun bertemu di sebuah, \b taman";
console.log( data6);

let data7 = "mereka semua pun berkumpul\f untuk bercerita";
console.log( data7);

//literal String

let namaDepan = "Binnas";
let namaBelakang = "Malandri"
let umur = 16;
let biodata = `${namaDepan}  ${namaBelakang} dengan umur ${umur}`;

console.log( biodata);
console.log(typeof biodata);


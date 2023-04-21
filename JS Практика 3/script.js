//1
function sumArray(arr) {
  var s = 0;
  arr.forEach(function(item, i, arr) {
    s+=item;
  });
  document.write(s);
  document.write('<br>');
}
sumArray([4, 6, 16, 73, 5]);

//2 
function getAboveZero(arr){
  var newArr = arr.filter(function(number) {
    return number > 0;
  });
  document.write(newArr);
  document.write("<br>");
}
getAboveZero([1, -3, -2, 4, 10]);

//3
function getPonies(arr, name){
  var str = arr.filter(function(word) {
    return word == name;
  });
  if(str == name){
    document.write(str);
    document.write("<br>");
  }else{
    document.write('false');
    document.write("<br>");
  }
}
getPonies(['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'],'AppleJack')

//4
function isTxIncluded(arr, name){
  var t = 0, str;
  arr.forEach(function(item, i, arr) {
    if(item == name){
      t = 1;
      str = item;
    }
  });
  if(t == 1){
    document.write('true');
    document.write("<br>");
  }else{
    document.write('false');
    document.write("<br>");
  }
}
isTxIncluded(['0xaea0', '0x8f80', '0xf3ad', '0x17ec'], '0x9e0a')

//8
function getEpisodes(arr) {
  document.write("Аниме " + arr.title + " включает " + arr.episodes + " серий");
  document.write("<br>");
}
const anime = {
  title: "JoJo",
  episodes: 190
}
getEpisodes(anime)

//9
const triple = (arr) => {
  document.write(arr*3)
  document.write("<br>");
}
triple(2)

//10
const getAvgGlucose = (arr) => {
  var s = 0, n = 0;
  arr.forEach(function(item, i, arr) {
    s+=item;
    n++;
  });
  document.write(s/n)
  document.write("<br>");
}
getAvgGlucose([5.4, 8.1, 6.3, 4.9])
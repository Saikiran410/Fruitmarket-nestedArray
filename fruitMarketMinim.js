//Release-0
//Creating Variable
var fruits =["Apple","Banana","Mango","Papaya","Orange","Lemon",
         "GrapeFruit","PineApple","Avocado","Watermelon","Pomelo","Kiwi",
       "DragonFruit","Rambutan","Lychee","Pears","Starfruit","Grapes",
     "Sugarcane","Cranberries","Strawberries","Cherries","Blueberries",
    "WhitePeach","Ackee","Apricot","Longan","Coconut","Nance","Guava"];

var numberOfFruits = fruits.length ;//Lenth returns total number
console.log(numberOfFruits);
//document.write("Number Of Fruits in Array are =" +numberOfFruits);
//Release-1
var ramFruits =["Apple","Banana","Mango","Papaya","Orange","Lemon",
                "GrapeFruit","PineApple","Avocado","watermelon"];
var mohanFruits =["Pomelo","Kiwi","DragonFruit","Rambutan","Lychee",
                  "Pears","Starfruit","Grapes","Sugarcane",
                  "Cranberries"];
var royFruits =["Strawberries","Cherries","Blueberries",
                "WhitePeach","Ackee","Apricot","Longan","Coconut","Nance",
                "Guava"];
 //concatinating all Arrays into one
 var allFruits= [].concat(ramFruits,mohanFruits,royFruits);
 console.log(allFruits); 
 //OR Spread ..all arrays into one
 //var allFruits1 = [...ramFruits, ...mohanFruits,...royFruits];
 //console.log(allFruits1);

 //Release -2
 
 var myStringArray = ["Apple","Banana","Mango","Papaya","Orange","Lemon",
                     "GrapeFruit","PineApple","Avocado","Watermelon","Pomelo","Kiwi",
                     "DragonFruit","Rambutan","Lychee","Pears","Starfruit","Grapes",
                     "Sugarcane","Cranberries","Strawberries","Cherries","Blueberries",
                     "WhitePeach","Ackee","Apricot","Longan","Coconut","Nance","Guava"];

var arrayLength = myStringArray.length;
//looping through Array
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
}
//OR Array Prototype foreach
/*myStringArray.forEach(function (item, index) {
    console.log(item, index);
  }); */

  var myFruitsString = myStringArray.join();
  console.log(myFruitsString);

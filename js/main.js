// 1

// (function () {
//   var num = prompt("Enter a number", "");
//   console.log(num);
// })();

// 2

// (function () {
//   var num = Number(prompt("Enter a number", ""));
//   if (num % 3 === 0 && num % 4 === 0) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// })();

// 3

// (function () {
//   var num1 = Number(prompt("Enter number 1", ""));
//   var num2 = Number(prompt("Enter number 2", ""));
//   if (num1 > num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// })();

// 4

// (function () {
//   var num = Number(prompt("Enter a number", ""));
//   if (num > 0) {
//     console.log("Positive");
//   } else {
//     console.log("Negative");
//   }
// })();

// 5

// (function () {
//   var num1 = Number(prompt("Enter a number 1", ""));
//   var num2 = Number(prompt("Enter a number 2", ""));
//   var num3 = Number(prompt("Enter a number 3", ""));

//   if (num1 > num2 && num1 > num3) {
//     console.log("max element = " + num1);
//   } else if (num2 > num1 && num2 > num3) {
//     console.log("max element = " + num2);
//   } else {
//     console.log("max element = " + num3);
//   }
//   if (num1 < num2 && num1 < num3) {
//     console.log("min element = " + num1);
//   } else if (num2 < num1 && num2 < num3) {
//     console.log("min element = " + num2);
//   } else {
//     console.log("min element = " + num3);
//   }
// })();

// 6

// (function () {
//   var num = Number(prompt("Enter a number", ""));
//   if (num % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// })();

// 7

// (function () {
//   let char = prompt("Enter a character", "");
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "o" ||
//     char === "i" ||
//     char === "u"
//   ) {
//     console.log("vowel");
//   } else {
//     console.log("consonant");
//   }
// })();

// 8
// (function () {
//   var num = Number(prompt("Enter a number", ""));
//   for (var i = 1; i <= num; i++) {
//     console.log(i);
//   }
// })();

// 9

// (function () {
//   var num = Number(prompt("Enter a number", ""));
//   for (var i = 2; i <= 12; i++) {
//     console.log(num * i);
//   }
// })();

// 10

// (function () {
//   var num = Number(prompt("Enter a number", ""));
//   for (var i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// })();

// 11
// (function () {
//   var num1 = Number(prompt("Enter a number 1", ""));
//   var num2 = Number(prompt("Enter a number 2", ""));
//   var res = 1;
//   for (var i = 1; i <= num2; i++) {
//     res *= num1;
//   }

//   console.log(res);
// })();

// 12
// (function () {
//   var num1 = Number(prompt("Enter the subject mark 1", ""));
//   var num2 = Number(prompt("Enter the subject mark 2", ""));
//   var num3 = Number(prompt("Enter the subject mark 3", ""));
//   var num4 = Number(prompt("Enter the subject mark 4", ""));
//   var num5 = Number(prompt("Enter the subject mark 5", ""));

//   var total = num1 + num2 + num3 + num4 + num5;
//   var average = total / 5;
//   var percent = (total / 500) * 100;
//   console.log("total = " + total);
//   console.log("average = " + average);
//   console.log("percent = " + percent + "%");
// })();

// 13
// (function () {
//   var num = Number(prompt("Enter the month number", ""));
//   switch (num) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       console.log("Days in month: " + 31);
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       console.log("Days in month: " + 30);
//       break;
//     default:
//       console.log("Days in month: " + 28);
//   }
// })();

// 14

// (function () {
//   var char = prompt("Enter a character", "");
//   switch (char) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       console.log("Vowel");
//       break;
//     default:
//       console.log("constant");
//   }
// })();

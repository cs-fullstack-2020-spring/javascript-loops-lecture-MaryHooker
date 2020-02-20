// // ### Exercise 1:
// // Use a for loop to print 25 astericks (*).
//**********
// //Create a variable with an empty string*
// let aster_str= "";
// //Create a loop that that will continue 25 times/starting at 0/ and adding one after each loop*
// for(let i = 0;i < 25; i++)
// {
//     aster_str= aster_str + "*";//concatenate another asterisk to the string variable*
//     console.log(`The current interation is ${i}`);
//     console.log(`The current string is ${aster_str}`);
// }
// //When we exit the loop, print out the string variable value we built inside of the loop
// console.log(aster_str);
// //***********
// //HOW IT SHOULD LOOK IN CONSOLE*
// The current interation is 0
// The current string is ;*
// The current interation is 1
// The current string is ;**
// The current interation is 2
// The current string is ;***
// The current interation is 3
// The current string is ;****
// The current interation is 4
// The current string is ;*****
// The current interation is 5
// The current string is ;******
//****************************************************
// //Want it to count to 10 in the console
// for (let kount = 1; kount < 11; kount++)
// {
//     console.log(kount);
// }
// // //How it should look in console
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10
//*****************************************************

// // ### Exercise 2:
// // Use a for loop to print numbers -10 to 5.
//*************
// for(let list=-10; list<6;list++){
//     console.log(list)
// }

// // //What it will look like in console
// // -10
// // -9
// // -8
// // -7
// // -6
// // -5
// // -4
// // -3
// // -2
// // -1
// // 0
// // 1
// // 2
// // 3
// // 4
// // 5
//******************************************************

// // ### Exercise 3:
// // Use a for loop to print every 4 numbers from -50 to 50.
// //*********** 
// for (everyFour= -50; everyFour <=50; everyFour=everyFour + 4){
//     console.log(everyFour)
// }

// // //Should look like this in the console
// // -50
// // -46
// // -42
// // -38
// // -34
// // -30
// // -26
// // -22
// // -18
// // -14
// // -10
// // AND SO ON
//******************************************************
// // ### Exercise 4:
// // Use a for loop to print 0 to 5. When you get to the number 2, print "TWO". When you get to the number 4, print "FOUR".
// //******** 
// for(crap=0;crap<=5;crap++)
// {
//     if(crap==2)//if crap equals 2 print the words TWO
//     {
//         console.log('TWO')
//     }
//     else if(crap==4)//if crap equals 4 print the words FOUR
//     {
//         console.log('Four')
//     } else
//     {
        
//      console.log(crap)
//     }
// }
//***********
// //SHOULD LOOK LIKE THIS IN CONSOLE
// 0
// 1
// TWO
// 3
// FOUR
// 5
//*******************************************************
// // ### Exercise 5:
// // Prompt the user to enter a number.

// let userNumber=parseInt(prompt("Please enter a number:"));
// //Create a for loop that will count from 0 to the number they entered.
// for(let crap=0;crap<=userNumber;crap++)
// {
//     console.log(crap)
// }
//******************************************************

// //START WITH AN ARRAY
// let names = ['bob','alfred','albert','bean'];
// //use a loop to print out the names in the array above
// for(let i=0;i<names.length;i++)
// {
//     console.log(names[i]);
// }
// // //SHOULD LOOK LIKE THIS IN THE CONSOLE
// // bob
// // alfred
// // albert
// // bean
//****
// //HOW TO DO THE SAME THING FROM ABOVE EXCEPT BACKWARDS
// let names = ['bob','alfred','albert','bean']
// for(let i=names.length-1;i>=0;i--)
// {
//     console.log(names[i])
// }
// // //SHOULD LOOK LIKE THIS IN CONSOLE
// // bean
// // albert
// // alfred
// // bob
//******************************************************
// //HOW TO PRINT ONLY EVEN NUMBERS FROM 0-100
// for(let numbers=1;numbers<=100;numbers++){
    
//     if(numbers % 2==0){
//         console.log(numbers);
//     }
// }
// //OR******

//     for (let numbers = 0; numbers <= 100; numbers=numbers+2){
//         console.log(numbers)
//     }
//*****************************************************
//HOW TO COUNT DOWN FROM 100 TO 0 BY 2 USING *FOR*

// for(let kount=100;kount>=0;kount=kount-2){
//     console.log(kount)
// }

// //OR

//  for(let kount=100;kount>=0;kount--){
//      if(kount%2==0){
//          console.log(kount)
//      }
//  }
//******************************************************
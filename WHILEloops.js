// //WHILE LOOPS
// //********
// //while (condition) {
//   // code
//   // so-called "loop body"
// // }
// //********
// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }
//*************************************************
// // Exercise A:
// // Write a While loop that counts down from 10 to 0. Once the counter reaches 0 log LIFTOFF!!! to the console

// let countdown = 10;

// while(countdown >= 0)
// {
//     console.log(countdown);
//     countdown--;
// }
// console.log('LIFTOFF!!')

// //*************
// //SHOULD LOOK LIKE THIS IN CONSOLE
// //10
// //9
// //8
// //7
// //6
// //5
// //4
// //3
// //2
// //1
// //LIFTOFF!!
//***************************************************
// // ### Exercise C:
// // Create a hardcoded/fixed password. Create a do-while loop that will ask the user to enter the correct password until it matches the hardcoded password. Once they match alert the user ```THAT’S CORRECT!!!``

// let pwd='password';
// let user_pwd='';

// while(user_pwd != pwd)
// {
//     user_pwd = prompt("Enter password:");
// }
// console.log("That's CORRECT!!!")
//*****************************************************
// //HOW TO COUNT DOWN FROM 100 TO 0 BY 2 USING *WHILE*

// let countdown=100
// while(countdown>=0){
//         console.log(countdown);
//         countdown=countdown-2
//     }

// //OR

// let countdown=100
// while(countdown>=0){
//     if(countdown%2==0)
//     {
//         console.log(countdown)
//     }
//     countdown--;
// }
//******************************************************
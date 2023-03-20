
// Use of strict Mode 

// 'use strict';
// let hasDriversLinces = false;
// const passTest = true;

// if(passTest) hasDriversLinces=true;
// if(hasDriversLinces) console.log('I can Drive');

// const interface = 'hello';

// const private = 'World';


// Function 
// -----------

// function f1(){
//     console.log('f1 function Called')
// }
// f1();
// f1();
// f1();


// function juiceProcessor(apple,orange){
//     console.log(apple,orange);
//     let juice = `Juice container ${apple} Number of Apple and ${orange} Number of Orange`;
//     return juice;
// }
// let appleJuice = juiceProcessor(23,45);
// console.log(appleJuice);


// Function Declaration and Function Expresion 
// ----------------------------------------------


// Function Declaration 
// -----------------------
// function calcAge1(birthYear){
//     return 2022 - birthYear;
// }

// const age1 = calcAge1(1997);
// console.log(age1);


// const calcAge2 = function(birthYear){
//     return 2022 - birthYear;
// }
// let age2 = calcAge2(2000);

// console.log(age2);


// Arrow Function 

// const calcAge = (birthyear) =>{
//     return 2022 - birthyear;
// }

// const age = calcAge(1997);
// console.log(age);


// const yearsRemaining = (birthYear,fname) =>{
//     const age = 2022 - birthYear;
//     const retirement = 60 - age;
//     return `${fname} retires after ${retirement} years`;
// }

// console.log(yearsRemaining(1980,'Astasambhu'));
// console.log(yearsRemaining(1990,'Mohanty'));



// Functions Calling Other Functions 
// ---------------------------------

// function cutPieces (fruit){
//     return fruit * 4;
// }

// const fruitprocessor = function (apple,orage){
//     let applePieces = cutPieces(apple);
//     let orangePieces = cutPieces(orage);
//     const juice = ` Juice with ${applePieces} Apple Pieces and ${orangePieces} Orange Pieces`;
//     return juice;
// }

// console.log(fruitprocessor(2,3));


// Function Reviewing 
// ------------------


// const calcAge = function (birthYear){
//     return 2022 - birthYear;
// }

// const yearsRemaining = (birthYear,fname) =>{
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement>=0){
//         return `${fname} retires after ${retirement} years`;
//     }
//     else{
//         return 'Record Deleted';
//     }
// }

// console.log(yearsRemaining(1990,'Astasambhu'));


// Coding Challange #3
// ------------------------------------


/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), 
and then logs the winner to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

*/


// let calcAverage = (a,b,c) => {
//     return Math.round((a+b+c)/3);
// }
// console.log(calcAverage(2,3,4));


// let scoreDolhins = calcAverage(85,54,41);
// let scoreKoalas = calcAverage(23,34,27);
// console.log(scoreDolhins,scoreKoalas);

// const checkWinner = (avgDolhins,avgKoalas) => {

//     if(avgDolhins >= 2 * avgKoalas){
//         console.log(`Dolphins Wins (${avgDolhins}) VS (${avgKoalas})`);
//     }
//     else if(avgKoalas >= 2 * avgDolhins){
//         console.log(`Koalas wind (${avgDolhins}) VS (${avgKoalas})`);
//     }
//     else{
//         console.log(`Draw the match`)
//     }
// }
// checkWinner(scoreDolhins,scoreKoalas);

// scoreDolhins = calcAverage(44,23,21);
// scoreKoalas = calcAverage(90,80,75);
// console.log(scoreDolhins,scoreKoalas)
// checkWinner(scoreDolhins,scoreKoalas);


// checkWinner(112,226);




// 39-INTRODUCTION TO ARRAY 
// ------------------------------

// let years = [1991,1992,1993,1994,1995];
// console.log(years,years[2],years.length);
// console.log(years[years.length-1]);
// console.log(years);
// years[2]=190000;
// console.log(years);

// years = [1,2,3,4];

// console.log('-----------------------------');

// const fname = 'Astasambhu';
// const listName = ['I am',fname,'Mohanty',25,'Years Old'];
// console.log(listName);
// let abc = '';
// let allString = listName.map((ele)=>{
//     return  abc += ` ${ele}`;
// });
// console.log(abc);


// 40 Basic Array Operation 

// const friends = ['ram','dam','sam'];
// const newLength = friends.push('jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Arjun');
// console.log(friends);

// friends.pop();
// console.log(friends);

// let names = ['Astasambhu','Mohanty','chiku'];
// console.log(names.includes('Chiku'));
// names.push(23);
// console.log(names.includes(23));

// Coding Challage #2 
// ------------------

// const calcTip = (bill)=>{
//     return bill >= 50 && bill <=300 ?  Math.round(bill * 0.15) : Math.round(bill * 0.20);
// }

// const bills = [125,555,44];

// const tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log(`Tips = ${tip}, bills = ${bills}`);

// const total = [bills[0] + tip[0], bills[1] + bills[1], bills[2] + bills[2]];
// console.log(total);


// Introduction to Object 
// ----------------------
// const details = {
//     f_name :'Astasambhu',
//     a_name : 'Mohanty',
//     age : 2022 - 1997,
//     job : 'Developer',
//     friends : ['Ram','Sam','Dam']
// };
// console.log(details,details.a_name);
// console.log(details['age'],details['f_name']);

// let nameKey = 'name';
// console.log(details['f_' + nameKey]);
// console.log(details['a_' + nameKey]);

// const interestedIn =  prompt('Select one of the details like f_name, a_name, age , job , friemds ');
// console.log(details[interestedIn]);
// console.log(interestedIn);


// details.location = 'Odisha';
// console.log(details);
// console.log(`${details.f_name} has ${details.friends.length} friends and his best-friend is ${details.friends[0]}`);


// Filter 

// let ages = [10,12,19,20];

// let b = ages.filter(cheackAdult);

// console.log(b);

// function cheackAdult(age){
//     return age>18;
// }




// var obj = {
//     'Students': [{
//             "name": "Raj",
//              "Age":15,
//             "RollNumber": "123",
//             "Marks": "99",
              
//         }, {
//             "name": "Aman",
//              "Age":14,
//             "RollNumber": "223",
//             "Marks": "69",
//            },
//            {
//             "name": "Vivek",
//              "Age":"13",
//             "RollNumber": "253",
//             "Marks": "89",
//            },
//         ]
// };

// let newArray = obj.Students.filter(ele=>{
//   return ele.name === 'Vivek' || ele.name==='Aman' || ele.Marks === '99';
// })
// console.log(newArray);



// let array = [
//     { id: 3 },
//     { id: -1 },
//     { id: 0 },
//     { id: 15 },
//     { id: 12.2 },
//     { },
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
//   ]
//   let countInvalidEntries = 0
//   function filterById(obj){
//     if(Number.isFinite(obj.id) && obj.id !== 0 && obj.id >=0){
//       return true;
//     }
//   }
  
//   let arrayById = array.filter(filterById);
//   console.log(arrayById);


// Filter even Number in an Array 

// let numbers = [20,23,98,95,77,45,44,90,8,7,5,12];

// function cheackEven(num){
//     if(num % 2 !== 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let evenNumbers = numbers.filter(cheackEven);
// console.log(evenNumbers)



// const details = {
//     f_name :'Astasambhu',
//     l_name : 'Mohanty',
//     birthYear : 1997,
//     job : 'Developer',
//     friends : ['Ram','Sam','Dam'],
//     hasDriverLinces : true,
    

//     calcAge : function(){
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary : function(){
//         return `${this.f_name} is a ${this.calcAge()} old ${this.job} has  ${this.hasDriverLinces ? 'Driver linces':'No driver linces'}`
//     }

    
// };
// console.log(details.calcAge());
// console.log(details['calcAge'](details.birthYear));
// console.log(details.calcAge());
// console.log(details.age);
// console.log(details.getSummary())

// Chalange 
// Astasambhu is a 25 years old Developer
// console.log(`${details.f_name} is a ${details.calcAge()} old ${details.job}`);


// Coding Challenge #3
// --------------------

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)


// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"


// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.

// const mark = {
//     fullName : 'Mark Miller',
//     mass : 78,
//     height : 1.69,
//     calcBMI : function(){
//         this.bmi = Math.round(this.mass / this.height ** 2);
//         this.bmi;
//     }
// }


// const john = {
//     fullName : 'John Miller',
//     mass : 92,
//     height : 1.95,
//     calcBMI : function(){
//         this.bmi = Math.round(this.mass / this.height ** 2);
//         this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi,john.bmi);

// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s MBI (${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`)
// }else if(john.bmi > mark.bmi){
//     console.log(`${john.fullName}'s MBI (${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`)
// }


// Iteration : The for Loop 
// ------------------------
// for(let rep=1;rep<10;rep++){
//     console.log(`Repeat ${rep} statement `);
// };

// Looping array , breaking and continue
//======================================
// const detailsArray = [
//     'Astasambhu',
//     'Mohanty',
//     2023-1997,
//     'Developer',
//     ['Ram','Sam','Dam'],
//     false
// ];
// const types = [];
// console.log(detailsArray.length);
// for(let i=0;i<detailsArray.length;i++){
//     console.log(detailsArray[i],typeof detailsArray[i]);

//     // Filling types Array 
//     // types[i]= typeof detailsArray[i];
//     types.push(typeof detailsArray[i]);
// }
// console.log(types);

// const years = [1991,1997,2000,2002,1985];
// const ages = [];
// const currentYear = 2023;
// for(let i=0;i<years.length;i++){
//     ages.push(currentYear-years[i]);
// }
// console.log(ages);



// Continue and Break

// const detailsArray = [
//     'Astasambhu',
//     'Mohanty',
//     2023-1997,
//     1234566,
//     'Developer',
//     ['Ram','Sam','Dam'],
//     false
// ];

// for(let i=0;i<detailsArray.length;i++){
//     if(typeof detailsArray[i] !== 'number'){
//         continue;
//     }
//     console.log(detailsArray[i]);
// }

// for(let i=0;i<detailsArray.length;i++){
//     if(typeof detailsArray[i] === 'number'){
//         break;
//     }
//     console.log(detailsArray[i]);
// }


// Looping backwards and loops in loops
// ------------------------------------
  
// const detailsArray = [
//     'Astasambhu',
//     'Mohanty',
//     2023-1997,
//     'Developer',
//     ['Ram','Sam','Dam'],
// ];

// for(let i=detailsArray.length-1;i>=0;i--){
//     console.log(i,detailsArray[i],typeof detailsArray[i]);
// }

// for(let exercise =1;exercise<=3;exercise++){
//     console.log(`--------Starting Exercise ${exercise}`);
    
//     for(let rep=1;rep<=5;rep++){
//         console.log(`Exercise ${exercise}-Lifting weight repetation ${rep}`);
//     }
// }


// while Loop 
// ---------

// let rep =1;
// while(rep<=10){
//     console.log(`Exercise repetation ${rep}`);
//     rep++;
// }

// let rep =10;
// while(rep>=1){
//     console.log(`Exercise repetation ${rep}`);
//     rep--;
// }


// let dice = Math.trunc(Math.random()*6)+1;
// console.log(dice);
// while(dice !== 6){
//     console.log(`You rolled dice Number ${dice}`);
//     dice = Math.trunc(Math.random()*6)+1;
// }



// Coding Challange #4
// -------------------

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill) {
    return bill>=50 && bill<=300 ? Math.round(bill*0.15) : Math.round(bill * 0.20);
}


for(let i=0; i<bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills,tips,totals);

const calcAverage = function(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage([2,6,4]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

  














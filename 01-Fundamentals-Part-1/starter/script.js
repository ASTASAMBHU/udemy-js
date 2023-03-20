// var js ="Hello";
// if(js==="Hello"){
//     alert("Browser is Ready");
//     console.log(10+20+40);
//     console.log("print in Console");
// }


// Variables and Values Assignment 
// -----------------------------------

// var country = "India";
// var continent = "Asia";
// var population = 12344556677;
// console.log(country);
// console.log(continent);
// console.log(population);


// typeof operator  
//------------------
// console.log(typeof 12);
// console.log(typeof('ujjdjjd'));
// console.log(typeof(12));
// console.log(typeof 'ujjdjjd');
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);

// Dynamicaly Typing 
// --------------------
// let fname = true;
// console.log(typeof fname);

// fname = 'Astasambhu';
// console.log(typeof fname);


// Undefined 
//---_---------
// let notDefined;
// console.log(notDefined);
// console.log(typeof notDefined);
// notDefined = 1997;
// console.log(notDefined);
// console.log(typeof notDefined);


// Let , Const , Var 
//------------------

// let age= 30;
// age = 60;
// console.log(age);

// const age = 1990;
// console.log(age);
// age = 1991;

// var j;
// console.log(j);
// j=123;
// console.log(j);


// Assignment 
//--------------



// Operators 
//------------------

// const now = 2022;
// const ageAstasambhu = now - 1997;
// console.log(ageAstasambhu);

// const ageMohanty = now - 2001;
// console.log(ageMohanty,ageAstasambhu);

// let x= 10 + 5;
// console.log(x);
// x+=10;
// x++;
// console.log(x);
// x--;
// console.log(x);
// --x;
// ++x;
// console.log(x);


// const now = 2037;
// const nowAstasambhu = now - 1990;
// const nowMohanty = now - 1980;

// console.log(now - 1990 > now - 1980);



// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.


// Test data:
// -------------
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall.


// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = Math.round(weightMark/heightMark ** 2);
// const bmiJohn = Math.round(weightJohn/heightJohn ** 2);

// let markHigherBMI = bmiMark > bmiJohn;
// console.log(bmiMark,bmiJohn,markHigherBMI);


// String and template literals 

// const fname = 'Astasambhu';
// const job = 'Developer';
// const now = 2022;
// const dob = 1997;

// const ast = `I'm ${fname} a ${job} having age ${now - dob}`;
// console.log(ast);


// If / else statement 

// const age = 11;
// if(age>18){
//     console.log('You have driving linces');
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`You can apply driving after ${yearsLeft} years`)
// }


// const birthYear = 20002;
// let century;
// if(birthYear >= 2000){
//     century=21;
// }else{
//     century=20;
// }
// console.log(century);


// Coding Challenge #2
// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = Math.round(weightMark/heightMark ** 2);
// const bmiJohn = Math.round(weightJohn/heightJohn ** 2);

// if(bmiMark > bmiJohn){
//     console.log(`Marks BMI (${bmiMark}) is higher than John (${bmiJohn})`);
// }else{
//     console.log(`Johns BMI (${bmiJohn}) is higher than Marks! (${bmiMark})`);
// }


// Type Conversion and Type Coercion 
// -------------------------------------


// let bYear = '1997';
// console.log(bYear,Number(bYear));
// console.log(typeof bYear);
// console.log(Number('Astasambhu'));


// Type Coercion 
// -----------------

// let x = +'838387';
// console.log(x,typeof x);

// let y = '84844747';
// console.log(y,typeof y);


// console.log(' I am ' + 25 + ' year old ');
// console.log('12' - 2 - '5');


// let n = 1 + '1';
// console.log(n);
// n = n - 1;
// console.log(n);

// console.log(2+3+4+'5');





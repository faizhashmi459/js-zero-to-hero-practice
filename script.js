'use strict';

// function logger() {
//     console.log('My name is Faiz');
// }

// // Calling / Running / Invoking Function

// logger();
// logger();
// logger();

// function getFruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
//     return juice;
// }
// const mayTotalJuice = getFruitProcessor(6, 7);
// getFruitProcessor(5, 0);
// console.log(mayTotalJuice + 'this is the total juice sold in May');

// const appleOrangeJuice = getFruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const pakistanData = describeCountry('Pakistan', 220, 'Islamabad');
// const AfghanistanData = describeCountry('Afghanistan', 40, 'Kabul');
// const GermanyData = describeCountry('Germany', 100, 'Berlin');
// console.log(pakistanData)
// console.log(AfghanistanData);
// console.log(GermanyData);


// // Function Declaration
// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge(1991);
// // console.log(age1);


// //Function Expresison
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);



// function percentageOfWorld1(population) {
//     return (population / 7900 * 100)
// }
// const pakistanPopulation = percentageOfWorld1(220);
// const chinaPopulation = percentageOfWorld1(120);
// const russiaPopulation = percentageOfWorld1(1441);
// console.log(pakistanPopulation, chinaPopulation, russiaPopulation);

// const percentageOfWorld2 = function (population) {
//     return (population / 7900 * 100)
// }
// const pakistanPopulation1 = percentageOfWorld2(220);
// const chinaPopulation1 = percentageOfWorld2(120);
// const russiaPopulation1 = percentageOfWorld2(1441);
// console.log(pakistanPopulation1, chinaPopulation1, russiaPopulation1);



// // Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));



// const percentageOfWorld3 = population => population / 7900 * 100;
// const pakistanPopulation3 = percentageOfWorld3(220);
// const chinaPopulation3 = percentageOfWorld3(120);
// const russiaPopulation3 = percentageOfWorld3(220);
// console.log(pakistanPopulation3, chinaPopulation3, pakistanPopulation3);



// // Function Calling Other Functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges  .`
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


// // const percentageOfWorld1 = function(population){
// //     return (population / 7900 * 100);
// // }


// const describePopulation = function (country, population) {

//     const percentageOfWorld23 = percentageOfWorld1(population)
//     return `${country} has ${population} million people, which is about ${percentageOfWorld23}% of the world.`
// }
// console.log(describePopulation('Pakistan', 220));


// const calcAge1 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement1 = function (birthYear1, firstName1) {
//     const age = calcAge1(birthYear1);
//     const retirement1 = 65 - age;

//     if (retirement1 > 0) {
//         return retirement1;
//     } else {
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement1(1991, 'Jonas'));
// console.log(yearsUntilRetirement1(1950, 'Mike'));





// // Coding Challenge # 01 


// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgDolphins === avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team Wins...');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);


// const scoreDolphins1 = calcAverage(85, 54, 41);
// const scoreKoalas1 = calcAverage(23, 34, 27);
// console.log(scoreDolphins1, scoreKoalas1);

// const checkWinner1 = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgDolphins === avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team Wins...');
//     }
// }
// checkWinner1(scoreDolphins1, scoreKoalas1);



// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']''

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge01 = function (birthyear1) {
//     return 2037 - birthyear1;
// }
// const years1 = [1990, 1967, 2002, 2010, 2018];

// const age01 = calcAge01(years1[0]);
// const age02 = calcAge01(years1[1]);
// const age03 = calcAge01(years1[years1.length - 1]);
// console.log(age01, age02, age03);

// const ages = [calcAge01(years1[0]), calcAge01(years1[1]), calcAge01(years1[years1.length - 1])];
// console.log(ages);


// const friends01 = ['Michael', 'Steven', 'Peter'];

// // Add Elements
// const newLength = friends01.push('Faiz'); // Add Element at End
// console.log(friends01);
// console.log(newLength);

// friends01.unshift('Faizy Jee');  // Add Element at Start
// console.log(friends01);

// //Remove Elements
// const popped = friends01.pop();  //Remove Last Element
// console.log(popped);
// console.log(friends01);


// friends01.shift();   // Remove First Element
// console.log(friends01);

// console.log(friends01.indexOf('Peter'));
// console.log(friends01.indexOf('Bob'));

// friends01.push(23);
// console.log(friends01.includes('Peter'));
// console.log(friends01.includes('Bob'));
// console.log(friends01.includes('23')); // False because of Strict
// console.log(friends01.includes(23));

// if (friends01.includes('Peter')) {
//     console.log('You have a friend called Peter');
// }


// const populations = [10, 1441, 332, 83];
// console.log(populations);
// console.log(populations.length === 4);

// const percentage = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3]),
// ]
// console.log(percentage);

// const neighbours = ['Iran', 'India', 'Afghanistan', 'China'];
// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (neighbours.includes('Germany')) {
//     console.log('Probably not a central European country');
// }

// neighbours[1] = 'Kashmir';
// console.log(neighbours);
// console.log(neighbours.indexOf('Kashmir'));

// neighbours[neighbours.indexOf('Kashmir')] = 'Republic of Kashmir';
// console.log(neighbours);


// const calcTip = function (bills) {
//     return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20;
// }

// console.log(calcTip(125));
// console.log(calcTip(555));
// console.log(calcTip(44));

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);


// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]
// console.log(jonasArray[4]);

// const jonas1 = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas1);
// console.log(jonas1.firstName);
// console.log(jonas1['firstName']);

// const nameKey = 'Name';
// console.log(jonas1['first' + nameKey]);
// console.log(jonas1['last' + nameKey]);

// //    console.log(jonas1.'last' + nameKey);

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// // console.log(jonas1[interestedIn]);  

// // if(jonas1[interestedIn]){
// //     console.log(jonas1[interestedIn]);
// // } else{
// //     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// // }; 

// // jonas1.location = 'Portugal';
// // jonas1['twitter'] = '@jonasschmedtman';
// // console.log(jonas1);


// // Challenge
// // 'Jonas has 3 freinds, and his best friend is called Michael'

// console.log(`${jonas1.firstName} has ${jonas1.friends.length} friends, and his best freind is called ${jonas1.friends[0]}`);


// const myCountry = {
//     country: 'Pakistan',
//     capital: 'Islamabad',
//     language: 'Urdu',
//     population: 200000000,
//     neighbors: ['India', 'China', 'Afghanistan']
// }
// console.log(myCountry);

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population += 20000000;
// console.log(myCountry);
// myCountry['population'] -= 20000000;
// console.log(myCountry);

// const jonas2 = {
//     firstName: 'Faiz',
//     lastName: 'Rasool',
//     birthYear: 1996,
//     job: 'WordPress Developer',
//     friends: ['Ahmed', 'Ali', 'Ahsan'],
//     hasDriversLicense: true,



//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }


//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }


//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }

// };
// console.log(jonas2.calcAge());

// console.log(jonas2.age);
// console.log(jonas2.age);
// console.log(jonas2.age);

// // console.log(jonas2['calcAge'](1996));

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"

// console.log(jonas2.getSummary());


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// console.log(mark.bmi);

// john.calcBMI();
// console.log(john.bmi);


// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi
//         }) is higher than ${john.fullName}'s BMI ${john.bmi
//         }`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi
//         }) is higher than ${mark.fullName}'s BMI (${mark.bmi
//         })`);
// }


// // console.log(calcBMI.calcBMIMark);
// // console.log(calcBMI.calcBMIJohn);

// // if(calcBMI.calcBMIMark > calcBMI.calcBMIJohn){
// // console.log(`${calcBMI.markFullName}'s BMI (${calcBMI.calcBMIMark}) is higher than ${calcBMI.calcBMIJohn}'s BMI (${calcBMI.calcBMIJohn})`);
// // } else {
// //     console.log(`${calcBMI.johnFullName}'s BMI (${calcBMI.calcBMIJohn}) is higher than ${calcBMI.markFullName}'s BMI (${calcBMI.calcBMIMark})`);
// // }



// // console.log('Lifting weights repetition 1');
// // console.log('Lifting weights repetition 2');
// // console.log('Lifting weights repetition 3');
// // console.log('Lifting weights repetition 4');
// // console.log('Lifting weights repetition 5');
// // console.log('Lifting weights repetition 6');
// // console.log('Lifting weights repetition 7');
// // console.log('Lifting weights repetition 8');
// // console.log('Lifting weights repetition 9');
// // console.log('Lifting weights repetition 10');

// // for loop keeps running while condition is True

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }


// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`);
// }

// const faiz = [
//     'Faiz',
//     'Rasool',
//     2037 - 1996,
//     'WordPress Developer',
//     ['Amir', 'Imran', 'Moin'],
//     true,
// ]
// const types = [];
// // console.log(faiz[0])
// // console.log(faiz[1])
// // ...
// // console.log(faiz[4]);
// // faiz[5] does not exist

// for (let i = 4; i < 0; --i) {
//     //Reading from faiz array
//     console.log(faiz[i], typeof faiz[i]);

//     //Filling types array
//     // types[i] = typeof faiz[i];

//     types.push(typeof faiz[i]);
// }

// console.log(types)
// let i=0;

// console.log(++i)

// console.log(i)
// console.log(i++);
// console.log(i)


const allYears = [1991, 2007, 1969, 2020];
const agesNew = [];

for (let i = allYears.length - 1; i >= 0; i--) {
    agesNew.push(2037 - allYears[i])
}

console.log(agesNew);

// // for(let i = 0; i < allYears.length; i++){
// //     agesNew.push(2037 - allYears[i])
// // }

// // agesNew.push(2037 - allYears[0])
// // agesNew.push(2037 - allYears[1])
// // agesNew.push(2037 - allYears[2])
// // agesNew.push(2037 - allYears[3])

// // console.log(agesNew);


// // console.log('--- Only Strings---');
// // for (let i = 0; i < faiz.length; i++) {
// //     if (typeof faiz[i] !== 'string') continue;

// //     console.log(faiz[i], typeof faiz[i]);
// // }

// // console.log('--- Only Numbers---');
// // for (let i = 0; i < faiz.length; i++) {
// //     if (typeof faiz[i] !== 'number') break;

// //     console.log(faiz[i], typeof faiz[i]);
// // }

// const cup = {
//     GRABE_THE_CUP: "holding the cup right now.... next instruction please",
//     BRING_UP_THE_CUP: "READY TO SIP? .... next instruction please",
//     TAKE_A_SIP: `DRINKING TEA .... next instruction please`,
//     PUT_DOWN_THE_CUP: "LOWER HAND BACK TO OLD POSITION , AND DONE",
//     EMPTY_CUP: "CAN'T DRINK TEA",
//     Capacity: 2,
// }

// const isEmpty = function (cup) {
//     cup.Capacity < 0 ? true : false;
// }

// const chayePina = function (cup) {
//     first of all i need to grap  the cup and bring up and then take a sip and thing put down back to their own position
//     1. grap the cup
//     2. bring up the cup
//     3. take a sip
//     4. put down back
//     for (let capacity = cup.Capacity; capacity > 0; --capacity) {

//         if (isEmpty(cup)) console.log(cup.EMPTY_CUP)
//         else {
//             drink(cup);
//         }
//     }
//     if()

// }
// chayePina(cup);

// function drink (cup) {
//     console.log(cup.GRABE_THE_CUP)
//     console.log(cup.BRING_UP_THE_CUP)
//     console.log(cup.TAKE_A_SIP)
//     console.log(cup.PUT_DOWN_THE_CUP)
// }

let a = '5';

console.log('5' - 3);
console.log('5' + 3);

console.log('5' + 3 +4 *8);
console.log('5' + 3 +4 *8);
console.log('5' + 3 +4 *8);
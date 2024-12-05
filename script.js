// ***************** I. Variables & Datatypes ******************

//......................... A. Q + A ................

//1. How do we assign a value to a variable? A. With the assignment operator

let a1 = 2; 

//2. How do we change the value of a...

a1 = 20;
console.log (`value of a is: ${a1}`);


//How do we assign a value to a variable?
    // ---> To assign the value to variable we have to use let or const variables.using assignment operators.
    // ex- let variablename = value;

//How do we change the value of a variable?
    // ---> we have to write the variable name and reassign the new value.
    // ex- variable = new value;
    
//How do we assign an existing variable to a new variable?
    // ---> we have to copy the value from first variable to second variable.

    let b1 = 10;
    let c1 = b1;
    console.log (`value of c is: ${c1}`);

//Remind me, what are declare, assign, and define?
    // ---> Declare means variable or function by specifying its name
    // ---> Assign means giving value the variable after it's delcare
    // ---> Define means creating a variable with initial value or providing its full implementation

//What is pseudocoding and why should you do it?
    // ---> just write logic and outline before you start the actual code. By using this we can simplify the questions and Clarifies the porblem.

//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    // ---> I feel 60% for planning and 40% on actually typing the code.


//......................... B. Strings ................

//1.Create a variable called firstVariable
let firstVariable;

// Assign it the value of the string "Hello World"
firstVariable = "Hello World";


//Change the value of this variable to some number
//Store the value of firstVariablein a new variable called secondVariable
let secondVariable = Number (firstVariable)
secondVariable = 30;
console.log(`value of secondVariable is: ${secondVariable}`);

//Change the value of secondVariableto any string.

let secondVariable2 = "Change the value of secondVariable to any string.";
console.log(`value of New secondVariable is: ${secondVariable2}`)

//What is the value of firstVariable?
console.log(`value of firstVariable is: ${firstVariable}`);

//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName;

yourName = "shila";

console.log ( `Hello, my name is ${yourName}`);

//......................... C. Booleans ................

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a < b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

//......................... D. The farm ................

//Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";

//Write code that will print out "mooooo" if the it is equal to cow
if ( animal === "cow")
{
    console.log("mooooo");
}
else
{
    console.log("Hey! You're not a cow."); //Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
}

//......................... E. Driver's Ed ................

let personAge = 20;

if ( personAge >= 16)
{
    console.log ("Here are the keys!");
}
else
{
    console.log("Sorry, you're too young.");
}

// ***************** II. Loops ******************

//......................... A. The basics ................

//Write a loop that will print out all the numbers from 0 to 10, inclusive

for ( let d1=0; d1<=10; d1++ )
{
    console.log(`Value of d1 is: ${d1}`);
}

//Write a loop that will print out all the numbers from 10 up to and including 400

for ( let e1 = 10; e1 <= 400; e1++ )
{
    console.log(`Value of e1 is: ${e1}`);
}

//Write a loop that will print out every third number starting with 12 and going no higher than 4000

for ( let f1 = 12; f1 <= 4000; f1 += 3 )
{
    console.log(`Value of f1 is: ${f1}`);
}

//......................... B. Get even ................

//Print out the numbers that are within the range of 1 - 100

for ( let g1 = 1; g1 <= 100; g1++ )
{

    if( g1 % 2 == 0)
    {    
        console.log(` Value of g1 is: ${g1} <-- is an even number `);
    }
    else
    {
        console.log(` Value of g1 is: ${g1}`);
    }
}

//......................... C. Give me Five ................

//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
//For numbers divisible by both three and five, be sure your code prints both messages

for ( let h1 = 0; h1 <= 100; h1++ )
{
    if ( h1 % 5 === 0 && h1 %3 === 0)
    {
        console.log (`I found a number ${h1} High five! And Three ${h1} is a crowd `);
    }
    else if ( h1 % 5 === 0)
    {
        console.log (`I found a number ${h1} High five!`);
    }
    else (h1 % 3 === 0)
    {
        console.log(`I found a number ${h1} Three is a crowd`);
    }
}

//......................... D. Savings account ................

//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.

let bank_account = 0;

for ( let j1 = 1; j1 <= 10; j1++ )
    {
        bank_account += j1;
    }
    console.log ( `Bank Account = ${bank_account} `);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.

let bonus = 0; 
for ( let k1 = 1; k1 <= 100; k1++ )
    {
        let sum = k1 * 2;
        bonus = bonus + sum;
    }
    console.log ( `Check your work! Your bank_account should have = $${bonus}`);

  

// ***************** III. Arrays & Control flow ******************

//......................... A. Talk about it: ................

//What are the things in an array called?
// ---> Elements
//Do Arrays guarantee those things will be in order?
// ---> Yes
//What real-life thing could you model with an array?
// ---> It is like matrix in math.
// ---> grocery list - [ "bread", "butter", "milk" , "sugar"];

//......................... B. Easy Does It ................

//Create an array that contains three quotes and store it in a variable called quotes

let quotes = [ "bread", "butter", "milk"];
console.log (quotes);

//......................... C. Accessing elements ................

//Given the following array const randomThings = [1, 10, "Hello", true]

const randomThings = [1, 10, "Hello", true];

//How do you access the 1st element in the array?
console.log (randomThings [1]);

//Change the value of "Hello"to "World"
randomThings[2] = "World";

//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log (randomThings);

//......................... D. Change values ................

//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//What would you write to access the 3rd element of the array?

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log (ourClass [3]);

//Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat";
console.log(ourClass);

//Add a new element, "Cloud City" to the array

ourClass.push ("Cloud City");
console.log(ourClass);

//......................... E. Mix It Up ................

//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
//Given the following array: const myArray = [5, 10, 500, 20]

//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

const myArray = [5, 10, 500, 20]

myArray.push ("Aegon", " shila");
console.log(myArray);

//Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);

//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

//Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

//Reverse this array using Array.prototype.reverse(). 
myArray.reverse();
console.log(myArray);

//Did you mutate the array?
// --> Yes
//What does mutate mean?
// --> Add, remore, reverse an array means we can modify the original data inside the array.
//Did the .reverse()method return anything?
// Yes.

//......................... F. Biggie Smalls ................

//Create a variable that contains an integer.
//Write an if ... elsestatement that:

//console.log()s "little number" if the number is entered is less than 100

let number1 = 200;
if (number1 <= 100)
    {
        console.log("little number");  
    }
    else
    {
        console.log("big number"); 
    }

     
//......................... G. Monkey in the Middle ................

//Write an if ... else if ... elsestatement:
//console.log()little numberif the number entered is less than 5.

let number2 = 100;

if (number2 <= 5)
    {
        console.log("little number");  
    }
    else if (number2 >= 13)
    {
        console.log("big number"); 
    }
    else
    {
        console.log("monkey");
    }

//......................... H. What's in Your Closet? ................
 
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = 
  [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],
    [
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],
    [
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
  console.log (`Kristyn is rocking that ${kristynsCloset [3]} today! `);

  //Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
  kristynsCloset.splice(6,0,'raybans');
  console.log(kristynsCloset);

  //Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
  kristynsCloset[5]= "stained knit hat";
  console.log(kristynsCloset);
 
  //Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
  let thomsshirts = thomsCloset[0][0];
  console.log(`Thom! Using ${thomsshirts}`);

  //In the same way, access one item from Thom's pants array.
  let thomPants = thomsCloset [1][1];
  console.log(thomPants);

  //Access one item from Thom's accessories array.
  let thomAccessories = thomsCloset[2][1];
  console.log(thomAccessories);

  //Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
  console.log(`Thom is looking fierce in a ${thomsshirts}, ${thomPants} and ${thomAccessories}!`);

  //Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

  thomsCloset[1][2] = "Footie Pajamas";
  console.log (thomsCloset);

// ***************** IV. Functions ******************

//......................... A. printGreeting ................

  //Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting? => Hello there, Slimer!

  function printGreeting(name)
    {
        return `Hello there, ${ name}`;
    }
        console.log(printGreeting("Slimer!"));

//......................... B. printCool ................

//Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
//console.log(printCool("Captain Reynolds"));
//=> "Captain Reynolds is cool";

function printCool(name)
{
    return `${name} is cool` ;
}
console.log(printCool("Captain Reynolds"));

//......................... C. calculateCube ................

//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5)); 
//=> 125

function calculateCube (number)
{
    return number * number * number ;
}

console.log(calculateCube(5));

//......................... D. isVowel ................

//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
//console.log(isVowel("a"));
//=> true

function isVowel(letter)
{
    if (letter.length === 1 && /[a-zA-Z]/.test(letter))
    {   
        const isVowel = 'aeiou';
        return isVowel.includes(letter.toLowerCase());
    }
    return false;
 }
console.log(isVowel("a"));

//......................... E. getTwoLengths ................

//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths( str1, str2)
{
    return [str1.length, str2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//......................... F. getMultipleLengths ................

//Write a function getMultipleLength sthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths (...strings)
{
    return strings.map(str => str.length);
}
console.log ( getMultipleLengths("hello", "what", "is", "up", "dude") );


//......................... G. maxOfThree ................

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.


// function maxOfThree(a,b,c) // this is using max
// {
//     return Math.max(a,b,c);
// }
// console.log (maxOfThree(6, 9, 1));


function maxOfThree(a,b,c)
{
    if (a >= b && a >= c)
    {
        return a; 
    }
    else if( b >= a && b >= c )
    {
        return b;
    }
    else 
    {
        return c;
    }
} console.log ( maxOfThree(10,50,30) );

//......................... H. printLongestWord ................

function printLongestWord (words)
{
    let longestWord = "";
    for (let i=0 ; i < words.length; i++)
    {
        if ( words[i].length > longestWord.length)
        {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



// ***************** Objects ******************
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

//......................... A. Make a user object ................

//Create an object called user.

let user = {
    name: "shila",
    email: "abc@gmail.com",
    age: 10,
    purchased: [],
}

console.log(user.name);
console.log(user.email);
console.log(user.age);

//......................... B. Update the user ................

//Our user has changed his or her email address. Without changing the original user object, update the emailvalue to a new email address.

let updateEmail = { ...user, email: "xyz@gmail.com" };

console.log(user.email);
console.log(updateEmail.email);


//Our user has had a birthday! Without changing the original userobject, increment the age value using the postfix operator. Hint: age++

let updateAge ={ ...user, age: user.age++ };

console.log(updateAge.age);
console.log(user.age);

//......................... C. Adding keys and values ................

//You have decided to add your user's location to the data that you want to collect.
//Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

let updatedLocation = { ...user, location: "chicago" };

console.log(updatedLocation.location);
//console.log(user.location);



//......................... D. Shopaholic! ................

//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

let purchaseArray =  ["item1", "item2" ];
purchaseArray.push( "carbohydrates");
console.log(purchaseArray);

//Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

purchaseArray.push( "peace of mind" );
console.log(purchaseArray);

//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.

purchaseArray.push( "Merino jodhpurs" );
console.log(purchaseArray);

//Console.log just the "Merino jodhpurs" from the purchasedarray.

console.log(purchaseArray[4]);

//......................... E. Object-within-object ................

//Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
//If we want to give our user a friend with a name and age, we could write:
//When we console.log user, we would see the friendobject added to our user object.

user.friend = {
    name: "Grace Hopper",
    age: 85
}

//Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)

user = { 
    friend:
    {
        name: "shila",
        age: 20,
        location: "chicago",
        purchaseArray: []
    } }

// Console.log just the friend's name
console.log ( user.friend.name );

//Console.log just the friend's location
console.log ( user.friend.location );

//CHANGE the friend's age to 55
user.friend.age = 30;
console.log(user.friend.age)

//The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.

user.friend.purchaseArray.push ("The One Ring");
console.log(user.friend.purchaseArray);

//The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchaseArray.push ("A latte");
console.log(user.friend.purchaseArray);

//Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchaseArray[1]);

//......................... F. Loops ................

//Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

// for ( i = 0; i < user.purchaseArray.length; i++)
// {
//     console.log(user.purchaseArray[i]);
// }

//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for(i = 0; i < user.friend.purchaseArray.length; i++ )
    {
        console.log(user.friend.purchaseArray);
    }


//......................... G. Functions can operate on objects ................

//Write a single function update User that takes no parameters. When the function is run, it should:
//it should increment the user's age by 1
//make the user's name uppercase

let users = [
    { name: "abc", age: 30 , location: "NewYork" },
    { name: "xyz", age: 25 , location: "chicago"}
  ];
  

function updateUser() {
    let user = users[1];
    user.age += 1; 
    user.name = user.name.toUpperCase();  
    console.log(user);
  }
  updateUser();

//Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.  

function oldAndLoud(person){
    person.age =+ 1;
}
oldAndLoud(users);
console.log(user);

/***************************************************Requirements Complete! Hungry for More? *************************************/

//Cat Combinator

// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

const cat1 = {
    name: "Whiskers",
    breed: "Siamese",
    age: 3
  };
console.log(cat1.age);
console.log(cat1.breed);

//2. Papa cat
// Define an object called cat2 that also contains the properties:

// name
// breed
// age (a number)

const cat2 = {
    name: "Shadow",
    breed: "Persian",
    age: 5
  };
console.log(cat2.age);
console.log(cat2.breed);

// 3. Combine Cats!
// The cats are multiplying!
// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.

function combineCats(mama, papa)
{
    console.log(mama);
    console.log(papa);
}
combineCats(cat1, cat2);

//You could also invoke the combineCats function by writing the objects straight into the parentheses:

function combineCats(mama,papa){
return {

     name: mama.name + papa.name,  
     age: 1,
     breed: mama.breed + '-' + papa.breed 
}
}   console.log (combineCats(cat1 , cat2));

//4. Cat brain bender
//If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:
//catCombinatorcan use itself as its own argument.
//Take a second to stew on that . . .
//What is the result of:
//Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.//

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)))));
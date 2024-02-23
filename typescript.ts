//  Question : 01  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


let person_name = "Muqadus";
let message = `Hello ${person_name} , Do you want to learn some python today?`;
console.log(message)


//  Question : 02  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let indivisual_name = "Muqadus";

let lowercase = indivisual_name.toLowerCase();        // Name in lowercase.
console.log(lowercase);

let uppercase = indivisual_name.toUpperCase();       // Name in uppercase.
console.log(uppercase);

let titlecase = indivisual_name.toString();          // Name in titlecase.
console.log(titlecase);


// Question : 03  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:


let author_name : String = "Mark Twain once said"
let quote       : string = "\" Focus more on your desire than on your doubt, and the dream will take care of itself. \""

console.log(author_name + "," +quote)


// Question : 04  Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.





// Question : 05  Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.



// Question : 06  Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.


//  Addition
let x = 4;
let y = 4;

console.log(x + y)

//  Subtraction
let a = 10;
let b = 2 ;

console.log(a - b)

//  Multiplication
let c = 4;
let d = 2;

console.log(c * d)

//  Division
let r = 24;
let s = 3 ;

console.log(r / s)


// Question : 07  Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message


let Favorite_number : number = 21;
let Message : string = "My favorite number is ";

console.log(Message + Favorite_number + "." )


// Question : 08  Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.



// Question : 09  Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friend_names : string[] = ["Sadaf"  ,  "Saira"  ,  "Hadiqa"];

console.log(friend_names[0])
console.log(friend_names[1])
console.log(friend_names[2])


// Question : 10  Greetings: Start with the array you used in Exercise 09, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

console.log(message = "Hello" + " " +friend_names[0])
console.log(message = "Hello" + " " +friend_names[1])
console.log(message = "Hello" + " " +friend_names[2])


// Question : 11  Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle

let transportation : string[] = ["BMW"  ,  "Tesla"   ,  "Private Jet"  ,  "Rolls-Royce "];
let statements = "I would like to own a ";

console.log( statements +transportation[0] )
console.log( statements +transportation[1] )
console.log( statements +transportation[2] )
console.log( statements +transportation[3] )


// Question : 12  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let guests_list = ["Sadaf"  , "Saira"  , "Hadiqa"];
let invitation : string = ''

console.log (invitation =  guests_list[0] +" , "+"I'm throwing a party this Sunday at 10 pm! Feel free to stop by" );
console.log (invitation =  guests_list[1] +" , "+"I'm throwing a party this Sunday at 10 pm! Feel free to stop by" );
console.log (invitation =  guests_list[2] +" , "+"I'm throwing a party this Sunday at 10 pm! Feel free to stop by" );


// Question : 13  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite


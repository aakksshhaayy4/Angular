var fruits:string[];
fruits=['mango', 'apple', 'banana', 'pinapple'];
console.log("All fruits : "+fruits);

console.log("Fruits avail in first index : "+fruits[1]);

console.log();

console.log("Specific type of values");
let animals:Array<string>;
animals=["lion", 'tiger', 'deer', 'beer'];
console.log(animals);

console.log();

console.log("mixed type of values");
let student:Array<string | number>;
student=['akshay',87,'akhare',"mahaarathi",74];
console.log(student);

console.log();

console.log("Any type of values");
let everything:any;
everything=['lion',857, true,57.8];
console.log(everything);
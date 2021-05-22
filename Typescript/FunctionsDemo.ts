//NAmed Functions

function welcome(){
    console.log("Welcome to codewithakshay !");
}
welcome();

//function with parameter and return type
function add(a:number, b:number) : number{
    return a+b;
}
let result = add(10,50);
console.log("Addition is : "+result);

//Anonymous function
 let reult = function (x:number, y:number) : number{
     return x+y;
 }
 console.log(reult(70,7));

 //optional parameter
 function register(firstname:string, lastname?:string) : string{
     return firstname+" "+lastname;
 }
 console.log(register("Akshay"));


 //rest parameter (varargs)
 function values(msg:string, ...names:string[]) {
     console.log(msg+" "+names.join(","));
 }
 values("Good Afternoon", "Akshay","pAVAN", "soham");

//NAmed Functions
function welcome() {
    console.log("Welcome to codewithakshay !");
}
welcome();
//function with parameter and return type
function add(a, b) {
    return a + b;
}
var result = add(10, 50);
console.log("Addition is : " + result);
//Anonymous function
var reult = function (x, y) {
    return x + y;
};
console.log(reult(70, 7));
//optional parameter
function register(firstname, lastname) {
    return firstname + " " + lastname;
}
console.log(register("Akshay"));
//rest parameter (varargs)
function values(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(msg + " " + names.join(","));
}
values("Good Afternoon", "Akshay", "pAVAN", "soham");

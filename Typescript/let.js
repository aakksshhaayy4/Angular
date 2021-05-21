var indx = 0;
for (var indx_1 = 0; indx_1 <= 8; indx_1++) {
    console.log("Inside function : " + indx_1);
}
console.log("Outside function : " + indx);
var petname = "dog";
function setPetNames() {
    var petname = "cat";
    console.log("inside function : " + petname);
}
setPetNames();
console.log("outside the function : " + petname);

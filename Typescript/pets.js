var petname = "jerry";
function setPetName() {
    var petname = "tom";
    console.log("Inside function : " + petname);
}
console.log("Outside function : " + petname);
var index = 0;
for (index = 0; index <= 5; index++) {
    console.log("Inside function : " + index);
}
console.log("Ouside function : " + index);

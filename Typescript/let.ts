var indx=0;
for( let indx=0; indx<=8; indx++){
    console.log("Inside function : "+indx);
}   
console.log("Outside function : "+indx);


var petname:string="dog";
function setPetNames(){
    let petname:string="cat";
    console.log("inside function : "+petname);
}

setPetNames();
console.log("outside the function : "+petname);

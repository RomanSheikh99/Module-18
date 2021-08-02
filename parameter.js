// function parameter

function myFunction(name,age,date){
    console.log(name,age,date);
}






// calling function

// myFunction("roman");
// myFunction(34);
// myFunction('sheikh');
// myFunction(true);

// myFunction("roman",34,true);


// calculation using function parameter

function sum(x,y){
    console.log(x+y);
}


// sum(4,6);
// sum(43456,456);
// sum(34,45);
// sum(343,56);

function sub(x,y){
    math = x*x + 2*x*y + y*y;
    console.log(math); 
}

// sub(290,76);

// condition into function parameter

function myCondition(x,y,z){
    if(x <= 10 || y <= 10 || z <= 10){
        for(var i = 0; i < x; i++){
            console.log("i love you suna");
        }
    }else if(x > 10 && x < 100 || y > 10 && y < 100 || z > 10 && z < 100){
        for(var i = 11; i < y; i++){
            console.log("i am sorry bby");
        }
    }else{
        for(var i = 100; i < z; i++){
            console.log("i promise you bby");
        }
    }
        
}


myCondition(238,223,353);
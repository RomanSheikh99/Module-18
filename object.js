// object declaretion

var myBestu = {
    name: "amin",
    height: "5",
    weight: "90kg",
    fevfood: "burger"
};

var fevGame = {
    name: "cricket",
    bat: "ss",
    songstha: "icc",
    turnament: "world cup"
};

// get object

console.log(myBestu);

// three ways to get object property

console.log(myBestu.name);
console.log(myBestu["fevfood"]);

var bestuHeight = "height";
console.log(myBestu[bestuHeight]);


// three ways to set object property

myBestu.name = "Shuvon";
myBestu["fevfood"] = "chiken";

var bestuWeight = "weight";
myBestu[bestuWeight] = "52kg";

console.log(myBestu);
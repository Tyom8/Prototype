function Cars (name,model,type,color,backgroundcolor,fuel,wheel) {
    this.name = name,
    this.model = model,
    this.type = type,
    this.color = color,
    this.backgroundcolor = backgroundcolor,
    this.fuel = fuel,
    this.wheel = wheel
};

let car_1 = {
    styling: "BRABUS",
    mator: "8L",
    fastcar: true,
    __proto__: new Cars("Mercedes","G-class","SUV","Black","Red","Petrol","R22-AMG")
};

let car_2 = {
    styling: "Keyvany",
    mator: "5.5L",
    __proto__: new Cars("Mercedes","G-class","SUV","Black","Red","Petrol","R22-AMG")
};

let car_3 = {
    styling: "Maybach",
    mator: "5.5L",
    confortable: true,
    __proto__: new Cars("Mercedes","S-class","Sedan","White","Black","Petrol","R22-AMG")
};

let car_4 = {
    styling: "Urban",
    mator: "1.7L",
    styleWheel: "Watermelon",
    madeIn: "Russia",
    styleNationality: "Armenian",
    __proto__: new Cars("Lada","Niva","Super-SUV","Black or White","Black Python","SuperPetrol","R18")
};

let car_5 = {
    styling: false,
    mator: "Electro",
    doors: 5,
    gamesInCar: true,
    __proto__: new Cars("Tesla","S","Sedan","White","Black","Energy","R20-Vossen")
};

let cars = [car_1,car_2,car_3,car_4,car_5];
console.log(cars);

////////////////////////////////
function bigFather () {
    this.car = "Mercedes E-190",
    this.capital = "500000 rubli and 15kg gold"
}

let grandFather = {
    car: "Vaz 24",
    house: "Apartment in centre of London.",
    __proto__: new bigFather
};

let Father = {
    car: "Tesla",
    house: "Apartment in centre of Erevan.",
    __proto__:  grandFather
};

function Son () {
    this.car = "Mercedes S",
    this.__proto__ = Father
};

console.log(new Son);

///////////////////////////////
function Animal (foot = 4,hand,xishnik,pet,slow,quick,kg) {
    this.foot = foot,
    this.hand = hand,
    this.xishnik = xishnik,
    this.pet = pet,
    this.slow = slow,
    this.quick = quick,
    this.kg = kg
};

let lion = {
    king: true,
    info: "if you want know more information click in Prototype",
    __proto__: new Animal(4,0,true,false,false,true,"150 tp 200 kilograms")
};

let tiger = {
    info: "if you want know more information click in Prototype",
    __proto__: lion
};
console.log(lion,tiger);

////////////////////////////////////////////////////////////

let football = {
    countOfPlayers: 11,
    ball: true,
    goalKepper: true,
};

let manchesterUnited = {
    worldCup: false,
    PremerLiga: true,
    coach: true,
    __proto__: football,
    info: "if you want know more information click in Prototype"
};

let arsenal = {
    ChampionLiga: true,
    assistentManager: 1,
    __proto__: manchesterUnited,
    info: "if you want know more information click in Prototype"
};

let liverPool = {
    countOfgoalKepper: 4,
    teamLogo:true,
    __proto__: arsenal,
    info: "if you want know more information click in Prototype"
};

let chelsi = {
    museum: true,
    footballKit: true,
    __proto__: liverPool,
    info: "if you want know more information click in Prototype"
};

let manCity = {
    players: "Only boys",
    owner: "Sheyx",
    teamCountry: "England",
    teamCity: "Manchester",
    __proto__: chelsi,
    info: "if you want know more information click in Prototype"
};
console.log(manCity);

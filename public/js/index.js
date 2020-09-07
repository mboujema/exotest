//2
let maBoolean = 5 > 3;

//3
let monArray = [];

//4
let monObjet = {
    Prenom: "Mouad",
}

//5
let monString = "text"

//6
let monInt = 25

//7
let objet1 = {
    nom : "Boujemâa",
    sePresenter(){
        console.log(`Bonjour je suis ${this.nom}`);
    }
}
objet1.sePresenter()

//8
const calcul = (x,y) => {
    return x + y;
}
console.log(calcul(5,10));

//9
let monInt2 = 3;

if (monInt2 < 8) {
    console.log(`${monInt2} est plus petit que 8`);
}

//10
let i = 0

for (let i = 0; i < 9; i++) {
    console.log(i);
}

//11
let date = new Date()
console.log(date.getFullYear());

//12
const STRING = (name) => {
    name = name.substr(0).toUpperCase()
    return name;
}
console.log(STRING("mouad"));

//13
const StrinG2 = (name2) => {
    name2 = name2.substr(0,1).toUpperCase() + name2.substr(1, 3).toLowerCase() + name2.substr(-1, 1).toUpperCase() ;
    return name2;
}
console.log(StrinG2("mouad"));

//14
let longueur = (a) => {
    console.log(a.lenght);
    return a;
}
alert(longueur("abcd"));

//15




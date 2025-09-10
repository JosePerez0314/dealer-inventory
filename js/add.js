/* variables */

const carMade = document.getElementById("model");
const carYear = document.getElementById("year");
const carMillage = document.getElementById("millage");
const menuFeatures = document.querySelectorAll(".slice-menu input[type='checkbox']");
const selectedFeatures = [];

const note = document.getElementById("note");
const sendBtn = document.querySelector(".send-btn");

class Car {
    constructor(make, year, millage, opFeatures, note) {
        this.make = make;
        this.year = year;
        this.millage = millage;
        this.opFeatures = opFeatures;
        this.note = note;
    }
}

const myCar = new Car(carMade.value, carYear.value, carMillage.value, menuFeatures.checked, note.value);

sendBtn.addEventListener('click', () => {
    menuFeatures.forEach(async (f) => {
        if (f.checked) {
            selectedFeatures.push(f.name);
        }
    });

    localStorage.setItem("cars", JSON.stringify(Car));
});

console.log("Valor de make:", carMade.value);
console.log("Valor de year:", carYear.value);
console.log("Valor de millage:", carMillage.value);
console.log("Checkboxes seleccionados:", selectedFeatures);
console.log("Nota:", note.value);


console.log("Guardado en localStorage:", JSON.parse(localStorage.getItem("cars")));


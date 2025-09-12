/* variables */

const carMade = document.getElementById("model");
const carYear = document.getElementById("year");
const carMillage = document.getElementById("millage");
const menuFeatures = document.querySelectorAll(".slice-menu input[type='checkbox']");

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

sendBtn.addEventListener('click', () => {
    const selectedFeatures = [];

    for (const f of menuFeatures) {
        if (f.checked) {
            selectedFeatures.push(f.name)
        }
    }

    const myCar = new Car(carMade.value, carYear.value, carMillage.value, selectedFeatures, note.value);

    localStorage.setItem("myCar", JSON.stringify(myCar));
    console.log(myCar)
});

console.log("Guardado en localStorage:", JSON.parse(localStorage.getItem("myCar")));


/* variables */

const carMade = document.getElementById("model").value;
const carYear = document.getElementById("year").value;
const carMillage = document.getElementById("millage").value;
const sliceMenu = document.querySelectorAll(".slice-menu");
const menuContent = sliceMenu.elements;
const note = document.getElementById("note");
const noteContent = note.select();

class Car {
    constructor(make, year, millage, opFeatures) {
        this.make = make;
        this.year = year;
        this.millage = millage;
        this.opFeatures = opFeatures;
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Input Validation
*/

function notANumberAlert() {
	alert("Please only use numbers as inputs - no commas, percent signs, units, etc.");
	return;
}


function getNumberOfStudents() {
	var numberOfStudentsOnCampus = document.getElementById("numberOfStudentsOnCampus").value;
	if(numberOfStudentsOnCampus == '') {
		numberOfStudentsOnCampus = 5095;
	}
	if(isNaN(numberOfStudentsOnCampus)) {
		notANumberAlert();
		return;
	}
	return numberOfStudentsOnCampus;
}

function getNumberOfCommutersAndFaculty() {
	var numberOfCommutersAndFaculty = document.getElementById("numberOfCommutersAndFaculty").value;
	if(numberOfCommutersAndFaculty == '') {
		numberOfCommutersAndFaculty = 1100;
	}
	if(isNaN(numberOfCommutersAndFaculty)) {
		notANumberAlert();
		return;
	}
	return numberOfCommutersAndFaculty;
}

function getAverageNumberOfMiles() {
	var averageNumberOfMiles = document.getElementById("averageNumberOfMiles").value;
	if(averageNumberOfMiles == '') {
		averageNumberOfMiles = 16;
	}
	if(isNaN(averageNumberOfMiles)) {
		notANumberAlert();
		return;
	}
	return averageNumberOfMiles;
}

function getNaturalGas() {
	var naturalGas = document.getElementById("naturalGas").value;
	if(naturalGas == '') {
		naturalGas = (3071 * 5096);
	}
	if(isNaN(naturalGas)) {
		notANumberAlert();
		return;
	}
	return naturalGas;
}

function getKilowattHours() {
	var kilowattHours = document.getElementById("kilowattHours").value;
	if(kilowattHours == '') {
		kilowattHours = (5455 * 5096);
	}
	if(isNaN(kilowattHours)) {
		notANumberAlert();
		return;
	}
	return kilowattHours;
}

function getFuelOil() {
	var fuelOil = document.getElementById("fuelOil").value;
	if(fuelOil == '') {
		fuelOil = (4848 * 5096);
	}
	if(isNaN(fuelOil)) {
		notANumberAlert();
		return;
	}
	return fuelOil;
}

function getPropane() {
	var propane = document.getElementById("propane").value;
	if(propane == '') {
		propane = (2243 * 5096);
	}
	if(isNaN(propane)) {
		notANumberAlert();
		return;
	}
	return propane;
}

function getPercentRecycled() {
	var percentRecycled = document.getElementById("percentRecycled").value;
	/*if(percentRecycled.indexOf('%') > -1) {
		percentRecycled = percentRecycled.replace('%', '');
	}*/
	if(percentRecycled == '') {
		percentRecycled = 35;
	}
	if(isNaN(percentRecycled)) {
		notANumberAlert();
		return;
	}
	return percentRecycled
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Variables from "People"
*/

function emissionsFromOnCampusStudents(numberOfStudentsOnCampus) {
	averageNumberOfCOEmissionsPerYearPerPerson = 692;
	return averageNumberOfCOEmissionsPerYearPerPerson * numberOfStudentsOnCampus;
}

function emissionsFromDrivers(numberOfCommutersAndFaculty, averageNumberOfMiles) {
	var averageFuelEfficency = 21.6;
	var lbsOfCOEmittedPerGallon = 19.6;
	var emissionOtherThanCO = lbsOfCOEmittedPerGallon * 1.01;
	return (numberOfCommutersAndFaculty * 
		((averageNumberOfMiles * 52) / averageFuelEfficency) 
		* lbsOfCOEmittedPerGallon * emissionOtherThanCO);
}

function totalEmissionsFromPeople(numberOfStudentsOnCampus,
			numberOfCommutersAndFaculty,
			averageNumberOfMiles) {
	return emissionsFromOnCampusStudents(numberOfStudentsOnCampus) +
		emissionsFromDrivers(numberOfCommutersAndFaculty, averageNumberOfMiles);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Variables from "Power Usage"
*/

function emissionsFromNaturalGas(naturalGas){
	var COEmissionsForNaturalGas = 119.58;
	return COEmissionsForNaturalGas * naturalGas * 12;
}

function emissionsFromElectricity(kilowattHours){
	return kilowattHours * 12;
}

function emissionsFromFuelOil(fuelOil){
	var COEmissionsForFuelOil = 22.61;
	return COEmissionsForFuelOil * fuelOil * 12;
}

function emissionsFromPropane(propane){
	var COEmissionsForPropane = 22.61;
	return COEmissionsForPropane * propane * 12;
}

//Anytime something is multiplied by 12,
//it's for 12 months in a year
function totalEmissionsFromPowerUsage(naturalGas,
			kilowattHours,
			fuelOil,
			propane) {
	return emissionsFromNaturalGas(naturalGas) +
	emissionsFromElectricity(kilowattHours) +
	emissionsFromFuelOil(fuelOil) +
	emissionsFromPropane(propane);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Variables from "Recycling"
*/

function emissionsSavedFromAluminum(aluminum, numberOfPeopleOnCampus) {
	if(aluminum) {
		return (89.38 * numberOfPeopleOnCampus);
	} else {
		return 0;
	}
}

function emissionsSavedFromPlastic(plastic, numberOfPeopleOnCampus) {
	if(plastic) {
		return (35.56 * numberOfPeopleOnCampus);
	} else {
		return 0;
	}
}

function emissionsSavedFromGlass(glass, numberOfPeopleOnCampus) {
	if(glass) {
		return (25.39 * numberOfPeopleOnCampus);
	} else {
		return 0;
	}
}

function emissionsSavedFromPaper(paper, numberOfPeopleOnCampus) {
	if(paper) {
		return (140.60 * numberOfPeopleOnCampus);
	} else {
		return 0;
	}
}

function totalEmissionsSavedFromRecycling(aluminum,
			plastic,
			glass,
			paper,
			numberOfPeopleOnCampus,
			percentRecycled) {
	var emissionsSaved = 0;
	emissionsSaved += emissionsSavedFromAluminum(aluminum, numberOfPeopleOnCampus);
	emissionsSaved += emissionsSavedFromPlastic(plastic, numberOfPeopleOnCampus);
	emissionsSaved += emissionsSavedFromGlass(glass, numberOfPeopleOnCampus);
	emissionsSaved += emissionsSavedFromPaper(paper, numberOfPeopleOnCampus);
	emissionsSaved = emissionsSaved * (percentRecycled * .01)
	return emissionsSaved;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateEmissions() {
	//Variables from "People"
	var numberOfStudentsOnCampus = getNumberOfStudents();
	var numberOfCommutersAndFaculty = getNumberOfCommutersAndFaculty();
	var averageNumberOfMiles = getAverageNumberOfMiles();
	var numberOfPeopleOnCampus = numberOfStudentsOnCampus + numberOfCommutersAndFaculty;
	//Variables from "Power Usage"
	var naturalGas = getNaturalGas();
	var kilowattHours = getKilowattHours();
	var fuelOil = getFuelOil();
	var propane = getPropane();
	//Variables from "Recycling"
	var aluminum = document.getElementById("aluminum").checked;
	var plastic = document.getElementById("plastic").checked;
	var glass = document.getElementById("glass").checked;
	var paper = document.getElementById("paper").checked;
	var percentRecycled = getPercentRecycled();

	var totalEmissions = 0;

	totalEmissions += totalEmissionsFromPeople(numberOfStudentsOnCampus,
			numberOfCommutersAndFaculty,
			averageNumberOfMiles);
	totalEmissions = totalEmissions + totalEmissionsFromPowerUsage(naturalGas,
			kilowattHours,
			fuelOil,
			propane);
	totalEmissions = totalEmissions - totalEmissionsSavedFromRecycling(aluminum,
			plastic,
			glass,
			paper,
			numberOfPeopleOnCampus,
			percentRecycled);

	//input result in "Result" box and truncate to 2 decimal points
	if(isNaN(totalEmissions)) {
		result.value = ("Please fix your input and try again.");
	} else {
		result.value = totalEmissions.toFixed(2);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
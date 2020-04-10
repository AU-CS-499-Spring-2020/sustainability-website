////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
	//get formulas for zip code
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
	var numberOfStudentsOnCampus = document.getElementById("numberOfStudentsOnCampus").value;
	var numberOfCommutersAndFaculty = document.getElementById("numberOfCommutersAndFaculty").value;
	var averageNumberOfMiles = document.getElementById("numberOfStudentsOnCampus").value;
	var numberOfPeopleOnCampus = numberOfStudentsOnCampus + numberOfCommutersAndFaculty;
	//Variables from "Power Usage"
	var naturalGas = document.getElementById("naturalGas").value;
	var kilowattHours = document.getElementById("kilowattHours").value;
	var fuelOil = document.getElementById("fuelOil").value;
	var propane = document.getElementById("propane").value;
	//Variables from "Recycling"
	var aluminum = document.getElementById("aluminum").checked;
	var plastic = document.getElementById("plastic").checked;
	var glass = document.getElementById("glass").checked;
	var paper = document.getElementById("paper").checked;
	var percentRecycled = document.getElementById("percentRecycled").value;

	var totalEmissions = 0;

	totalEmissions += 
		( totalEmissionsFromPeople(numberOfStudentsOnCampus,
			numberOfCommutersAndFaculty,
			averageNumberOfMiles) +
		totalEmissionsFromPowerUsage(naturalGas,
			kilowattHours,
			fuelOil,
			propane) ); -
		totalEmissionsSavedFromRecycling(aluminum,
			plastic,
			glass,
			paper,
			numberOfPeopleOnCampus,
			percentRecycled);

	result.value = totalEmissions.toFixed(2);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
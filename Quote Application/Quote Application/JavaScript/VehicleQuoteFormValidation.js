// Declare and initialize the variables we will use
let vehicleRegistrationNumber = "";
let ageOfVehicle = "";
let registeredDate = "";
let engineCC = "";
let standardSpecification = "";
let fivehundredexcess = "";
let breakdowncover = "";
let vehiclekeyscover = "";
let additionalInformation = "";

// Declare and initialize the array we will use
let alluserrecordArray = [];

// Create a function called readFormData
readFormData = () => {
    vehicleRegistrationNumber = document.getElementById("vehicleRegistrationNumber").value;
    ageOfVehicle = document.getElementById("ageOfVehicle").value;
    registeredDate = document.getElementById("registeredDate").value;
    engineCC = document.getElementById("engineCC").value;
    
//section
    var foundElement = document.getElementsByName('standardSpecification');
    
//section
    for (i=0; i < foundElement.length; i++) {
        if (foundElement[i].checked)
        standardSpecification = foundElement[i].value;
    }

//section
    if (document.getElementById('500excess').checked) {
        fivehundredexcess = document.getElementById("500excess").value;
    }
    else {
        fivehundredexcess = "";
    }

    if (document.getElementById('breakdowncover').checked) {
        breakdowncover = document.getElementById("breakdowncover").value;
    }
    else {
        breakdowncover = "";
    }

    if (document.getElementById('carkeyscover').checked) {
        vehiclekeyscover = document.getElementById("carkeyscover").value;
    }
    else {
        vehiclekeyscover = "";
    }

    //section
    additionalInformation = document.getElementById("subject").value;
    checkFormData(); //Calling the method below 

} //End of readFormData() function

// Create a function called checkFormData to check if an input is empty

checkFormData = () => {
    //Check vehicleRegistrationNumber for validity
    
     if (vehicleRegistrationNumber == "") {

        document.getElementById("vehicleRegistrationNumber").focus();
        document.getElementById("errorBox").innerHTML = "Enter your vehicleRegistrationNumber";
        document.getElementById("errorBox").style ='background-color: red';
        return false;

    } else {
        document.getElementById("errorBox").innerHTML = "Valid input";
        document.getElementById("errorBox").style = 'color:green';
    }

// Check age of vehicle for validity
if (ageOfVehicle == "") {

    document.getElementById('ageOfVehicle').focus();
    document.getElementById("errorBox").innerHTML = "Enter the age of the vehicle in years";
    document.getElementById("errorBox").style = 'background-color: red';
    return false;
    
} else {
    document.getElementById("errorBox").innerHTML = "Valid input";
    document.getElementById("errorBox").style = 'color: green';
}

// Date of registration for validity
if (registeredDate == "") {

    document.getElementById('registeredDate').focus();
    document.getElementById("errorBox").innerHTML = "Enter the date of registration";
    document.getElementById("errorBox").style = 'background-color: red';
    return false;
    
} else {
    document.getElementById("errorBox").innerHTML = "Valid input";
    document.getElementById("errorBox").style = 'color: green';
}

// EngineCC validation
if (engineCC == "") {

    document.getElementById('engineCC').focus();
    document.getElementById("errorBox").innerHTML = "Enter the CC value of the vehicle engine";
    document.getElementById("errorBox").style = 'background-color: red';
    return false;
    
} else {
    document.getElementById("errorBox").innerHTML = "Valid input";
    document.getElementById("errorBox").style = 'color: green';
}

// Check standard Specification for validity
if (standardSpecification == "") {

    document.getElementById("errorBox").innerHTML = "Choose Yes if the vehicle specification has been amended";
    document.getElementById("errorBox").style = 'background-color: red';
    return false;
    
} else {
    document.getElementById("errorBox").innerHTML = "Valid input";
    document.getElementById("errorBox").style = 'color: green';
}

alert(`The details submitted are:
        vehicleRegistrationNumber is - ${vehicleRegistrationNumber}
        Age of vehicle is - ${ageOfVehicle}
        Registered Date - ${registeredDate}
        Engine CC - ${engineCC}
        Specification changed - ${standardSpecification}
        Excess - ${fivehundredexcess}
        Breakdown cover - ${breakdowncover}
        Key cover - ${vehiclekeyscover}
        Additional information - $(additionalInformation)    
        `);

        addValuesToArray ();
} //End of checkFormData() function

// Create a function called addValuesToArray
addValuesToArray = () => {
    alluserrecordArray.push(vehicleRegistrationNumber);
    alluserrecordArray.push(ageOfVehicle);
    alluserrecordArray.push(registeredDate);
    alluserrecordArray.push(engineCC);
    alluserrecordArray.push(fivehundredexcess);
    alluserrecordArray.push(breakdowncover);
    alluserrecordArray.push(vehiclekeyscover);
    alluserrecordArray.push(additionalInformation);

    for (const elementinarray of alluserrecordArray) {
        console.log(elementinarray);
    }

    calculateInsuranceAmount()
} //End of addValuesToArray() function

// Example 5 year old * 1600cc = 1/5 * 1600 = 320
// Example 2 year old * 1600cc = 1/2 * 1600 = 400
// Example 1 year old * 3000cc = 1/1 * 3000 = 3000
calculateInsuranceAmount = () => {
    let quoteamount = (1 / ageOfVehicle) * engineCC;
    document.getElementById("quoteamount").innerHTML = `Your quote amount is $${quoteamount}`;
} //End of calculateInsuranceAmount() function
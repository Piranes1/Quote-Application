function validateForm() {
    var propertyLocation = document.getElementById("propertyLocation").value;
    
    if (propertyLocation === "")
    {
        alert(`Property location is required ${propertyLocation}`);
    } 
    else
       {
        alert(`Your property location is ${propertyLocation}`);
       } 
    }
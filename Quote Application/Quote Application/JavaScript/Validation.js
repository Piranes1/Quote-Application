
function validateForm() {
    var nameInput = document.getElementById("name").value;

    if (nameInput === "")
    {
        alert(`Name is required ${nameInput}`);
    } 
    else
       {
        alert(`Hello ${nameInput}`);
       } 
    }
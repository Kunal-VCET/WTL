function showMessage() {
  alert("Welcome to Kunal Kadu's landing page!");
}

function featureClick(feature) {
  alert(feature + " selected!");
}

function validateForm() {
  let name  = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (name === "" || email === "") {
    alert("Please fill all fields!");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
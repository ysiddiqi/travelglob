function myNavlinks() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myCalendar() {
  var checkBox = document.getElementById("myCheck");
  var place = document.getElementById("place");
  if (checkBox.checked == true){
    place.style.display = "block";
  } else {
    place.style.display = "none";
  }
}
function myVehicle() {
  var checkBox2 = document.getElementById("myCheckbox");
  var vehicle = document.getElementById("vehicle");
  if (checkBox2.checked == true){
    vehicle.style.display = "block";
  } else {
     vehicle.style.display = "none";
  }
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "" || x == null) {
    alert("Please filled out all fields");
    return false;
  }
}

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
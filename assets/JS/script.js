var mainModal = document.getElementById("mainModal");
var myInput = document.getElementById("myInput");

var userLat;
var userLon;

navigator.geolocation.getCurrentPosition((data) => {
  userLon = data.coords.longitude;
  userLat = data.coords.latitude;
  userLocation(userLat, userLon);
});

function userLocation(lat, lon) {
  $.ajax({
    processData: false,
    url: `https://test1-api.rescuegroups.org/v5/public/animals/search/available/`,
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      Authorization: "LFSvPQMT",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        miles: 100,
        lat: lat,
        lon: lon,
      },
    }),
  }).then(function (data) {
    console.log(data.data);
    var selectEl = $("#animalSize").val();
    console.log(selectEl);
    var filteredAnimal = [];
    $.each(data.data, function (i, animal) {
      // write an if statement to check if the current object we are iterating over is equal to the value of that we store in selectEL
      if (animal.attributes.sizeGroup === selectEl) {
        console.log({ animal });
        filteredAnimal.push(animal);
      }
    });
    console.log(filteredAnimal);
  });
}

//modal
$("mainModal").click("shown.bs.modal"),
  function (event) {
    event.preventDefault;
    myInput.focus();
  };

//creating a click event for storing in local memory user name and preferences
$("#userMatchesBtn").click(function (event) {
  event.preventDefault();
  var userName = $("#nameInput").val();
  localStorage.setItem("Name", userName);
  console.log(userName);

  var animalSelection = $("#animalSelection").val();
  localStorage.setItem("animalType", animalSelection);

  var animalSize = $("#animalSize").val();
  localStorage.setItem("animalSize", animalSize);
});

//Startup page JS//
var modalButton = $("#userMatchesBtn");
console.log(modalButton);

//Switch HTML files **will not work until main html is connected, confirmed that it worked w/ a test html though.
modalButton.on("click", function () {
  window.location.replace("indexCarousel.html");
});

//Display name from local storage on main page
function displayName() {
  console.log(window.location.href);
  if (window.location.toString().includes("indexCarousel")) {
    var userName = localStorage.getItem("Name");
    document.querySelector("#message").textContent =
      "Welcome " + userName + "!";
  }
}
displayName();

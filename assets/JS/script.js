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
  })

    .then((data) => console.log(data))
    .catch((err) => console.log(err));
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
  if ((window.location.href = "index.html")) {
    window.location.replace("index2.html");
  }
});

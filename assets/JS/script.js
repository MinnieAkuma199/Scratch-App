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
$("mainModal").click("shown.bs.modal"),
  function (event) {
    event.preventDefault;
    myInput.focus();
  };

//Startup page JS//
var startDiv = $("#startup-page");
var mainDiv = $("#main-page");
var modalButton = $("#modal-submit");
console.log(modalButton);
//Hide main div on page startup
init();
function init() {
  mainDiv.hide();
}

//Hide startup div and show main div on modal click
modalButton.on("click", hideStart);

function hideStart() {
  startDiv.hide();
  mainDiv.show();
}

// // Submit info. from modal upon click as well as hide modal
// function submitModal() {
//   e.preventDefault();
//   mainModal.hide();
// }

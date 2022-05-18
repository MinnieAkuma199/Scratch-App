var mainModal = document.getElementById("mainModel");
var myInput = document.getElementById("myInput");

function getDogsNow() {
  $.ajax({
    url: "https://test1-api.rescuegroups.org/v5/public/animals/search/available/dogs/",
    method: "GET",
    headers: { Authorization: "LFSvPQMT" },
  }).then(function (response) {
    console.log(response);
    console.log(response.data[0].attributes);
  });
}
getDogsNow();

// Modal
$("mainModal").click("shown.bs.modal"),function (event) {
    event.preventDefault
    myInput.focus();
} 

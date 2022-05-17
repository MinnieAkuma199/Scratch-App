var myModal = document.getElementById("myModal");
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
$("myModal").click("shown.bs.modal"),function (event) {
    event.preventDefault
    myInput.focus();
}
// myModal.addEventListener("shown.bs.modal", function () {
  
// });

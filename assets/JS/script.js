var mainModal = $("#mainModal");
var myInput = $("#myInput");
var nameEl = $("#nameEl");
var nameEl1 = $("#nameEl1");
console.log(nameEl1);
var modalButton = $("#userMatchesBtn");
var pickMeBtn = $("#pickMeBtn");
var anotherDogBio = document.getElementById("anotherDogBio");
var userLat;
var userLon;

function geolocation() {
  navigator.geolocation.getCurrentPosition((data) => {
    userLon = data.coords.longitude;
    userLat = data.coords.latitude;
    userLocation(userLat, userLon);
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

  var animalSelection = $("#animalSelection").val();
  localStorage.setItem("animalType", animalSelection);

  var animalSize = $("#animalSize").val();
  localStorage.setItem("animalSize", animalSize);
});

//Startup page JS//
modalButton.on("click", function () {
  window.location.replace("indexCarousel.html");
});

//Display name from local storage on main page
function displayName() {
  console.log(window.location.href);
  if (window.location.toString().includes("indexCarousel")) {
    // console.log("test");
    var userName = localStorage.getItem("Name");
    document.querySelector("#message").textContent =
      "Welcome to the dog pack, " + userName + "!";
  }
}
displayName();

// pulling array from API and sorting based on user location and size preference
function userLocation(lat, lon) {
  $.ajax({
    processData: false,
    url: `https://test1-api.rescuegroups.org/v5/public/animals/search/available/dogs/`,
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
    var selectEl = localStorage.getItem("animalSize");
    // console.log(selectEl);
    $.each(data.data, function (i, animal) {
      // if statement to check if the current object we are iterating over is equal to the value of that we store in selectEL
      for (let i = 0; i < 25; i++)
        if (animal.attributes.sizeGroup === selectEl) {
          // console.log({ animal });
          // filteredAnimal.push(animal);
          displayData(animal);
        }
    });
  });
}
geolocation();
userLocation();

function displayData(filteredAnimal) {
  for (let i = 0; i < 25; i++) {
    var div = document.createElement("div");
    var dogName = document.createElement("h1");
    dogName.textContent = "Dog Name: " + filteredAnimal.attributes.name;
    var dogSize = document.createElement("p");
    dogSize.textContent = "Size: " + filteredAnimal.attributes.sizeGroup;
    var dogSex = document.createElement("p");
    dogSex.textContent = "Sex: " + filteredAnimal.attributes.sex;
    var dogBio = document.createElement("p");
    dogBio.textContent = filteredAnimal.attributes.descriptionText;
    div.append(dogName, dogSize, dogSex, dogBio);
    nameEl.append(div);
    console.log(filteredAnimal);
    if (i === 1) {
      // break;
    } else end;
  }
  // displayData();
}

function displayData(filteredAnimal) {
  for (let i = 0; i < 25; i++) {
    var div = document.createElement("div");
    var dogName = document.createElement("h1");
    dogName.textContent = "Dog Name: " + filteredAnimal.attributes.name;
    var dogSize = document.createElement("p");
    dogSize.textContent = "Size: " + filteredAnimal.attributes.sizeGroup;
    var dogSex = document.createElement("p");
    dogSex.textContent = "Sex: " + filteredAnimal.attributes.sex;
    var dogBio = document.createElement("p");
    dogBio.textContent = filteredAnimal.attributes.descriptionText;
    div.append(dogName, dogSize, dogSex, dogBio);
    nameEl1.append(div);
    console.log(filteredAnimal);
    if (i === 1) {
      // break;
    } else end;
  }
  // displayData();
}

$("#pickMeBtn").click(function (event) {
  event.preventDefault();
  alert("And I pick you!!! Now come and adopt me.");
});

//Carousel fetch images

// =====================

//Carousel fetch images

//Function
var dogImageRandom = document.getElementById("dogImageRandom");

function getRandomDogImage() {
  var randomDogImageApiUrl = "https://dog.ceo/api/breeds/image/random";
  // console.log(randomImageApiUrl);
  fetch(randomDogImageApiUrl)
    .then(function (response) {
      return response.json();
    })
    //write for loop here, image p1 anchor, dynamically create new div - see if 5 are created, start small (could not do it, found another way)
    .then(function (json) {
      console.log(json);
      var imageUrl = json.message;
      //update the image with new random dog
      dogImageRandom.src = imageUrl;
    })
    .catch(function (error) {
      // catch errors
      console.log(error);
    });
}

//call the getRandomDogImage function whenever page loads
//BUT NEED to get new IMAGE when clicking next button, fixed it by manually resetting
getRandomDogImage();

//I am having trouble figuring out appending the div and constructing everything with the for loop. I just need to go back and do a lot of those exercises. But for now, I am doing this in a way I can figure out that is still calling to the API and meets requirements. This fix involves creating a number of slides and running pretty much the same function to get a random image. Let's see if I can actually figure it out. -- Yay, I did.

//Function1
var dogImageRandom1 = document.getElementById("dogImageRandom1");

function getRandomDogImage1() {
  var randomDogImageApiUrl = "https://dog.ceo/api/breeds/image/random";
  // console.log(randomImageApiUrl);

  fetch(randomDogImageApiUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (json) {
      console.log(json);
      var imageUrl = json.message;

      dogImageRandom1.src = imageUrl;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getRandomDogImage1();

//Function2
var dogImageRandom2 = document.getElementById("dogImageRandom2");

function getRandomDogImage2() {
  var randomDogImageApiUrl = "https://dog.ceo/api/breeds/image/random";
  // console.log(randomImageApiUrl);

  fetch(randomDogImageApiUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (json) {
      console.log(json);
      var imageUrl = json.message;

      dogImageRandom2.src = imageUrl;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getRandomDogImage2();

//Function3
var dogImageRandom3 = document.getElementById("dogImageRandom3");

function getRandomDogImage3() {
  var randomDogImageApiUrl = "https://dog.ceo/api/breeds/image/random";
  // console.log(randomImageApiUrl);

  fetch(randomDogImageApiUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (json) {
      console.log(json);
      var imageUrl = json.message;

      dogImageRandom3.src = imageUrl;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getRandomDogImage3();

console.log('%c HI', 'color: firebrick')

// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array

document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();
    filterBreeds();
});

function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function renderImages(json) {
    const main = document.getElementById("dog-image-container");
    json.message.forEach(image => {
        const img = document.createElement("img");
        img.src = image;
        main.appendChild(img);
    });
}

// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json) {
    const ul = document.getElementById("dog-breeds");
    const breeds = Object.keys(json.message);
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener("click", function() {
            li.style.color = "red";
        });
    });
}

// Once all of the breeds are rendered in the <ul>,
// add JavaScript so that, when the user clicks on any one of the <li>s,
// the font color of that <li> changes

// Once we are able to load all of the dog breeds onto the page,
// add JavaScript so that the user can filter breeds that start with a particular letter
// using a dropdown.

function filterBreeds() {
    const dropdown = document.getElementById("breed-dropdown");
    dropdown.addEventListener("change", function() {
        const ul = document.getElementById("dog-breeds");
        const breeds = ul.getElementsByTagName("li");
        for (let i = 0; i < breeds.length; i++) {
            if (breeds[i].innerText.startsWith(dropdown.value)) {
                breeds[i].style.display = "";
            } else {
                breeds[i].style.display = "none";
            }
        }
    });
}

// For example, if the user selects 'a' in the dropdown,
// only show the breeds with names that start with the letter a.
// For simplicity, the dropdown only includes the letters a-d.
// However, we can imagine expanding this to include the entire alphabet
// by using the array ['a', 'b', 'c', 'd', ...].

// Challenge yourself even further by adding a filter for breeds that start with a particular letter AND
// have a particular background color. For instance, clicking on the dropdown menu and selecting 'a'
// should show only show the 'a' breeds that also have a background color of pink.



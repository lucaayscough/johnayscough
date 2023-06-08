// Store the image URLs in an object with different categories
var imageUrls = {
    painting: [
        "images/painting/001.jpg",
        "images/painting/002.jpg",
        "images/painting/003.jpg",
        "images/painting/004.jpg",
        "images/painting/005.jpg",
        "images/painting/006.jpg",
        "images/painting/007.jpg",
        "images/painting/008.jpg",
        "images/painting/009.jpg",
        "images/painting/010.jpg",
        "images/painting/011.jpg",
        "images/painting/012.jpg",
    ],
    sculpture: [
        "images/sculpture/001.jpg",
        "images/sculpture/002.jpg",
        "images/sculpture/003.jpg",
        "images/sculpture/004.jpg",
        "images/sculpture/005.jpg",
        "images/sculpture/006.jpg",
        "images/sculpture/007.jpg",
        "images/sculpture/008.jpg",
        "images/sculpture/009.jpg"
    ],
    ots: [
        "images/ots/001.jpg",
        "images/ots/002.jpg",
        "images/ots/003.jpg",
        "images/ots/004.jpg",
        "images/ots/005.jpg",
        "images/ots/006.jpg",
        "images/ots/007.jpg",
        "images/ots/008.jpg",
        "images/ots/009.jpg",
        "images/ots/010.jpg",
        "images/ots/011.jpg",
        "images/ots/012.jpg",
    ]
};

// Get the necessary elements
var galleryImage = document.getElementById("galleryImage");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

function getId() {
    var url = window.location.href;
    var id = url.split("#")[1]; 
    return id;
}

function updateCategory(_category) {
    currentCategory = _category;
}

// Set the initial category and image index
var currentCategory = "";
var id = getId();

if (id) {
    currentCategory = id;
}

else {
    currentCategory = "painting";
}

var currentImageIndex = 0;

// Function to update the displayed image
function updateImage() {
    id = getId(); 

    if (id !== currentCategory && id !== undefined) {
        currentImageIndex = 0;
    }

    galleryImage.src = imageUrls[currentCategory][currentImageIndex];
}

// Event listener for the previous button
prevButton.addEventListener("click", function() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = imageUrls[currentCategory].length - 1;
    }
    updateImage();
});

// Event listener for the next button
nextButton.addEventListener("click", function() {
    if (currentImageIndex < imageUrls[currentCategory].length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateImage();
});

// Function to handle category change
function changeCategory(category) {
    currentCategory = category;
    currentImageIndex = 0;
    updateImage();
}

// Initially update the displayed image
updateImage();
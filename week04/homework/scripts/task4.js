/* Lesson 4 */
/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myInfo = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Nefi Perez",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: "images/MyPicture.jpg",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: [
        "BBQ", "Spaguetti", "Pizza", "Fries", "Milkshakes"
    ],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: [
        "Photography", "Camping", "Running", "Listening to music", "Movies"
    ],
// Step 6: Add another property named placesLived with a value of an empty array
    placesLived: [
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
        {
            place: "Santa Rosa, Guatemala",
            length: "14 years"
        },
        {
            place: "Guatemala City, Guatemala",
            length: "8 years"
        },
        {
            place: "San Juan, Puerto Rico",
            length: "18 months"
        },
        {
            place: "Colorado Springs, US",
            length: "5 months"
        }
    ]
};

/* 
});*/
/* OUTPUT */
// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute('src', myInfo.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt", myInfo.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myInfo.favoriteFoods.forEach((food) => {
    let foodElement = document.createElement('li');
    foodElement.textContent = food;
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector("#favorite-foods").appendChild(foodElement);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myInfo.hobbies.forEach((hobbie) => {
    let hobbieElement = document.createElement('li');
    hobbieElement.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(hobbieElement);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
myInfo.placesLived.forEach((placeLived) => {
    let placesElement = document.createElement('dt');
    placesElement.textContent = placeLived.place;

    let lengthElement = document.createElement('dd');
    lengthElement.textContent = placeLived.length;

    document.querySelector("#places-lived").appendChild(placesElement);
    document.querySelector("#places-lived").appendChild(lengthElement);
});

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

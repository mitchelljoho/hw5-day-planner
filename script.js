var localStorage = window.localStorage;
var hourCard = document.getElementById("content-card");
var timeArr = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var button = document.querySelector(".save-button");

// -----------------------------------------------------------------
// checks if localstorage already exits, and if not, sets a blank json object to work with
var blankSched = {
    "9": "a",
    "10": "b",
    "11": "c",
    "12": "d",
    "1": "e",
    "2": "f",
    "3": "g",
    "4": "h",
    "5": "i",
}

if (localStorage.getItem("schedule") === undefined) {
    localStorage.setItem("schedule", JSON.stringify(blankSched));
}

var schedule = JSON.parse( localStorage.getItem("schedule") );
var keys = Object.keys(schedule);
var values = Object.values(schedule);
// -----------------------------------------------------------------

// draws all time cards from the 
function drawCards() {
    for(var i = 9; i < (keys.length); i++){

        var newCard = document.createElement("div");
        newCard.setAttribute("class", "hour-card");

        var saveButton = document.createElement("button");
        saveButton.setAttribute("class", "col-1 save-button");
        saveButton.setAttribute("value", keys[i]);
        saveButton.textContent = "Save";

        var inputCard = document.createElement("input");
        inputCard.setAttribute("type", "text");
        inputCard.setAttribute("class", "col-10");
        // set background color depending on the time of day
        inputCard.textContent = values[i];

        var timeCard = document.createElement("div");
        timeCard.setAttribute("class", "col-1");
        timeCard.setAttribute("style", "text-align: right;");

        newCard.appendChild(saveButton);
        newCard.appendChild(inputCard);
        newCard.appendChild(timeCard);

        hourCard.appendChild(newCard);

    }
}

document.addEventListener("click", function(e) {
    if(e.target.textContent = "Save") {
        var value = e.target.value;
        var index = keys.indexOf(value);
        
    }
})
var localStorage = window.localStorage;
var hoursCard = document.getElementById("content-card");
var clearButton = document.getElementById("reset-button");

// -----------------------------------------------------------------
// checks if localstorage already exits, and if not, sets a blank json object to work with
var blankSched = ["", "", "", "", "", "", "", "", ""];

var testLocal = localStorage.getItem("schedule");
if (testLocal === null) {
    localStorage.setItem("schedule", JSON.stringify(blankSched));
}

var timeArr = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var schedule = JSON.parse( localStorage.getItem("schedule") );
// -----------------------------------------------------------------

// sets current date
var timeCard = document.getElementById("time");
var currentTime = moment().format('dddd MMMM Do');
timeCard.textContent = currentTime;

// get current hour
var curHour = moment().format('h');

// draws all time cards from the local storage
function drawCards() {
    for(var i = 0; i < (timeArr.length); i++){
        var newCard = document.createElement("div");
        newCard.setAttribute("class", "hour-card");

        var saveButton = document.createElement("button");
        saveButton.setAttribute("class", "col-1 save-button");
        saveButton.setAttribute("value", timeArr[i]);
        saveButton.textContent = "Save";

        var inputCard = document.createElement("input");
        inputCard.setAttribute("type", "text");
        inputCard.setAttribute("id", "text");
        inputCard.setAttribute("class", "col-10");
        // set background color depending on the time of day
        var timeIndex = timeArr.indexOf(curHour);
        if(timeIndex > i){
            inputCard.setAttribute("style", "background-color: grey");
        } else if(timeIndex == i){
            inputCard.setAttribute("style", "background-color: red");
        } else if(){
            inputCard.setAttribute("style", "background-color: green");
        }
        if(timeIndex === -1){inputCard.setAttribute("style", "background-color: grey");}

        inputCard.value = schedule[i];

        var timeCard = document.createElement("div");
        timeCard.setAttribute("class", "col-1");
        timeCard.setAttribute("style", "text-align: right;");
        if(i > 2){
            timeCard.textContent = timeArr[i] + "pm";
        } else {
            timeCard.textContent = timeArr[i] + "am";
        }

        newCard.appendChild(saveButton);
        newCard.appendChild(inputCard);
        newCard.appendChild(timeCard);

        newCard.addEventListener("click", function(e) {
            if(e.target.localName === "button") {
                var value = e.target.value;
                var index = timeArr.indexOf(value);
                var text = e.path[1].children[1].value;
                schedule[index] = text;
                localStorage.setItem("schedule", JSON.stringify(schedule));
            }
        });

        hoursCard.appendChild(newCard);

    }
}

clearButton.addEventListener("click", function(e) {
    schedule = ["", "", "", "", "", "", "", "", ""];
    localStorage.setItem("schedule", JSON.stringify(schedule));
    hoursCard.innerHTML = "";
    location.reload();
});

drawCards();


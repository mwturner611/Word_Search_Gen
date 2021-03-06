// collect user input from form
let userWords = [document.getElementById("word1"),
                document.getElementById("word2"),
                document.getElementById("word3"),
                document.getElementById("word4"),
                document.getElementById("word5"),
                document.getElementById("word6"),
                document.getElementById("word7"),
                document.getElementById("word8"),
                document.getElementById("word9"),
                document.getElementById("word10")
            ];
let title = document.getElementById("titleWord");

// handle the form submit
const submitForm = () => {
    let wordArray = createWordArray();

    if (wordArray.length <= 0){
        return;
    }
    let titleWord = title.value;

    window.localStorage.setItem("titleWord",JSON.stringify(titleWord));

    window.localStorage.setItem("puzzle1",JSON.stringify(wordArray));
       
    window.location.href = "grid.html";
}


// When form is submitted validate contents of form and create clean array of words
const createWordArray = () => {

    // enpty array for the words
    let finalArray = [];

    // loop through the possible 10 words
    for (let i =0; i < 10; i++){

        // ck if the words are too long and trigger message to screen
        if (userWords[i].value.length !== undefined && userWords[i].value.length > 14) {
            let word = userWords[i].value;
            alertWords("smallHeader",word);
            return [];
        }
        // if the field has an acceptable value, send it to the finalArray
        else if (userWords[i].value.length > 0 && userWords[i].value.length < 15){

            let word = userWords[i].value.toUpperCase().split("");

            finalArray.push(word);
        }
    }
    return(finalArray);
};

// present a message to a specific location on screen
const alertWords = (id,word) => {
    let h5 = document.createElement("h5");

    let longWord = document.createTextNode("Please only enter words shorter than 14 characters "+ word + " is too long");

    h5.appendChild(longWord);

    document.getElementById(id).appendChild(h5).style.color = "red";

    return;
};

// clear the words in the form
const resetForm = () => {
    for (let i = 0; i < userWords.length; i++){
        userWords[i].value = "";
    }
}

//create on click events for buttons
document.getElementById("submit").addEventListener("click", submitForm);
document.getElementById("reset").addEventListener("click", resetForm);
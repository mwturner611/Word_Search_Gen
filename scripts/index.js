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

const submitForm = () => {

    let finalArray = [];

    for (let i =0; i < 10; i++){
        if (userWords[i].value.length !== undefined && userWords[i].value.length > 14) {
            let word = userWords[i].value;
            alertWords("smallHeader",word);
            return;
        }
        else if (userWords[i].value.length > 0 && userWords[i].value.length < 15){

            let word = userWords[i].value.toUpperCase().split("");

            finalArray.push(word);
        }
    }
    console.log(finalArray);

}

const alertWords = (id,word) => {

    let h5 = document.createElement("h5");

    let longWord = document.createTextNode("Please only enter words shorter than 14 characters "+ word + " is too long");

    h5.appendChild(longWord);

    document.getElementById(id).appendChild(h5).style.color = "red";
};

const resetForm = () => {
    console.log("Now they'd be gone");
}

document.getElementById("submit").addEventListener("click", submitForm);
document.getElementById("reset").addEventListener("click", resetForm);
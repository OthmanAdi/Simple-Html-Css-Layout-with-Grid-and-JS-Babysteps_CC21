let name = "Tom"; //String
let age = 24 //Integer
let currecny = "$" // Char
let isInClass = true //Boolean
let classProgress = 93.2 //float
let Students = ["Tom", "Danil", "Sandra", "Dotun", "Jenny", "Francisco", "Damir", "Elisa", "Victor"]

function helloJS() {
    console.log("Hello World from: " + Students[8]);
    // alert("I LOVE CODE <3 <3 <3")
}

function RandomColor() {
    document.querySelector(".Content").style.color = generateHex();
}

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// three var's that make accessing the html elements easier and quicker for the js algo
let todoInputField = document.querySelector("#todoInput");
let submitTodoBtn = document.querySelector(".TodoSubmit");
let todoBodyUL = document.querySelector(".myUL");

submitTodoBtn.addEventListener("click", () => {
//call the input-field to extract the value
    let extractedText = todoInputField.value;
    // console.log(extractedText)
    let extracted2DText = document.createTextNode(extractedText);

    // create virtual ListItem to store the extracted2DText
    let textNodeListItem = document.createElement("li");

    textNodeListItem.appendChild(extracted2DText);

    todoBodyUL.appendChild(textNodeListItem);

    extractedText.value = ""; //resetting the input-field
})
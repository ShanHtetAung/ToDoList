const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputField = document.querySelector(".row");

function addTask() {
    
    if (inputBox.value == "") {
        inputField.classList.add("shake");
        alert("you must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    setTimeout(()=>{ //remove shake class after 500ms
        inputField.classList.remove("shake");
        
    }, 500);

    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();   
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);  //save data in the browser
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");  // get data from the browser
}

showTask();
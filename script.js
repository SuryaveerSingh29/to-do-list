const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addtask() {
  if (inputbox.value === '') {
    alert("You Must Write Something")
  }

  else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }

  inputbox.value = '';
  saveData()
}


listContainer.addEventListener("click",(e)=> {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  }

  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }



}, false);


function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask()


function setBackgroundByTime() {
  const hour = new Date().getHours();
  const container = document.querySelector(".container");

  if (hour >= 6 && hour < 18) {
    container.classList.add("day");
    container.classList.remove("night");
    click.classList.add("day");
  } else {
    container.classList.add("night");
    container.classList.remove("day");
    click.classList.add("night");



  }
}

setBackgroundByTime();


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const mode = document.getElementById("mode");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML =
      inputBox.value.charAt(0).toUpperCase() + inputBox.value.slice(1);
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    mode.src = "images/moon.svg";
    localStorage.setItem("theme", "dark");
  } else {
    mode.src = "images/sun.svg";
    localStorage.setItem("theme", "light");
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");

  if (localStorage.getItem("theme") === "dark") {
    mode.src = "images/moon.svg";
    document.body.classList.add("dark-theme");
  }
}

showTask();

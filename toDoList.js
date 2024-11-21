function addCloseButton(li) {
    const span = document.createElement("SPAN");
    span.className = "close";
    span.textContent = "\u00D7";
    li.appendChild(span);
  
    span.addEventListener("click", () => {
      li.style.display = "none";
    });
  }
  
  const myNodelist = document.querySelectorAll("li");
  myNodelist.forEach((li) => addCloseButton(li));
  
  const list = document.querySelector("ul");
  if (list) {
    list.addEventListener("click", (ev) => {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    });
  }
  
  function newElement() {
    const input = document.getElementById("myInput");
    const inputValue = input.value.trim();
  
    if (!inputValue) {
      alert("You must write something!");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = inputValue;
    addCloseButton(li);
    document.getElementById("myUl").appendChild(li);
  
    input.value = "";
  }
  
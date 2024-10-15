const input = document.querySelector("input");
const button = document.querySelector("button");
const listContainer = document.getElementById("list-container");

button.addEventListener("click", () => {
  if (input.value === "") {
    alert("کادر نمی تواند خالی باشد");
  } else {
    let ul = document.createElement("ul");
    ul.classList = "list-unstyled mb-0";
    listContainer.appendChild(ul);
    listContainer.classList = "mt-3";
    let li = document.createElement("li");
    li.classList ="w-50 bg-white mx-auto rounded-2 p-3 my-1 d-flex justify-content-between fs-3";
    ul.appendChild(li);
    li.textContent = input.value;
    let span = document.createElement("span");
    let icon = document.createElement("i");
    li.appendChild(span);
    li.style.cursor="context-menu"
    icon.className = "bi bi-x-lg";
    span.appendChild(icon);
    icon.style.cursor = "pointer";
    icon.addEventListener("click", () => {
      li.remove();
    });
    li.addEventListener("click",()=> {
      li.classList="text-danger w-50 bg-white mx-auto rounded-2 p-3 my-1 d-flex justify-content-between text-decoration-line-through fs-3"
      icon.style.color='white'
    })
  }
  input.value = "";
});

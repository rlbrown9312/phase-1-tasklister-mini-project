document.addEventListener("DOMContentLoaded", () => {
})

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault() 
    taskAdder(e.target.description.value)
})

function taskAdder(toDo) {
  const p = document.createElement("p");
  const object = document.createElement("button");
  p.textContent = toDo
  object.textContent = "x"

  object.addEventListener("click", deleteParent)
  p.appendChild(object)
  tasks.appendChild(p)
}

function deleteParent(e) {
e.target.parentNode.remove()
}
 





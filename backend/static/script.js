function loadTodos() {
  fetch("/todos")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("todoList");
      list.innerHTML = "";

      data.forEach(todo => {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = todo.title;
        if (todo.status === "done") {
          text.style.textDecoration = "line-through";
        }

        // Complete button
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "✓";
        doneBtn.onclick = () => updateTodo(todo.id, { status: "done" });

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => {
          const newTitle = prompt("Edit todo", todo.title);
          if (newTitle) {
            updateTodo(todo.id, { title: newTitle });
          }
        };

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTodo(todo.id);

        li.append(text, doneBtn, editBtn, deleteBtn);
        list.appendChild(li);
      });
    });
}


function addTodo() {
  const input = document.getElementById("todoInput");
  fetch("/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: input.value })
  }).then(() => {
    input.value = "";
    loadTodos();
  });
}

function updateTodo(id, data) {
  fetch(`/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(loadTodos);
}

function deleteTodo(id) {
  fetch(`/todos/${id}`, {
    method: "DELETE"
  }).then(loadTodos);
}


loadTodos();

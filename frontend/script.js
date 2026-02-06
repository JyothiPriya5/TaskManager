// Page Navigation
function showHome() {
  hideAll();
  document.getElementById("homePage").classList.add("active");
}

function showTasks() {
  hideAll();
  document.getElementById("taskPage").classList.add("active");
}

function showAbout() {
  hideAll();
  document.getElementById("aboutPage").classList.add("active");
}

function hideAll() {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });
}

// To Show Home by default
showHome();

const api = "http://localhost:5000/api/tasks";

const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const statusInput = document.getElementById("status");
const form = document.getElementById("taskForm");

//To Load all tasks
async function loadTasks() {
  const res = await fetch(api);
  const tasks = await res.json();
  let html = "";
  tasks.forEach((t) => {
    let statusClass = "";
    if (t.status === "Pending") statusClass = "status-pending";
    if (t.status === "In Progress") statusClass = "status-progress";
    if (t.status === "Completed") statusClass = "status-completed";
    html += `
      <tr id="task-${t._id}">
        <td>${t.title}</td>
        <td>${t.description}</td>
        <td>
          <select id="status-${t._id}">
            <option value="Pending" ${t.status === "Pending" ? "selected" : ""}>Pending</option>
            <option value="In Progress" ${t.status === "In Progress" ? "selected" : ""}>In Progress</option>
            <option value="Completed" ${t.status === "Completed" ? "selected" : ""}>Completed</option>
          </select>
        </td>
        <td>
          <button class="btn btn-save" onclick="saveTask('${t._id}')">
            Save
          </button>
          <button class="btn btn-delete" onclick="deleteTask('${t._id}')">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
  document.getElementById("taskList").innerHTML = html;
}

//To Add Task
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const task = {
    title: titleInput.value,
    description: descInput.value,
    status: statusInput.value,
  };
  await fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  titleInput.value = "";
  descInput.value = "";
  statusInput.value = "Pending";
  loadTasks();
});

//To Enable Edit Mode
function enableEdit(id) {
  document.getElementById(`status-${id}`).disabled = false;
  const card = document.getElementById(`task-${id}`);
  card.querySelector(".edit-btn").style.display = "none";
  card.querySelector(".save-btn").style.display = "inline-block";
}

//To Save Edited Task
async function saveTask(id) {
  const newStatus = document.getElementById(`status-${id}`).value;
  await fetch(api + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: newStatus,
    }),
  });
  loadTasks();
}

//To Delete Task
async function deleteTask(id) {
  await fetch(api + "/" + id, {
    method: "DELETE",
  });
  loadTasks();
}

// Initial Load
loadTasks();

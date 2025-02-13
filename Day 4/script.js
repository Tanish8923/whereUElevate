function addTask() {
    const taskName = document.getElementById("taskName").value;
    const taskDesc = document.getElementById("taskDesc").value;
    const taskDeadline = document.getElementById("taskDeadline").value;
    
    if (!taskName || !taskDesc || !taskDeadline) {
        alert("Please fill in all fields.");
        return;
    }
    
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <div class="task-content">
            <strong>${taskName}</strong><br>
            ${taskDesc}<br>
            <em>${taskDeadline}</em>
        </div>
        <div class="task-actions">
            <input type="checkbox" class="task-status" onchange="toggleTaskStatus(this)">
            <span class="task-status-label">Incomplete</span>
            <button class="delete-btn" onclick="deleteTask(this)">❌</button>
        </div>
    `;
    
    taskList.prepend(taskItem);
    
    document.getElementById("taskName").value = "";
    document.getElementById("taskDesc").value = "";
    document.getElementById("taskDeadline").value = "";
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

function toggleTaskStatus(checkbox) {
    const taskContent = checkbox.parentElement.previousElementSibling;
    const statusLabel = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskContent.style.textDecoration = "line-through";
        statusLabel.textContent = "Complete";
    } else {
        taskContent.style.textDecoration = "none";
        statusLabel.textContent = "Incomplete";
    }
}

document.getElementById("submitBtn").addEventListener("click", addTask);
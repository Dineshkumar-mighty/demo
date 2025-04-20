<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f4f8;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      text-align: center;
      width: 300px;
    }

    input {
      width: 70%;
      padding: 8px;
      margin-top: 10px;
    }

    button {
      padding: 8px 12px;
      margin-left: 5px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-top: 20px;
    }

    li {
      background: #e3f2fd;
      margin-bottom: 8px;
      padding: 10px;
      border-radius: 6px;
      text-align: left;
      position: relative;
      cursor: pointer;
    }

    li:hover {
      background-color: #bbdefb;
    }

    li::after {
      content: '❌';
      position: absolute;
      right: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Add a new task..." />
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>
  </div>

  <script>
    function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.textContent = taskText;

      li.addEventListener("click", () => {
        li.remove();
      });

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  </script>
</body>
</html>

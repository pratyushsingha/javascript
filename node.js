const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Todo List</title>
  </head>
  
  <body>
      <div class="flex justify-between">
          <p class="mx-3 my-4 text-2xl font-extrabold flex justify-center items-center">Todo WebApp</p>
          <img width="50" height="50" src="https://img.icons8.com/ios/50/day-and-night.png" id="theme"
              class="cursor-pointer mx-5 w-10 h-10 my-5" alt="day-and-night" />
      </div>
      <div class="flex justify-center items-center">
          <input
              class="border rounded leading-tight focus:outline-none focus:shadow-outline px-6 py-4 outline-black bg-gray-300"
              type="text" placeholder="Enter TODO">
      </div>
      <div class="flex justify-center items-center my-3">
          <button type="submit"
              class="bg-purple-600 px-4 py-3 text-white font-extrabold hover:scale-125 hover:rotate-180 rounded-lg">Save</button>
      </div>
      <div class="result mx-10 my-4 flex-col">
  
      </div>
  
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
          const input = document.querySelector('input');
          const button = document.querySelector('button');
          const resultDiv = document.querySelector('.result');
          const theme = document.getElementById('theme');
  
  
          const todo = () => {
              const inputValue = input.value;
              if (inputValue === "") {
                  alert("Please enter a TODO 🥲");
                  return;
              }
              else {
                  let todoDiv = document.createElement("div");
                  let todoPara = document.createElement("p");
                  todoPara.innerText = inputValue;
                  todoPara.setAttribute("class", "paras flex justify-between text-gray-700 font-extrabold px-2 py-2 text-justify bg-gray-300 rounded-lg px-4 py-4");
                  let deleteButton = document.createElement("button");
                  deleteButton.innerHTML = "Delete";
                  deleteButton.setAttribute("class", "bg-red-600 px-4 py-3 text-white font-extrabold hover:scale-125 rounded-lg my-3");
                  deleteButton.addEventListener("click", () => {
                      resultDiv.removeChild(todoDiv);
                  })
                  let time = document.createElement("p");
                  time.innerText = new Date().toLocaleTimeString();
                  todoPara.append(time)
                  todoDiv.append(todoPara, deleteButton);
                  resultDiv.append(todoDiv);
                  input.value = "";
              }
          }
  
          button.addEventListener("click", todo);
          input.addEventListener("keypress", (e) => {
              if (e.key === "Enter") {
                  todo();
              }
          })
          theme.addEventListener("click", () => {
              document.body.classList.toggle("bg-gray-600");
              document.body.classList.toggle("text-white");
          });
  
      </script>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
import './style.css';
import Task from './scripts/task.js';

//handle theme
const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
      return 'light';
  })();
      
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  window.localStorage.setItem('theme', theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    
    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  document.getElementById("themeToggle").addEventListener("click", handleToggleClick);


  //handle popover
  const profilePopover = document.getElementById('profile-popover');
  const profileButton = document.getElementById('profile');

  profileButton.addEventListener('click', () => {
      profilePopover.classList.toggle('show');
  });


  function handleViewPopover(){
  const viewPopover = document.getElementById('view-popover');
  const viewButton = document.getElementById('view');
  const viewArrow = document.getElementById('view-arrow');

  viewButton.addEventListener('click', () => {
      viewPopover.classList.toggle('show');
      viewArrow.classList.toggle('down');
      viewArrow.classList.toggle('up');
  });

  //handle click outside
window.addEventListener('click', (e) => {
  if (!viewButton.contains(e.target)) {
      viewPopover.classList.remove('show');
      viewArrow.classList.add('down');
      viewArrow.classList.remove('up');
  }
});
}

handleViewPopover();

  function handleSortPopover(){
  const sortPopover = document.getElementById('sort-popover');
  const sortButton = document.getElementById('sort');
  const sortArrow = document.getElementById('sort-arrow');

  sortButton.addEventListener('click', () => {
      sortPopover.classList.toggle('show');
      sortArrow.classList.toggle('down');
      sortArrow.classList.toggle('up');
  });

  //handle click outside
window.addEventListener('click', (e) => {
  if (!sortButton.contains(e.target)) {
      sortPopover.classList.remove('show');
      sortArrow.classList.add('down');
      sortArrow.classList.remove('up');
  }
});
};

handleSortPopover();

//handle click outside
window.addEventListener('click', (e) => {
    if (!profileButton.contains(e.target)) {
        profilePopover.classList.remove('show');
    }
    if (!addProject.contains(e.target)) {
      addProject.classList.remove('active');
    }
});

//handle sidebar items
let items = document.querySelectorAll(".item");

items.forEach(item=>{
  item.addEventListener("click", (event)=>{
    items.forEach(item=>{ 
      item.classList.remove("active");
    });

    event.currentTarget.classList.add("active");
  });
});

//handle add project button
const addProject = document.getElementById('addProject');
addProject.addEventListener('click', () => {
  addProject.classList.toggle('active');
});

function handleCbx(){
const taskCbx = document.querySelectorAll('.task-cbx');

taskCbx.forEach(cbx => {
  cbx.addEventListener('click', () => {
    const index = cbx.getAttribute('data-cbx-index');
    const title = document.querySelector(`[data-title-index="${index}"]`);
    const options = document.querySelector(`[data-options-index="${index}"]`);
    const bg = document.querySelector(`[data-bg-index="${index}"]`);
    const task = tasks[index];

    // Backend Code to update completed field
    const id = bg.getAttribute('data-task-id');
    var csrfToken = document.cookie.match(/csrftoken=(.+)/)[1];
    $.ajax({
      async: false,
      url: 'http://localhost:3000/tasks/' + id + '/',
      type: 'PATCH',
      headers: {
        'X-Csrftoken': csrfToken,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        completed: !task.isCompleted
      }),
      success: function(data) {
        console.log(task.isCompleted);
        console.log('true');
      }
    });
    
    // End of backend code


    if(cbx.checked){
      title.style.textDecoration = 'line-through';
      title.style.opacity = '0.7';
      bg.style.background = 'transparent';
      bg.style.boxShadow = 'none';
      options.innerHTML = `<button class="delete-task" data-delete-index="${index}">
      <svg class="fill-[var(--tertiary)] transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
      </svg>
  </button>`;
    } else {
      title.style.textDecoration = 'none';
      title.style.opacity = '1';
      bg.style.background = 'var(--task-bg)';
      bg.style.boxShadow = 'var(--task-shadow)';
      options.innerHTML = `<button class="delete-task hidden" data-delete-index="${index}">
      <svg class="fill-[var(--tertiary)] transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
      </svg>
  </button>
      <button>
      <svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>
      </svg>
  </button>
  ${task.star ? `<input id="star-cbx" class="star-cbx appearance-none m-0 hover:cursor-pointer" type="checkbox" checked></input>
<label for="star-cbx">
<svg class="fill-[var(--secondary)] transition-all ease-out hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32">
<path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"></path>
</svg>
</label> ` 
: `<input class="star-cbx appearance-none m-0 hover:cursor-pointer" type="checkbox"></input>
<label for="star-cbx">
<svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32">
<path d="M 16 2.125 L 15.09375 4.1875 L 11.84375 11.46875 L 3.90625 12.3125 L 1.65625 12.5625 L 3.34375 14.0625 L 9.25 19.40625 L 7.59375 27.21875 L 7.125 29.40625 L 9.09375 28.28125 L 16 24.28125 L 22.90625 28.28125 L 24.875 29.40625 L 24.40625 27.21875 L 22.75 19.40625 L 28.65625 14.0625 L 30.34375 12.5625 L 28.09375 12.3125 L 20.15625 11.46875 L 16.90625 4.1875 Z M 16 7.03125 L 18.5625 12.8125 L 18.8125 13.34375 L 19.375 13.40625 L 25.65625 14.0625 L 20.96875 18.28125 L 20.53125 18.6875 L 20.65625 19.25 L 21.96875 25.40625 L 16.5 22.28125 L 16 21.96875 L 15.5 22.28125 L 10.03125 25.40625 L 11.34375 19.25 L 11.46875 18.6875 L 11.03125 18.28125 L 6.34375 14.0625 L 12.625 13.40625 L 13.1875 13.34375 L 13.4375 12.8125 Z"></path>
</svg>
</label>`}`;
const deleteTaskBtn = document.querySelector(`[data-delete-index="${index}"]`);
  deleteTaskBtn.addEventListener('click', () => {
    handleDeleteTask(index);
  });
handleStar();
    }
  })
});
}


handleCbx();

function handleStar(){
  const starCbx = document.querySelectorAll('.star-cbx');
  starCbx.forEach((cbx, index) => {
    cbx.addEventListener('click', () => {
      tasks[index].toggleStar();
      renderTasks();
      handleCbx();
      handleSortPopover();
      handleViewPopover();
    });
  });
}


let tasks = [];


// Backend code to retrieve all tasks and put them in the task array
$.ajax({
  async:'false',
  url: 'http://localhost:3000/tasks',
  type: 'GET',
  success: function(data){
    data.forEach(task => {
      tasks.push(new Task(task.title, task.description, task.project, task.date, task.image, task.starred, task.completed ,task.id));
    });
    renderTasks();
    handleCbx();
    handleAddTask();
  }
})
// end of backend code

function handleAddTask(){
  const addTask = document.getElementById('add-task');
addTask.addEventListener('click', () => {
  renderForm();
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const project = document.getElementById('project').value;
    const date = document.getElementById('date').value;
    const image = document.getElementById('image').value;
    const star = document.getElementById('star').checked;
    // Backend code to add a task to the database
    var csrfToken = document.cookie.match(/csrftoken=(.+)/)[1];
    $.ajax({
      async:'false',
      type: "POST",
      url : 'http://localhost:3000/tasks',
      data : {
        'title' : title,
        'description' : description,
        'project' : project,
        'date' : date,
        'starred' : star,
        'completed' : false,
        csrfmiddlewaretoken: csrfToken
      },
      success: function(data){
        console.log(data);
        const task = new Task(title, description, project, date, image , star, false, data.id);
        tasks.push(task);
        renderTasks();
        handleCbx();
        handleSortPopover();
        handleViewPopover();
        handleAddTask();
      },
      error: function(data){
        console.log('error');
        console.log(data);
      }
    })
    // End of backend code
    const task = new Task(title, description, project, date, image , star);
    tasks.push(task);
    renderTasks();
    handleCbx();
    handleSortPopover();
    handleViewPopover();
    handleAddTask();
  });
});
}

handleAddTask();

function updateIndex(){
  const deleteTaskBtn = document.querySelectorAll('.delete-task-btn');
  deleteTaskBtn.forEach((btn, index) => {
    btn.setAttribute('data-delete-index', index);
  });
  const starCbx = document.querySelectorAll('.star-cbx');
  starCbx.forEach((cbx, index) => {
    cbx.setAttribute('data-star-index', index);
  });
}

function handleDeleteTask(index){
    tasks.splice(index, 1);
    updateIndex();
    renderTasks();
}

function renderTasks(){
  displayContainer.innerHTML = `<div class="flex flex-col gap-4 fixed top-0 w-full pb-4 bg-[#E6EEF8] dark:bg-[#18181C] z-40">
  <h1 class="text-3xl text-[var(--secondary)] px-8 pt-6 pb-2">Tasks</h1>
  
  <div class="flex gap-2 px-8 -mt-2">
      <div class="relative">
          <button id="view" class="flex items-center justify-between bg-[var(--content-bg)] px-2 py-1 w-[max(15vw,12rem)] gap-2 border-2 border-[var(--theme-bg-color)] rounded-md shadow-sm hover:scale-[1.01] hover:bg-[var(--theme-bg-color)]">
              <div class="gap-2 items-center flex">
                  <svg class="fill-[var(--primary)] transition-none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                      <path d="M7 11H22V13H7zM7 5H22V7H7zM7 17H22V19H7zM3 10.5A1.5 1.5 0 1 0 3 13.5 1.5 1.5 0 1 0 3 10.5zM3 16.5A1.5 1.5 0 1 0 3 19.5 1.5 1.5 0 1 0 3 16.5zM3 4.5A1.5 1.5 0 1 0 3 7.5 1.5 1.5 0 1 0 3 4.5z"></path>
                  </svg>
                  <h1 class="text-[var(--primary)]">List view</h1>
              </div>
              <div id="view-arrow" class="arrow down big">
              </div>
          </button>
          <div id="view-popover" class="absolute top-10 left-0 w-[max(15vw,12rem)] rounded-md shadow-md bg-[var(--content-bg)] border-2 border-[var(--theme-bg-color)] p-2 z-50">
              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">List view</a>
              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">Grid view</a>
          </div>
      </div>
      <div class="relative">
          <button id="sort" class="flex items-center justify-between bg-[var(--content-bg)] px-2 py-1 w-[max(15vw,12rem)] gap-2 border-2 border-[var(--theme-bg-color)] rounded-md shadow-sm hover:scale-[1.01] hover:bg-[var(--theme-bg-color)]">
              <div class="gap-2 items-center flex">
                  <svg class="fill-[var(--primary)] transition-none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 128 128">
                      <path d="M39 117c1.7 0 3-1.3 3-3V21.2l10.9 10.9c.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9c1.2-1.2 1.2-3.1 0-4.2l-16-16c-1.2-1.2-3.1-1.2-4.2 0l-16 16c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0L36 21.2V114C36 115.7 37.3 117 39 117zM89 11c-1.7 0-3 1.3-3 3v92.8L75.1 95.9c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l16 16c.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9l16-16c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L92 106.8V14C92 12.3 90.7 11 89 11z"></path>
                  </svg>
                  <h1 class="text-[var(--primary)]">Last modified</h1>
              </div>
              <div id="sort-arrow" class="arrow down big">
              </div>
          </button>
          <div id="sort-popover" class="absolute top-10 left-0 w-[max(15vw,12rem)] rounded-md shadow-md bg-[var(--content-bg)] border-2 border-[var(--theme-bg-color)] p-2 z-50">
              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">Last modified</a>
              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">Name</a>
              <a href="/" class="block rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-[var(--theme-bg-color)] hover:text-gray-900 dark:hover:text-gray-300">Due date</a>
          </div>
      </div>
  </div>
</div>
<button id="add-task" class="fixed p-4 w-40 group-hover:text-[var(--hover)] bg-gradient-to-br from-[var(--primary-gradient)] to-[var(--secondary-gradient)] group-hover:bg-gradient-to-tl grid place-content-center text-[var(--primary)] bottom-12 right-8 border-0 transition-none z-50 rounded-full shadow-md text-lg hover:scale-[1.02] active:scale-95 transition-transform">
    Add Task
</button>`;
const taskContainer = document.createElement('div');
taskContainer.classList.add('mt-32', 'flex', 'flex-col', 'gap-4');
  tasks.forEach((task, index) => {
    taskContainer.innerHTML += `
<div class="flex flex-col gap-2 px-8">
    <div class="group flex justify-between w-full items-center px-4 py-3 rounded-xl  transition-all ${task.getIsCompleted() ? `bg-transparent` : `bg-[var(--task-bg)] hover:bg-[var(--task-hover)] shadow-sm`}" data-bg-index="${index}">
        <div class="flex gap-4 items-center">
            <div class="checkbox-wrapper-12">
                <div class="cbx">
                <input class="task-cbx ${task.getIsCompleted() ? `transition-none` : ``}" id="task-cbx" type="checkbox" data-cbx-index="${index}" ${task.getIsCompleted() ? `checked` : ``}>
                <label for="task-cbx" class="${task.getIsCompleted() ? `transition-none isCompleted` : ``}"></label>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo-12">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                    </filter>
                </defs>
                </svg>
            </div>
            <h1 class="text-[var(--primary)] text-lg ${task.getIsCompleted() ? `line-through opacity-[0.7]` : ``}" data-title-index="${index}">${task.name}</h1>
        </div>
        <div class="flex gap-2 justify-end items-center" data-options-index="${index}">
        ${task.getIsCompleted() ? `<button class="delete-task" data-delete-index="${index}">
        <svg class="fill-[var(--tertiary)] transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
            <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
        </svg>
    </button>` : `<button class="delete-task hidden" data-delete-index="${index}">
    <svg class="fill-[var(--tertiary)] transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
        <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
    </svg>
</button>
<button>
    <svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
        <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>
    </svg>
</button>
${task.star ? `<input id="star-cbx" class="star-cbx appearance-none m-0 hover:cursor-pointer" type="checkbox" checked></input>
<label for="star-cbx">
<svg class="fill-[var(--secondary)] transition-all ease-out hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32">
<path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"></path>
</svg>
</label> ` 
: `<input class="star-cbx appearance-none m-0 hover:cursor-pointer" type="checkbox"></input>
<label for="star-cbx">
<svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32">
<path d="M 16 2.125 L 15.09375 4.1875 L 11.84375 11.46875 L 3.90625 12.3125 L 1.65625 12.5625 L 3.34375 14.0625 L 9.25 19.40625 L 7.59375 27.21875 L 7.125 29.40625 L 9.09375 28.28125 L 16 24.28125 L 22.90625 28.28125 L 24.875 29.40625 L 24.40625 27.21875 L 22.75 19.40625 L 28.65625 14.0625 L 30.34375 12.5625 L 28.09375 12.3125 L 20.15625 11.46875 L 16.90625 4.1875 Z M 16 7.03125 L 18.5625 12.8125 L 18.8125 13.34375 L 19.375 13.40625 L 25.65625 14.0625 L 20.96875 18.28125 L 20.53125 18.6875 L 20.65625 19.25 L 21.96875 25.40625 L 16.5 22.28125 L 16 21.96875 L 15.5 22.28125 L 10.03125 25.40625 L 11.34375 19.25 L 11.46875 18.6875 L 11.03125 18.28125 L 6.34375 14.0625 L 12.625 13.40625 L 13.1875 13.34375 L 13.4375 12.8125 Z"></path>
</svg>
</label>`}`}
            
        </div>
    </div>
</div>`
    displayContainer.appendChild(taskContainer);
    const deleteTaskBtn = document.querySelector(`[data-delete-index="${index}"]`);
    deleteTaskBtn.addEventListener('click', () => {
      handleDeleteTask(index);
    })
    handleAddTask();
    handleComplete();


    handleStar();
      

  })
};

function handleComplete(){
  const taskCbx = document.querySelectorAll('.task-cbx');
  taskCbx.forEach((cbx, index) => {
    cbx.addEventListener('change', () => {
      tasks[index].toggleComplete();
    })
  })
}

const displayContainer = document.getElementById('display-container');

function renderForm(){
  const form = document.createElement('form');
  displayContainer.innerHTML = '';
  form.innerHTML = `<div class="flex flex-col gap-10 w-full pb-4">
  <h1 class="text-3xl text-[var(--secondary)] px-8 pt-6 pb-2">Add Task</h1>
  <div class="px-8 mt-6 relative">
    <input id="title" type="text" name="title" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Title" />
    <label for="title" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Title</label>
  </div>
  <div class="px-8 relative">
    <input id="description" type="text" name="description" class="peer bg-[var(--task-bg)] h-48 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Description" />
    <label for="description" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Description</label>
  </div>
  <div class="flex flex-row gap-4">
    <div class="px-8 relative">
      <input id="project" type="text" name="project" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Project" />
      <label for="project" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Project</label>
    </div>
    <div class="px-8 relative">
      <input id="date" type="date" name="date" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Date" />
      <label for="date" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Date</label>
    </div>
    <div class="px-8 relative">
      <input id="image" type="text" name="image" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Image" />
      <label for="image" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Image</label>
    </div>
    <div class="px-8 relative">
      <input id="star" type="checkbox" name="star" class="peer bg-[var(--task-bg)] h-10 w-full border-2 border-[var(--task-hover)] text-[var(--tertiary)] placeholder-transparent focus:outline-none focus:border-[var(--secondary)] rounded-lg px-4" placeholder="Star" />
      <label for="star" class="absolute left-8 -top-7 text-[var(--primary)] text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:left-12 peer-focus:-top-8 peer-focus:text-[var(--secondary)] peer-focus:text-[1.3rem] hover:cursor-text">Star</label>
    </div>
  </div>

  
  <div class="flex flex-row justify-end gap-4">
    <input type="reset" value="Cancel" class="fixed hover:cursor-pointer p-4 w-40 group-hover:text-[var(--hover)] bg-gradient-to-br from-[var(--delete-primary-gradient)] to-[var(--delete-secondary-gradient)] group-hover:bg-gradient-to-tl grid place-content-center text-[var(--primary)] bottom-12 right-52 border-0 transition-none z-50 rounded-full shadow-md text-lg hover:scale-[1.02] active:scale-95 transition-transform"></input>
    <input type="submit" value="Add" class="fixed hover:cursor-pointer p-4 w-40 group-hover:text-[var(--hover)] bg-gradient-to-br from-[var(--primary-gradient)] to-[var(--secondary-gradient)] group-hover:bg-gradient-to-tl grid place-content-center text-[var(--primary)] bottom-12 right-8 border-0 transition-none z-50 rounded-full shadow-md text-lg hover:scale-[1.02] active:scale-95 transition-transform"></input>
  </div>
  </div>`;
  displayContainer.appendChild(form);
};
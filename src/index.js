import './style.css';

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

  const viewPopover = document.getElementById('view-popover');
  const viewButton = document.getElementById('view');

  viewButton.addEventListener('click', () => {
      viewPopover.classList.toggle('show');
  });

  const sortPopover = document.getElementById('sort-popover');
  const sortButton = document.getElementById('sort');

  sortButton.addEventListener('click', () => {
      sortPopover.classList.toggle('show');
  });

//handle click outside
window.addEventListener('click', (e) => {
    if (!profileButton.contains(e.target)) {
        profilePopover.classList.remove('show');
    }
    if (!addProject.contains(e.target)) {
      addProject.classList.remove('active');
    }
    if (!viewButton.contains(e.target)) {
        viewPopover.classList.remove('show');
    }
    if (!sortButton.contains(e.target)) {
        sortPopover.classList.remove('show');
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

const taskCbx = document.querySelectorAll('.task-cbx');

taskCbx.forEach(cbx => {
  cbx.addEventListener('click', () => {
    const index = cbx.getAttribute('data-cbx-index');
    const title = document.querySelector(`[data-title-index="${index}"]`);
    const options = document.querySelector(`[data-options-index="${index}"]`);
    const bg = document.querySelector(`[data-bg-index="${index}"]`);
    if(cbx.checked){
      title.style.textDecoration = 'line-through';
      title.style.opacity = '0.7';
      bg.style.background = 'transparent';
      bg.style.boxShadow = 'none';
      options.innerHTML = `<button>
      <svg class="fill-[var(--tertiary)] transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
      </svg>
  </button>`;
    } else {
      title.style.textDecoration = 'none';
      title.style.opacity = '1';
      bg.style.background = 'var(--task-bg)';
      bg.style.boxShadow = 'var(--task-shadow)';
      options.innerHTML = `<button>
      <svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>
      </svg>
  </button>
  <button>
      <svg class="invisible fill-[var(--tertiary)] group-hover:visible transition-all ease-out hover:fill-[var(--secondary)] hover:scale-110 duration-75" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
      </svg>
  </button>`;
    }
  })
});
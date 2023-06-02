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


const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "./landing.html",
    "/login": "./login.html",
    "/signup": "./signup.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
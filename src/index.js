import Landing from "./pages/LandingPage.js";
import Signup from "./pages/SignupPage.js";
import Login from "./pages/LoginPage.js";
import About from "./pages/AboutPage.js";

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/", view: Landing},
        {path: "/signup", view: Signup},
        {path: "/login", view: Login},
        {path: "/about", view: About}
    ];

    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        }
    });

    let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    };

    const view = new match.route.view();

    document.querySelector("#main").innerHTML = await view.getHtml();
    await view.getJs();

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        if (event.target.matches("[data-link]")) {
            event.preventDefault();
            navigateTo(event.target.href);
        }
    });

    router();
});

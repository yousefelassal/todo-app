import Landing from "./pages/LandingPage.js";
import Signup from "./pages/SignupPage.js";
import Login from "./pages/LoginPage.js";
import Four0Four from "./pages/404.js";
import FAQs from "./pages/FAQsPage.js";
import Support from "./pages/SupportPage.js";

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/", view: Landing},
        {path: "/signup", view: Signup},
        {path: "/login", view: Login},
        {path: "/faqs", view: FAQs},
        {path: "/support", view: Support},
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
            route: {view: Four0Four},
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

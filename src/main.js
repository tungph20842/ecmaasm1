import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.querySelector("#app");

const render = (content, container) => {
    container.innerHTML = content();
};

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));


router.resolve();

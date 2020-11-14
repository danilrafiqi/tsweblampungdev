import About from "../../containers/pages/about";
import Blog from "../../containers/pages/blog";
import Contact from "../../containers/pages/contact";
import Home from "../../containers/pages/home";
import Privacy from "../../containers/pages/privacy";

const Router = [
    {
        component: Home,
        path:"/",
        label:"Home",
    },
    {
        component: About,
        path:"/about",
        label:"About",
    },
    {
        component: Privacy,
        path:"/privacy",
        label:"Privacy",
    },
    {
        component: Contact,
        path:"/contact",
        label:"Home",
    },
    {
        component: Blog,
        path:"/blog/:id",
        label:"Blog",
    }
]
export default Router
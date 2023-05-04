import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

interface RouteTypes {
    path: string,
    component: ()=> JSX.Element,
    name: string
}

const routes: RouteTypes[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
    {
      path: "/about",
      component: About,
      name: "About",
    },
  ];

export default routes
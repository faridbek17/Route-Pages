import About from "../pages/About";
import Cervice from "../pages/Cervice";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import PageNot from "../pages/PageNot";
import Portfolio from "../pages/Portfolio";

export const routes = [
  {
    id: 1,
    path: "/about",
    element: <About />,
  },

  {
    id: 2,
    path: "/cervice",
    element: <Cervice />,
  },

  {
    id: 3,
    path: "/portfolio",
    element: <Portfolio />,
  },

  {
    id: 4,
    path: "/contact",
    element: <Contact />,
  },

  {
    id: 5,
    path: "/",
    element: <Home />,
  },

  {
    id: 6,
    path: "/404",
    element: <PageNot />,
  },
];

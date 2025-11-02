import {
     Landing,
     Explore
} from "@/pages/index";

const routes = [
     {
          path: "/",
          name: "Landing",
          element: Landing
     },
     {
          path: "/explore",
          name: "Explore",
          element: Explore
     }
];

export default routes;
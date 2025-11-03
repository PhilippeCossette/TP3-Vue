import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Forfaits from "../views/Forfaits.vue";
import TripDetails from "../views/TripDetails.vue";
import About from "../views/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/forfaits", component: Forfaits },
  { path: "/forfaits/:id", component: TripDetails },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

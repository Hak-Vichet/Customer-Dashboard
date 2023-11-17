import { createRouter, createWebHistory } from "vue-router";
import shop from "../pages/master/dashboard-page.vue";
import home from "../pages/home-page.vue";
import profile from "../pages/profile-page.vue";
import dashboard from "../pages/admin-dashboard.vue"

const routes = [
  {
    name: "Shop",
    path: "/",
    component: shop,
    children: [
      {
        name: "Home",
        path: "/home",
        component: home,
      },
      {
        name: "Profile",
        path: "/profile",
        component: profile,
      },
      {
        name: "Dashboard",
        path: "/dashboard",
        component: dashboard
      }
    ]
  },
  
];

const router = Router();
export default router;

function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}

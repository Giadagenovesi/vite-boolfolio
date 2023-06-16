import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import SingleProjectPage from "./pages/SingleProjectpage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsPage,
        },
        {
            // passo un parametro al path, per visualizzare 1 singolo progetto
            path: "/projects/:slug",
            name: "single-project",
            component: SingleProjectPage,
        }, 
        {
            path: "/about",
            name: "about",
            component: AboutPage,
        },
        {
            path: "/contact",
            name:"contact",
            component: ContactPage,
        },
         // La rotta not found deve essere inserita allafine dell'array
        {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
        },
    ]
});

export { router };
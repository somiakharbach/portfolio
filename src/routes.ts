import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './components/HomePage.vue';
import Projects from './components/projects/ProjectsVue.vue';
import Skills from './components/skills/SkillsVue.vue';
import Education from './components/education/EducationVue.vue';


const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/skills', component: Skills },
    { path: '/education', component: Education },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

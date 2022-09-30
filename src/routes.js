import { createWebHistory, createRouter } from 'vue-router'
const HomePage = () => import('./components/HomePage.vue');
const LoginPage = () => import('./components/LoginPage.vue');
const SignupPage = () => import('./components/SignupPage.vue');
// const JobDetails = () => import('./components/JobDetails.vue');
const NotFound = () => import('./components/NotFound.vue');

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage,
    },
    {
        name: 'LoginPage',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'SignupPage',
        path: '/signup',
        component: SignupPage
    },
    // {
    //     name: 'JobsPage',
    //     path: '/jobs',
    //     component: JobsPage,
    // },
    // {
    //     name: 'JobDetails',
    //     path: '/jobs/:id',
    //     component: JobDetails,
    //     props: true,
    // },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
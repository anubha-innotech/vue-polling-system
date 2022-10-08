import { createWebHistory, createRouter } from 'vue-router'
// import store from './store/index'
const HomePage = () => import('./components/HomePage.vue');
const LoginPage = () => import('./components/LoginPage.vue');
const SignupPage = () => import('./components/SignupPage.vue');
const MyAccount = () => import('./components/MyAccount.vue');
const UsersList = () => import('./components/UsersList.vue');
// const MyPolls = () => import('./components/MyPolls.vue');
const AddPoll = () => import('./components/AddPoll.vue');
const AllPolls = () => import('./components/AllPolls.vue');
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
    //     name: 'PollingPage',
    //     path: '/polling',
    //     component: PollingPage,
    //     children: [
    //         {
    //             name: 'MyPolls',
    //             path: 'my-polls',
    //             component: MyPolls,
    //         },
    //         {
    //             name: 'AllPolls',
    //             path: 'all-polls',
    //             component: AllPolls,
    //         },
    //     ]
    // },
    {
        name: 'UsersList',
        path: '/all-users',
        component: UsersList,
    },
    {
        name: 'AddPoll',
        path: '/add-poll',
        component: AddPoll,
    },
    {
        name: 'AllPolls',
        path: '/all-polls',
        component: AllPolls,
    },
    {
        name: 'MyAccount',
        path: '/my-account',
        component: MyAccount,
    },

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

// router.beforeEach(() => {
//     console.log(store);
// })
export default router;
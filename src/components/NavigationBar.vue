<template>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand" aria-current="page">Polling</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/login" v-if="!userDetails.id" class="nav-menu nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/signup" v-if="!userDetails.id" class="nav-menu nav-link">Signup</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/all-users" v-if="userDetails.id " class="nav-menu nav-link">UsersList</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/add-poll" v-if="userDetails.role == 'Admin'" class="nav-menu nav-link">Add Poll</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/all-polls" v-if="userDetails.id" class="nav-menu nav-link">All Polls</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/my-account" v-if="userDetails.id" class="nav-menu nav-link">My Account</router-link>
                </li>
            </ul>
            <span class="float-right signout" v-if="userDetails.id" @click="onSignout(); updateUserDetails()">Signout</span>
        </div>
    </div>
</nav>
</template>

<script>
import {
    ref,
} from 'vue';
// import {useStore} from 'vuex'
import {
    useRouter
} from 'vue-router'
export default {
    setup() {
        const router = useRouter();
        let userDetails = ref('');
        // Getting the logged in user's details from local storage 
        function updateUserDetails() {
            if (localStorage.getItem('user') !== null) {
                userDetails.value = JSON.parse(localStorage.getItem('user'));
                console.log('updating user details');
            }
        }
        if (localStorage.getItem('user') !== null) {
            userDetails.value = JSON.parse(localStorage.getItem('user'));
            console.log('updating user details');
        }
        //     watch(() => userDetails.value , (first , second) => {
        //     userDetails.value = JSON.parse(localStorage.getItem('user'));
        //     console.log('updating user details');
        //     console.log(first, second);

        // })

        function onSignout() {
            localStorage.clear();
            router.push('/');

        }
        return {
            userDetails,
            onSignout,
            updateUserDetails
        }
    }
}
</script>

<style>
.signout {
    cursor: pointer;
    color: white;
    margin: 0 10px;
}
</style>

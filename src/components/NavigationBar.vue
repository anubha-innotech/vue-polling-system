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
                    <router-link to="/login" v-if="!userDetails.userDetails.id" class="nav-menu nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/signup" v-if="!userDetails.userDetails.id" class="nav-menu nav-link">Signup</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/all-users" v-if="userDetails.userDetails.id " class="nav-menu nav-link">UsersList
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/add-poll" v-if="userDetails.userDetails.role == 'Admin'" class="nav-menu nav-link">Add
                        Poll</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/all-polls" v-if="userDetails.userDetails.id" class="nav-menu nav-link">All Polls
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/my-account" v-if="userDetails.userDetails.id" class="nav-menu nav-link">My Account
                    </router-link>
                </li>
            </ul>
            <span class="float-right signout" v-if="userDetails.userDetails.id" @click="onSignout()">Signout</span>
        </div>
    </div>
</nav>
</template>

<script>
import {
    reactive,
    computed,
} from 'vue';
import {
    useStore,
} from 'vuex'
import {
    useRouter
} from 'vue-router'
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        let userDetails = reactive('');

        userDetails = computed(() => {
            console.log(userDetails);
            return store.state.userDetails
        })

        function onSignout() {
            store.dispatch('userDetails/emptyUserDetails', {
                root: true
            })
            router.push('/');
        }
        return {
            userDetails,
            onSignout,
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

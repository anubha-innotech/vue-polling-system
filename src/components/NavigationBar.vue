<template>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" aria-current="page">Polling</router-link>
        <!-- <a class="navbar-brand" href="#">Polling</a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!-- <li class="nav-item">
                    <router-link to="/" class="nav-menu nav-link active" aria-current="page">Home</router-link>
                </li> -->
                <li class="nav-item" v-if="!userDetails.token">
                    <router-link to="/login" class="nav-menu nav-link">Login</router-link>
                </li>
                <li class="nav-item" v-if="!userDetails.token">
                    <router-link to="/signup" class="nav-menu nav-link">Signup</router-link>
                </li>
                <li class="nav-item" v-if="userDetails.token">
                    <router-link to="/all-users" class="nav-menu nav-link">UsersList</router-link>
                </li>
                <li class="nav-item" v-if="userDetails.token">
                    <router-link to="/my-polls" class="nav-menu nav-link">My Polls</router-link>
                </li>
                <li class="nav-item" v-if="userDetails.token">
                    <router-link to="/all-polls" class="nav-menu nav-link">All Polls</router-link>
                </li>
                <li class="nav-item" v-if="userDetails.token">
                    <router-link to="/my-account" class="nav-menu nav-link">My Account</router-link>
                </li>
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li> -->
                <!-- <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li> -->
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
</template>

<script>

  // import { computed } from 'vue';
  // import {useStore} from 'vuex'
export default {
    setup() {
        // const store = useStore();
        //      const userDetails = computed(() => {
        //     return store.state.signup
        // })
        let userDetails = '';
            // Getting the logged in user's details from local storage 
            if(localStorage.getItem('user') !== null){
                userDetails = JSON.parse(localStorage.getItem('user'));
            }
        return{
          userDetails
        }
    }
}
</script>

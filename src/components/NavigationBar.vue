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
                <li class="nav-item">
                    <router-link to="/login" v-if="!token" class="nav-menu nav-link">Login</router-link>
                </li>
                <li class="nav-item" >
                    <router-link to="/signup" v-if="!token" class="nav-menu nav-link">Signup</router-link>
                </li>
                <li class="nav-item" >
                    <router-link to="/all-users" v-if="token" class="nav-menu nav-link">UsersList</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/add-poll" v-if="token" class="nav-menu nav-link">Add Poll</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/all-polls" v-if="token" class="nav-menu nav-link">All Polls</router-link>
                </li>
                <li class="nav-item" >
                    <router-link to="/my-account" v-if="token" class="nav-menu nav-link">My Accounts</router-link>
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
            <span class="float-right signout" v-if="token" @click="onSignout">Signout</span>
            <form class="d-flex" role="search">
                <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
                <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
            </form>
        </div>
    </div>
</nav>
</template>

<script>

//   import { ref } from 'vue';
  // import {useStore} from 'vuex'
  import {
    useRouter
  } from 'vue-router'
export default {
    setup() {
        const router = useRouter();

        // const store = useStore();
        //      const userDetails = computed(() => {
        //     return store.state.signup
        // })
        let token = '';
            // Getting the logged in user's token from local storage 
            if(localStorage.getItem('token') !== null){
                token = JSON.parse(localStorage.getItem('token'));
            }
        
        function onSignout() {
            localStorage.clear();
            router.push('/')
        }
        return{
          token,
          onSignout,
        }
    }
}
</script>

<style>
    .signout{
        cursor: pointer;
        color: white;
        margin: 0 10px;
    }
</style>

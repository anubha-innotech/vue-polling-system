<template>
<h2>My Account</h2>
<div class="account-container">
    <h5>USERNAME : {{userDetails.name}}</h5>
    <h5>ROLE : {{userDetails.role}}</h5>
    <h5>PASSWORD : {{userDetails.password}}</h5>
</div>
</template>

<script>
import {} from 'vue';
// import { useStore } from 'vuex';
export default {
    setup() {
        let userDetails = '';
        // Getting the logged in user's details from local storage 
        if (localStorage.getItem('user') !== null) {
            userDetails = JSON.parse(localStorage.getItem('user'));
        }
        return {
            userDetails,
        }
    }
}
</script>

<style>
.account-container {
    text-align: center;
}
</style>

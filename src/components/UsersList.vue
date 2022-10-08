<template>
<!-- <button @click="showUsersList">Show users</button> -->
<ul>
    <li v-for="users in usersList.usersList" :key="users.id">{{users.username}}</li>
</ul>
{{usersList.usersList}}
</template>

<script>
import {
    useStore
} from 'vuex'
import {
onMounted,
    ref,
} from 'vue'

export default {
    setup() {
        const store = useStore();
        let usersList = ref([]);
        onMounted( async() => {
            const result = await store.dispatch('usersList/getUsersList', {
            root: true
        })
        console.log(result);
        if (result) {
            usersList.value = store.state.usersList;
            console.log(usersList.value);
        }
        })
    //     const showUsersList = async () => {

    //     const result = await store.dispatch('usersList/getUsersList', {
    //         root: true
    //     })
    //     console.log(result);
    //     if (result) {
    //         usersList.value = store.state.usersList;
    //         console.log(usersList.value);
    //     }
    // }
        return {
            // showUsersList,
            usersList
        }
    }
}
</script>

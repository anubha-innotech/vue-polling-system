<template>
    <div class="polls-container">

    <div v-for="poll in allPolls" :key="poll.id" class="poll-box">
        <div class="poll-title">{{poll.title}}</div>
        <div class="poll-options">
            <p v-for="element in poll.options" class="poll-option" :key="element.option">
                {{element.option}}
                <span class="vote">{{element.vote}}&#128077;</span>
            </p>
        </div>
    </div>
    </div>
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
        let allPolls = ref([]);
        onMounted( async() => {
            console.log("on mounted");
            const result = await store.dispatch('allPolls/getAllPolls', {
            root: true
        })
        console.log(result);
    
        if (result) {
            allPolls.value = store.state.allPolls.allPolls;
            console.log(allPolls.value);
        }
        });

        return {
            allPolls,
        }
    
}
}
</script>

<style>
    .polls-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row;
    }

    .poll-box{
        background-color: rgba(255, 255, 225, 0.85);
        border-radius: 0 10px 0 10px;
        width: 28%;
        margin: 10px;
        padding: 10px;
    }

    .poll-title{
        padding: 5px 0px;
        font-size:x-large;
        text-align: center;
    }

    .poll-option{
        background-color: rgba(0, 0, 0, .1);
        padding: 10px;
        margin: 5px;
        font-size: 18px;
    }

    .vote{
        float: right;
    }
</style>
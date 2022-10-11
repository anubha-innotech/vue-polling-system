<template>
<div id="container">
    <h2>Add Poll</h2>
    <div id="form">
        <!-- Alert  -->
        <div class="alert alert-success alert-error" role="alert" v-if="showAddPollSuccessMessage">
            Poll is successfully added.
            </div>
        <form @submit.prevent="onAddingPoll()">
            <!-- User username  -->
            <div class="field">
                <label for="poll-title" class="label-field">TITLE:</label>
                <input type="text" id="poll-title" class="input-field" v-model="pollTitle" :class="{ 'red-border-bottom': pollTitleEmptyError }">
                <p class="error" v-if="pollTitleEmptyError"><i class="fa-solid fa-circle-exclamation"></i> Enter title</p>
            </div>
            <div class="field">
                <label for="poll-option1" class="label-field">OPTION 1:</label>
                <input type="textarea" id="poll-option1" class="input-field" v-model="option1">
            </div>
            <div class="field">
                <label for="poll-option2" class="label-field">OPTION 2:</label>
                <input type="textarea" id="poll-option2" class="input-field" v-model="option2">
            </div>
            <div class="field">
                <label for="poll-option3" class="label-field">OPTION 3:</label>
                <input type="textarea" id="poll-option3" class="input-field" v-model="option3">
            </div>
            <div class="field">
                <label for="poll-option4" class="label-field">OPTION 4:</label>
                <input type="textarea" id="poll-option4" class="input-field" v-model="option4">
                <p class="error" v-if="optionEmptyError"><i class="fa-solid fa-circle-exclamation"></i> Enter minimum 2 options to poll</p>
            </div>
            <button id="create-account-btn" type="submit">Add Poll</button>

        </form>
    </div>
</div>
</template>

    
<script>
import {
    ref,
} from 'vue';

// import {
//     useRouter
// } from 'vue-router'

import {
    useStore
} from 'vuex'

export default {
    setup() {
        // const router = useRouter();
        const store = useStore();
        const storeData = ref('');
        let pollTitle = ref("");
        let option1 = ref("");
        let option2 = ref("");
        let option3 = ref("");
        let option4 = ref("");
        let optionEmptyError = ref(false);
        let formValidated = ref("");
        let pollTitleEmptyError = ref(false);
        let showAddPollSuccessMessage = ref(false);

        const onAddingPoll = async () => {

            // Validation of form 
            formValidated.value = true;
            optionEmptyError.value = false;
            pollTitleEmptyError.value = false;

            if (pollTitle.value == "") {
                pollTitleEmptyError.value = true;
                formValidated.value = false;
            }
            if (option1.value == "") {
                optionEmptyError.value = true;
                formValidated.value = false;
            }
            if (option2.value == "") {
                optionEmptyError.value = true;
                formValidated.value = false;
            }

            if (formValidated.value) {
                // Signup registration
                const result = await store.dispatch('addPoll/addPoll', {
                    pollTitle: pollTitle.value,
                    option1: option1.value,
                    option2: option2.value,
                    option3: option3.value,
                    option4: option4.value,
                }, {
                    root: true
                })
                console.log(result);

                // Accessing store state if user successfully added poll in ie. if result is true
                if (result) {
                    storeData.value = store.state.addPoll;
                    console.log(storeData.value);
                    showAddPollSuccessMessage.value = true;
                }

                pollTitle.value = "";
                option1.value = "";
                option2.value = "";
                option3.value = "";
                option4.value = "";
            }
        }
        return {
            pollTitle,
            option1,
            option2,
            option3,
            option4,
            optionEmptyError,
            pollTitleEmptyError,
            formValidated,
            onAddingPoll,
            storeData,
            showAddPollSuccessMessage
        }

    }
}
</script>

    
<style>
#container {
    width: 60%;
    margin: auto;
    padding: 13px;
}

#form {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
}

.field {
    margin-bottom: 30px;
}

.label-field,
.input-field {
    display: block;
    width: 100%;
}

#form label {
    margin-bottom: 20px;
    color: rgb(109, 109, 109);
    font-size: .9em;
    font-weight: bolder;
    letter-spacing: 2px;
}

#form input {
    border: none;
    border-bottom: 1px solid lightgrey;
    padding: 10px 0px;
    font-size: 1em;
    color: rgb(116, 116, 116);
}

#form input:focus {
    outline: none;
}

.error {
    color: tomato;
    margin: 5px;
    font-size: .8em;
}

.red-border-bottom {
    border-bottom: 1px solid tomato !important;
}

.red-font-color {
    color: tomato !important;
}

#create-account-btn {
    display: block;
    background-color: dodgerblue;
    color: white;
    padding: 10px 25px;
    border-radius: 20px;
    border: none;
    font-size: .95em;
    margin: auto;
    margin-top: 30px;
    cursor: pointer;
}

.skill-box {
    background-color: lightgrey;
    color: rgb(52, 58, 58);
    margin: 0px 7px;
    border: none;
    border-radius: 25px;
    padding: 7px 15px;
    font-size: .94em;
    letter-spacing: 1px;
}

.skill-delete-button {
    background-color: transparent;
    border: none;
}

.skill-delete-button:hover {
    font-size: .99em;
}

#skill-list-div {
    margin-top: 20px
}
</style>

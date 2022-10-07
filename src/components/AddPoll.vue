<template>
    <div id="container">
        <h2>Add Poll</h2>
        <div id="form">
            <!-- Error alert  -->
            <!-- <div class="alert alert-danger alert-error" role="alert" v-if="showError">
                {{storeData.errorMessage}}
            </div> -->
            <form @submit.prevent="onAddingPoll()">
                <!-- User username  -->
                <div class="field">
                    <label for="poll-title" class="label-field">TITLE:</label>
                    <input type="text" id="poll-title" class="input-field" v-model="pollTitle" :class="{ 'red-border-bottom': pollTitleEmptyError }">
                    <p class="error" v-if="pollTitleEmptyError"><i class="fa-solid fa-circle-exclamation"></i> Enter title</p>
                </div>
            </form>
            {{storeData}}
        </div>
        <div v-if="formValidated">
            <p>Email:{{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>Terms and Conditions: {{ termsAndConditions }}</p>
        </div>
    </div>
    </template>
    
    <script>
    import {
        ref,
        // toRef,
        // beforeRouteLeave,
        // reactive,
        // isReactive,
        // isRef,
        // toRefs,
        // computed,
        // watch
    } from 'vue';
    
    import {
        // onBeforeRouteLeave,
        useRouter
        // onBeforeRouteEnter
    } from 'vue-router'
    
    import {
        useStore
    } from 'vuex'
    
    export default {
        setup() {
            const router = useRouter();
    
            const storeData = ref('');
            // onBeforeRouteLeave(() => {
            //     console.log("before route leave");
            //     console.log(store);
            // })
            const store = useStore();
            let showError = ref(false);
            let pollTitle = ref("");
            let email = ref("");
            let password = ref("");
            let termsAndConditions = ref(false);
            const regularExpression = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
            let formValidated = ref("");
            let userNameEmptyError = ref(false);
            let emailEmptyError = ref(false);
            let passwordEmptyError = ref(false);
            let passwordValidationError = ref(false);
            let termsAndConditionsUncheckedError = ref(false);
    
            const onSignup = async () => {
    
                // Validation of form 
                formValidated.value = true;
                emailEmptyError.value = false;
                passwordEmptyError.value = false;
                passwordValidationError.value = false;
                termsAndConditionsUncheckedError.value = false;
    
                if (username.value == "") {
                    userNameEmptyError.value = true;
                    formValidated.value = false;
                }
                if (email.value == "") {
                    emailEmptyError.value = true;
                    formValidated.value = false;
                }
                if (password.value == "") {
                    passwordEmptyError.value = true;
                    formValidated.value = false;
                }
                if (username.value != "" && email.value != "" && password.value != "") {
                    if (termsAndConditions.value == false) {
                        termsAndConditionsUncheckedError.value = true;
                        formValidated.value = false;
                    }
                }
                if (password.value != "") {
                    if (regularExpression.test(password.value)) {
                        passwordValidationError.value = true;
                        formValidated.value = false
                    }
                }
    
                // Signup registration
                const result = await store.dispatch('signup/signup', {
                    username: username.value,
                    email: email.value,
                    password: password.value
                }, {
                    root: true
                })
                console.log(result);
                
                // Accessing store state if user successfully signs in ie. if result is true
                if (result) {
                    storeData.value = store.state.signup;
                    console.log(storeData.value);
                    showError.value = false;
                    router.push('/')
                } else {
                    showError.value = true;
                    storeData.value = store.state.signup;
                    console.log(storeData.value);
                }
            };
            // const stateData = computed(() => {
            //     console.log(stateData);
            //     return store.getters.stateData
            // })
    
            return {
                pollTitle,
                showError,
                username,
                email,
                password,
                termsAndConditions,
                formValidated,
                userNameEmptyError,
                emailEmptyError,
                passwordEmptyError,
                passwordValidationError,
                termsAndConditionsUncheckedError,
                onSignup,
                // stateData,
                storeData,
            }
    
        }
    }
    </script>
    
    <style>git 
    .alert-error {
        /* margin: 3px; */
    }
    
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
    
    #user-role {
        width: 100%;
        border: none;
        font-size: 1em;
        color: gray;
        margin-top: 15px;
        background-color: rgb(228, 228, 228);
        padding: 5px 2px;
    }
    
    #user-role:focus {
        border: none;
        outline: none;
    }
    
    #user-role option {
        background-color: rgb(236, 236, 236);
    }
    
    #terms-and-conditions-label {
        margin-left: 10px;
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
    
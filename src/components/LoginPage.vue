<template>
<div id="container">
    <h2>LOGIN</h2>
    <div id="form">
        <!-- Error alert  -->
        <div class="alert alert-danger alert-error" role="alert" v-if="showError">
            {{storeData.errorMessage}}
        </div>
        <form @submit.prevent="onLogin()">
            <!-- Username  -->
            <div class="field">
                <label for="username" class="label-field">USERNAME:</label>
                <input type="text" id="username" name="username" class="input-field" v-model="username" :class="{ 'red-border-bottom': usernameEmptyError }">
                <p class="error" v-if="usernameEmptyError"><i class="fa-solid fa-circle-exclamation"></i> Enter your
                    username</p>
            </div>
            <!-- User Password  -->
            <div class="field">
                <label for="user-password" class="label-field">PASSWORD:</label>
                <input type="password" id="user-password" name="user-password" class="input-field" v-model="password" :class="{ 'red-border-bottom': passwordEmptyError || passwordValidationError }">
                <p class="error" v-if="passwordValidationError"><i class="fa-solid fa-circle-exclamation"></i>
                    Password length should be 8 char, 1 special char, 1 number, 1 uppercase, and 1 lowercase</p>
                <p class="error" v-if="passwordEmptyError"><i class="fa-solid fa-circle-exclamation"></i> Enter your
                    password</p>
            </div>
            <!-- Terms And Conditions checkbox  -->
            <input type="checkbox" name="terms-and-conditions" id="terms-and-conditions" v-model="termsAndConditions">
            <label for="terms-and-conditions" id="terms-and-conditions-label">ACCEPT TERMS AND CONDITIONS</label>
            <p class="error" v-if="termsAndConditionsUncheckedError"><i class="fa-solid fa-circle-exclamation"></i>
                Check the terms and conditions field</p>
            <!-- "Create an Account" button  -->
            <button id="create-account-btn">Login</button>
        </form>
    </div>
</div>
</template>

<script>
import {
    ref,
    // onMounted
} from 'vue';
import { useRouter } from 'vue-router';

import {
    useStore
} from 'vuex'

export default {
    setup() {
        let router = useRouter();
        const storeData = ref('');
        let showError = ref(false);
        let store = useStore();
        let username = ref("");
        let password = ref("");
        let termsAndConditions = ref(false);
        const regularExpression = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
        let formValidated = ref("");
        let usernameEmptyError = ref(false);
        let passwordEmptyError = ref(false);
        let passwordValidationError = ref(false);
        let termsAndConditionsUncheckedError = ref(false);

        const onLogin = async () => {
            console.log("hello");
            formValidated.value = true;
            usernameEmptyError.value = false;
            passwordEmptyError.value = false;
            passwordValidationError.value = false;
            termsAndConditionsUncheckedError.value = false;

            if (username.value == "") {
                usernameEmptyError.value = true;
                formValidated.value = false;
            }
            if (password.value == "") {
                passwordEmptyError.value = true;
                formValidated.value = false;
            }
            if (username.value != "" && password.value != "") {
                if (termsAndConditions.value == false) {
                    termsAndConditionsUncheckedError.value = true;
                    formValidated.value = false;
                }
            }
            if (password.value != "") {
                console.log(regularExpression + password.value);
                if (regularExpression.test(password.value)) {
                    console.log("password validation");
                    passwordValidationError.value = true;
                    formValidated.value = false
                }
            }

            // login registration
            let result = "";
            if (formValidated.value) {
                result = await store.dispatch('login/onLogin', {
                    username: username.value,
                    password: password.value
                }, {
                    root: true
                })
                console.log(result);
                getUserDetails();
                // Accessing store state if user successfully signs in ie. if result is true
                if (result) {
                    storeData.value = store.state.login;
                    console.log(storeData.value);
                    showError.value = false;
                    router.push('/')
                } else {
                    showError.value = true;
                    storeData.value = store.state.login;
                    console.log(storeData.value);
                }
            }
        }

        let userDetails = ref('');
        const getUserDetails = () => {
            console.log('get user details');
            let result = "";
                     result = store.dispatch('userDetails/getUserDetails', {
                        root: true
                    })
                    if (result) {
                        userDetails.value = store.state.userDetails;
                    } 
        }
        

        return {
            username,
            password,
            termsAndConditions,
            formValidated,
            usernameEmptyError,
            passwordEmptyError,
            passwordValidationError,
            termsAndConditionsUncheckedError,
            storeData,
            showError,
            onLogin,
            getUserDetails,
            userDetails
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

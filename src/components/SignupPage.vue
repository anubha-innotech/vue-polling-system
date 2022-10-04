<template>
<div id="container">
    <h2>SIGNUP</h2>
    <div id="form">
        <form @submit.prevent="onSignup()">
            <!-- User username  -->
            <div class="field">
                <label for="user-name" class="label-field">NAME:</label>
                <input type="text" id="user-name" username="user-username" class="input-field" v-model="username" :class="{ 'red-border-bottom': userNameEmptyError }">
                <p class="error" v-if="userNameEmptyError"><i class="fa-solid fa-circle-exclamation"></i> Enter your
                    username</p>
            </div>
            <!-- User Email  -->
            <div class="field">
                <label for="user-email" class="label-field">EMAIL:</label>
                <input type="text" id="user-email" username="user-email" class="input-field" v-model="email" :class="{ 'red-border-bottom': emailEmptyError }">
                <p class="error" v-if="emailEmptyError"><i class="fa-solid fa-circle-exclamation"></i> Enter your
                    email</p>
            </div>
            <!-- User Password  -->
            <div class="field">
                <label for="user-password" class="label-field">PASSWORD:</label>
                <input type="password" id="user-password" username="user-password" class="input-field" v-model="password" :class="{ 'red-border-bottom': passwordEmptyError || passwordValidationError }">
                <p class="error" v-if="passwordValidationError"><i class="fa-solid fa-circle-exclamation"></i>
                    Password length should be 8 char, 1 special char, 1 number, 1 uppercase, and 1 lowercase</p>
                <p class="error" v-if="passwordEmptyError"><i class="fa-solid fa-circle-exclamation"></i> Enter your
                    password</p>
            </div>
            <!-- Terms And Conditions checkbox  -->
            <input type="checkbox" username="terms-and-conditions" id="terms-and-conditions" v-model="termsAndConditions">
            <label for="terms-and-conditions" id="terms-and-conditions-label">ACCEPT TERMS AND CONDITIONS</label>
            <p class="error" v-if="termsAndConditionsUncheckedError"><i class="fa-solid fa-circle-exclamation"></i>
                Check the terms and conditions field</p>
            <!-- "Create an Account" button  -->
            <button id="create-account-btn" type="submit">Create an Account</button>
        </form>
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
    // beforeRouteLeave,
    // reactive,
    // isReactive,
    // isRef,
    // toRefs,
    // computed,
    // watch
} from 'vue';

import {
    onBeforeRouteLeave,
    // onBeforeRouteEnter
} from 'vue-router'

import {
    useStore
} from 'vuex'
// import {computed} from 'vue'
export default {
    setup() {

        onBeforeRouteLeave(() => {
            console.log("before route leave");
            console.log(store);
        })
        // onBeforeRouteEnter((_,_1, next) => {
        //next(vm => {
        //console.log("before route enter");
        //  console.log(vm.store)
        //    })
        //  })
        const store = useStore();

        let username = ref("");
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

        function onSignup() {
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
            store.dispatch('signup/signup', {
                username: username.value,
                email: email.value,
                password: password.value
            }, {
                root: true
            })

        }

        return {
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

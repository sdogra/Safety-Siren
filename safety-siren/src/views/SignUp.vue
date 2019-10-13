<template>
    <div class = "sign-up">
        <p>Let's create a new account!</p>
        <input type="text" v-model = "email" placeholder = "Email"><br>
        <input type="password" v-model = "password" placeholder = "Password"><br>
        <button @click = "signUp">Sign Up</button>
        <span>or go back to <router-link to="/">login!</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase';
import router from "../router";

export default {
    name: 'signUp',
    data(){
        return {}
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function(user){
                    router.push('/googleMaps');
                },
                function (err){
                    alert("Oops. " + err.message);
                }
            )
        }

    }
}
</script>

<style scoped>
    .signUp{
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span{
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>
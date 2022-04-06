<template>
    <div class="container">

        <div class="inner-container-1">
            <h1 style="text-align :center">Welcome to Vue</h1>
            <div class="buttons-group">
                <button @click="activeComponent = 'Login' "  class="btn btn-outline-primary btn-lg">Login</button>
                <h3 style="text-align :center">Or</h3>
                <button @click="activeComponent = 'Register' " class="btn btn-outline-success btn-lg">Register Here</button>
            </div>
        </div>
            <!-- <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link> -->
        

        <div class="inner-container-2">
            <div class="components">
                <Login v-if="activeComponent === 'Login'"   />
                <Register v-if="activeComponent === 'Register'"  />
            </div>
        </div>

        <router-view />
    </div>
</template>

<script>
import Login from './Login.vue'
import Register from './Register.vue'

export default {
    name: 'Home',

    components: {
        Login,
        Register,
    },

    data() {
        return {
            activeComponent: 'Login'
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

    .inner-container-1 {
        width: 50%;
        background-color: #F0FFF0;
        height: 100vh;
        border: 1px solid black;
        margin-bottom: 20px;
        
    }

    .inner-container-2 {
        background-color: #E0FFFF;
        border: 1px solid black;
    }

    .inner-container-1 + .inner-container-2 {
        width: 50%;
    }

    .components {
        width: 100%;
    }

    .buttons-group {
        display: flex;
        flex-direction: column;
    }

    button {
        width: 50%;
        margin-left: 25%;
    }

    h1 {
        margin-top: 50%;
    }
</style>

// @click="$router.push('login')"
// @click="$router.push('register')"
<template>
    <div class="container">
        <nav class="left-nav">
            <h1>Vue Com</h1>
        </nav>
        <nav class="right-nav">
            <ul>
                <router-link to="/"><li><button>Log In</button></li></router-link>
                <li><button @click="$router.push('Registration_page')">Register</button></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    /* Navigation Bar */
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container .right-nav ul{
        display: flex;
    }
    
</style>
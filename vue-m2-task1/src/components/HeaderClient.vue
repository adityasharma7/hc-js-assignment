<template>
    <div class="container">
        <nav class="left-nav">
            <h1>Vue Com</h1>
        </nav>
        <nav class="right-nav">
            <ul>
                <li><button @click="$router.push({name: 'Home'})">Logout</button></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'HeaderClient'
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
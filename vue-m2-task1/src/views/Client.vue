<template>
    <div>
        <HeaderClient />
        <h1>Congrat's You've successfully logged in!</h1>
        <Footer />
    </div>
</template>

<script>
    import HeaderClient from "../components/HeaderClient.vue"
    import Footer from "../components/Footer.vue"

    export default {
        name: "Client",
        components: {
            HeaderClient,
            Footer,
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
        margin: 10rem auto;
        max-width: 30rem;
    }
</style>

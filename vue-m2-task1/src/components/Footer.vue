<template>
    <footer>
        <p>Made with <i class="fa-solid fa-heart"></i> rvutd</p>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    footer {
        background: rgb(31, 31, 31);
        padding: 10px 20px;
        text-align: center;
        color: aliceblue;
        width: 100%;
        position: fixed;
        bottom: 0px;
    }

    footer i {
        color: rgb(130, 6, 6);
    }
</style>
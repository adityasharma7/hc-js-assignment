<template>
    <div id="cards" v-for="i in 4" :key="i">
        <FourItemsCard class="card" />
    </div>
</template>

<script>
import FourItemsCard from "./FourItemsCard.vue";

export default {
    name: 'ItemsCard',
    
    components: {
        FourItemsCard,
    },
}
</script>

<style scoped>
    #cards {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .card {
        white-space: normal;
        left: 50px;
    }
</style>
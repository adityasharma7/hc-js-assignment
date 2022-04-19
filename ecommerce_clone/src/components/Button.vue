<template>
    <div class="container">
        <button v-for="filter in filters" :key="filter" 
            @click="() => filterCategories(filter)" type="button" class="btn btn-danger">
                {{ filter }}
        </button>
    </div>
</template>

<script>
const filters = [
    "all",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing"
]

export default {

    name: 'Button',

    props: {
        'filterCategories': Array,
        'text': String,
    },

    data() {
        return {
            filters
        }
    }
}
</script>

<style scoped>
    
</style>
<template>
    <div style="text-align:center"   class="container">
        <button v-for="filter in filters" :key="filter" @click="() => updateCategory(filter)" type="button" class="btn btn-dark">
                {{ filter }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    data() {
        return  {
            filters:  ["Shop By Category :", "all", "women's clothing", "men's clothing", "jewelery", "electronics"],
            curentCategory: ""
        }      
    },
 
  props: {
    'updateCategory':Function,
  },
}
</script>

<style scoped>
    
</style> 
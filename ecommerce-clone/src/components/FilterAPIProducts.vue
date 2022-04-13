<template>
    <section>
        <div class="container">
            <div class="upper-sec flex">
                <div><h4>Filters</h4></div>
                <div><button id="clear" @click="getProductByCategories('all')" class="primary-btn">Clear All</button></div>
            </div>
            <div class="lower-sec flex">
                <button id="all" @click="getProductByCategories('all')">All</button>
                <button id="men's clothing" @click="getProductByCategories('men\'s clothing')">Men's Outfit</button>
                <button id="women's clothing" @click="getProductByCategories('women\'s clothing')">Women's Outfit</button>
                <button id="electronics" @click="getProductByCategories('electronics')">Electronics</button>
                <button id="jewelery" @click="getProductByCategories('jewelery')">Jewelery</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FilterAPIProducts',
    methods: {
        async getProductByCategories(value) {
            let response;
            let Updatedcategory;
            const btns = document.querySelectorAll(".lower-sec button");

            // Change Btn colour to be selected -
            btns.forEach(btn => {
                if(btn.id === value){
                    btn.classList.add('isSelected');
                } else {
                    btn.classList.remove('isSelected');
                }
            })

            // Get Data On Basis of Category -
            if (value === 'all') {
                Updatedcategory = this.categories
                response = await fetch('https://fakestoreapi.com/products');
            } else {
                Updatedcategory = [value]
                response = await fetch(`https://fakestoreapi.com/products/category/${value}`);
            }

            // Sends Data Converted to Categories Component -
            const data = await response.json();
            this.$emit('Filter_Products', [data, Updatedcategory])
        },
        async getCategories() {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const result = await response.json();
            this.categories = result;

            return result
        },
    },
    data() {
        return {
            Categories: [],
            previousSelected: '',
        }
    },
    created() {
        this.getCategories()
    },
    props: {
        category: Array
    },
}
</script>

<style scoped>
    section { margin-top: 5rem;}

    .container {
        margin: 20px 30px;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
        background-color: #fff;
    }

    .primary-btn {
        font-weight: normal;
        background: rgb(216, 17, 17);
        padding: 10px 20px;
        text-transform: uppercase;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    }

    .upper-sec {
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 20px 20px 10px 20px;
    }

    .lower-sec {
        padding: 20px;
    }

    .lower-sec button, select {
        border: 2px solid #0275d8;
        border-radius: 4px;
        background-color: #fff;
        font-weight: normal;
        padding: 10px 20px;
        margin-right: 30px;
    }

    .lower-sec button:hover, select:hover {
        background-color: #f7f7f7;
    }

    .lower-sec .isSelected {
        border: 2px solid #5cb85c;
        background-color: #f7f7f7;
    }

</style>
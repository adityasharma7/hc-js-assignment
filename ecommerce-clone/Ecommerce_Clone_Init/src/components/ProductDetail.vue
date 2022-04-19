<template>
    <div class="container">
        <div class="img-container">
            <img :src="productDetails.image" alt="img">
        </div>
        <div class="product-details">
            <span>{{ productDetails.title }}</span>
            <p>{{ productDetails.description }}</p>
            <p>{{ productDetails.price }}</p>
            <button class="btn-btn-primary">Add to cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetail',

    props: {
        productId: String,
    },

    data() {
        return {
            productDetails: [],
            id: "",
        }
    },

    methods: {
        async getDetails() {
            const data = await fetch(`https://fakestoreapi.com/products/${this.id}`);
            this.productDetails = await data.json();
        }
    },

    mounted() {
        this.id = this.$route.params.productId;
        this.getDetails();
    }
}
</script>

<style scoped>
    .container {
        display: flex;
    }

    img {

    }

    .img-container {
        width: 50%;
    }

    .product-details {
        width: 50%;
    }
</style>
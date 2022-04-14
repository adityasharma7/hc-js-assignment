<template>
    <div>
        <div class="container grid">
            <div class="left flex">
                <img :src="itemDetails.image" alt="Items Image">
            </div>
            <div class="right">
                <h1 class="title">{{itemDetails.title}}</h1>
                <p class="tag">{{itemDetails.category}}</p>
                <div class="description">{{itemDetails.description}}</div>
                <div class="flex">
                    <div class="price"><strong>Price</strong>: $ {{itemDetails.price}}</div>
                    <div class="rating"><strong>Rating</strong></div>
                </div>
                <div class="flex">
                    <button class="primary-btn">Buy Now</button>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductsDetail',
        props: {
            id: Number,
        },
        data() {
            return {
                itemDetails: []
            }
        },
        methods: {
            async getProductDetail() {
                const response = await fetch(`https://fakestoreapi.com/products/${this.id}`);
                this.itemDetails =  await response.json();

                console.log(this.itemDetails);
            },
        },
        created() {
            this.getProductDetail()
        },
    }
</script>

<style scoped>
    button {
        margin: 100px;
    }

    .container {
        background-color: #fff;
        margin: 10rem auto;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        padding: 40px;
        max-width: 65vh;
        grid-template-columns: repeat(2, 1fr);
    }

    .right * {
        margin: 10px 0;
    }

    .right .flex {
        justify-content: space-between;
    }

    .right .flex button {
        margin-right: 10px;
        padding: 10px 20px;
        border-radius: 5px;
    }

    .right .flex button:nth-child(2) {
        background: #fff;
        border: 2px solid #292b2c;
    }

    img {
        width: 20vh;
    }

    /* .left {
        align-items: center;
        justify-content: center;
    } */

    .tag {
        background-color: #292b2c;
        color: rgb(235, 234, 234);
        padding: 4px 6px;
        font-size: 12px;
        border-radius: 5px;
        width: fit-content;
    }
</style>
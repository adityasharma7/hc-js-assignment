<template>
    <div class="container flex">
        <a href="#" class="catlog-card" v-for="data in catlog" :key="data.id">
            <img v-bind:src="data.imgSrc" alt="catlog image">
            <h4>{{ data.title }} <i></i></h4>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Catlog",
        data(){
            return {
                catlog: [
                    {   
                        id: 1,
                        title: "Top Offers",
                        imgSrc: require('../assets/catlog/top-offers.png.webp')
                    },
                    {
                        id: 2,
                        title: "Grocery",
                        imgSrc: require('../assets/catlog/grocery.png.webp')
                    },
                    {
                        id: 3,
                        title: "Mobile",
                        imgSrc: require('../assets/catlog/mobile.png.webp')
                    },
                    {
                        id: 4,
                        title: "Fashion",
                        imgSrc: require('../assets/catlog/fashion.png.webp')
                    },
                    {   
                        id: 5,
                        title: "Electronics",
                        imgSrc: require('../assets/catlog/electronics.png.webp')
                    },
                    {
                        id: 6,
                        title: "Home",
                        imgSrc: require('../assets/catlog/home.jpg.webp')
                    },
                    {
                        id: 7,
                        title: "Appliances",
                        imgSrc: require('../assets/catlog/appliances.png.webp')
                    },
                    {
                        id: 8,
                        title: "Travel",
                        imgSrc: require('../assets/catlog/travel.png.webp')
                    },
                    {
                        id: 9,
                        title: "Beauty, Toys and more",
                        imgSrc: require('../assets/catlog/and-more.png.webp')
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    .container {
        margin-top: 4rem;
        background-color: #FFFFFF;
    }

    img {
        width: 70px;
        height: 70px;
    }

    .catlog-card {
        text-align: center;
        margin: 10px 20px;
    }

    .container {
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.16);
    }

    a:hover {
        color: #0275d8;
    }
</style>
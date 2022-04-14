<template>
    <section>
        <Header />
        <ProductsDetail :id='productId' />
        <Footer />
    </section>
</template>

<script>
    import Header from "../components/Header.vue"
    import ProductsDetail from "../components/ProductsDetail.vue"
    import Footer from "../components/Footer.vue"


    export default {
        name: 'ProductsDetailsView',
        components: {
            Header,
            ProductsDetail,
            Footer,
        },
        props: {
            id: Number,
        },
        data() {
            return {
                productId: Number,
            }
        },
        created() {
            this.productId = Number(this.$route.params.productId);
            console.log(typeof this.productId);
        },  
    }
</script>

<style scoped>
    section {
        margin-top: 5rem;
    }
</style>
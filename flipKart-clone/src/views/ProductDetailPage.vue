<template>
  <div>
    <div class="common-col">
      <div class="img-section">
        <img :src="productDetailsArr[0].image" :alt="productDetailsArr.title">
        <button>add to cart</button>
        <button>buy Now</button>
      </div>
      <h3>{{productDetailsArr[0].title}}</h3>
      <h4>rating:{{productDetailsArr[0].rating}}</h4>
      <h6>Now<i class="fas fa-rupee-sign"></i>{{productDetailsArr[0].price}}</h6>
    </div>
  </div>
</template>

<script>
export default {
name:"productdetail",
  data() {
    return {
      productDetailsArr:{},
      id: "",
    };
  },
  methods: {
     getDetails() {
      this.productDetailsArr = this.$store.state.Storedata.filter((e)=> e.id ==this.id)
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getDetails();
  },
    created() {
    this.id = this.$route.params.id;
    this.getDetails();
  },

}
</script>

<style scoped>
.common-col{
     width: 100%;
     height: 660px;
     text-align: center;
     line-height: 22px;
     border: 1px solid rgb(240, 205, 205) ;
     box-shadow: rgb(161,161,161) 1 1;
  
 }
 .common-col img{
     margin: 30px;
     width: 160px;
     height: 250px;
     transition: 300ms;
 }
 .common-col img:hover{
     transform: scale(0.9);
 }
 .common-col h3,h4,h6{
     text-transform: capitalize;
     letter-spacing: 1px;
     cursor: pointer;
 }
 .common-col h3{
     margin-top: 10px;
     font-size: 16px;
 }
 .common-col h4{
     color: green;
     font-size: 14px;
     font-weight: 300;
 }
 .common-col h6{
    color: rgb(161,161,161);
    font-size: 12px;
    font-weight: 100;
 }
</style>
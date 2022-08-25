<template>
<div class="navbar-cat">

    <div class="categories">
        <div class="all-cat">
            <i class="fa-solid fa-bars"></i>
            <span>All</span>
         </div>

        <span>Best Sellers</span>
        <span>Mobiles</span>
        <span>Today's Deal</span>
       <span>Custom Service</span>
       <span>Books</span>
       <span>Electronics</span>
       <span>Prime</span>

  <span>Fashion</span>
 
  <span>Home&Kitchen</span>
     <span>Amazon Pay</span>
     <span>Computers</span>
     <span>Coupouns</span>
     <span>Toys&Games</span>
    </div>

    <div class="cat-image">
        
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Shamshera/400x39-SWM_179._CB629959833_.jpg" alt="">
    </div>

</div>
</template>

<script>
export default {
    name: 'NavInner'
}
</script>

<style scoped>
    .navbar-cat {
        display: flex;
        background-color: #232f3e;
        width: 100%;
        margin-top: 58px;
        
    }
    .categories { 
        display: flex;
        padding: 10px;
       
        background-color: #232f3e;
        width: 72%;
        height: 45px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .all-cat {
        color: white;
        cursor: pointer;
    }
    span {
        color: white;
        font-weight: 450;
        font-size: 14px;
        padding-left: 8px;
        padding-right: 8px;
    }
    i {
        color: lightgray;
    }
    .cat-image {
        width: 28%;
        height: inherit;
    }
    .cat-image:hover {
        border: 1px solid #fff;
    }
</style> 
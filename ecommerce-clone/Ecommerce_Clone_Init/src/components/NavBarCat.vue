<template>
<div class="navbar-cat">

    <div class="categories">
        <div class="all-cat">
            <i class="fa-solid fa-bars"></i>
            <span>All</span>
         </div>

        <span>Fresh</span>
        <span>Today's Deal</span>
        <span>Gift Cards</span>
        <span>Buy Again</span>
        <span>Amazon Pay</span>

        <div class="browsing-history">
            <span>Browsing History</span>
            <i class="fa-solid fa-caret-down drop-down-icon"></i>
        </div>

        <span>Baby</span>
        <span>Kindle eBooks</span>
        <span>Shashw...'s Amazon.in</span>
        <span>Gift Ideas</span>
    </div>

    <div class="cat-image">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2020/February/50-MP_SWM_W8._CB423204969_.jpg" alt="">
    </div>
    
</div>
</template>

<script>
export default {
    name: 'NavBarCat',
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
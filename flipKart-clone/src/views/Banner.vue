<template>
  <section>
<div class="banner">
    <picture class="slider">
        <img src="../assets/img/banner1.jpg" alt="banner">
        <img src="../assets/img/banner1.jpg" alt="banner">
        <img src="../assets/img/banner1.jpg" alt="banner">
        <img src="../assets/img/banner1.jpg" alt="banner">
        <img src="../assets/img/banner1.jpg" alt="banner">


    </picture>
</div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.banner{
 
 width: 100%;
 overflow: hidden;
 
}
.slider{
    width: 4098;
    display: flex;
    flex-direction: row;
    position: relative;
    animation-name: slide;
    animation-duration: 15s;
    animation-iteration-count: infinite;
}
 
.slider img{
    width: 100%;
} 
@keyframes slide{
    0%{
        left: 0px;
    }
    26.66%{
        left: 0px;
    }
     33.33%{
        left: -1366px;
    }
     60%{
        left: -1366px;
    }
    66.66%{
        left: -2732px;
    }
    93.33%{
        left: -2732px;
    }


    100%{
        left: -4098px;
    }

}
</style>
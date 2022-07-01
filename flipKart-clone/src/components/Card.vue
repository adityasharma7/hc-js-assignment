<template>
	<div class="common-col">
		<img src="../assets/img/p1.jpeg" alt="mobile">
		<h3>Poco m2 pro</h3>
		<h4>5000mAh Bttery</h4>
		<h6>Now<i class="fas fa-rupee-sign"></i>13999</h6>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.common-col{
     text-align: center;
     line-height: 22px;
 }
 .common-col img{
     width: 69px;
     height: 150px;
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
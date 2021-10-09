<template>
    <div>
        
<div style="background-color:#72757E;color:white;padding:30px" class="box">

<div class="bannersub">
<h1>Subscribe to Newsletters</h1>



<button class="button">SUBSCRIBE</button>
</div>
<p>Be aware of upcoming sales and events. Receive gifts and special offers!</p>
</div>
    </div>
</template>
<script>
export default {
    name:'BannerSubscribe '
}
</script>
<style scoped>
p{
    display: flex;
    justify-content: flex-start;
     /* border:2px solid rgb(158, 145, 145); */
     margin-top: 5px
}
.bannersub{
    display: flex;
    justify-content: space-between;
   
}
h1{
   
    color:#FFFFFF;
    font-style: normal;
font-weight: 600;
font-size: 42px;
/* line-height: 140%; */
}
.box{
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrPvyXsSJ7o0rzOHlIbt3Bks2qb2ISApYsg&usqp=CAU')
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  padding: 14px 40px;
}

</style>


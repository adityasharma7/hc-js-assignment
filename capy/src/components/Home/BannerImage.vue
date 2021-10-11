<template>

  <div class="grid-container">
    <div class="grid-item frid-item-1">
      
      <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg" alt="">
    </div>
    <div class="grid-item frid-item-2">
      <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg" alt="">
    </div>
    <div class="grid-item frid-item-3">
      <div class="ki-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpI83tOtSsCyTg36YtzYWZNgqsGIi9JcUN5g&usqp=CAU" style="height:300px; width:100%; display:block" alt="">
      </div>
      <div class="ki-2">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/1fb4a81c-d5e2-4e46-93d8-b6a87ca92c021597840342817-Content-footwear-color-colorblock.jpg" style="height:200px; width:80%; margin-top:23px;" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'BannerImage'
}
</script>
<style scoped>
.display{
    display: flex;
}
.img1{
    background-image: url('https://i.ytimg.com/vi/JosWoVYnbKA/maxresdefault.jpg') 
    ;height:300px ;
    width: 332px;
}
.img2{
    background-image: url('https://myntrascmuistatic.myntassets.com/partner-assets/unity/partners/img/partners_landing2.png') 
    ;height:348px ;
    width: 332px;
}
.img3{
    background-image: url('https://i.ytimg.com/vi/JosWoVYnbKA/maxresdefault.jpg') 
    ;height:300px ;
    width: 332px;
}

.grid-container{
  margin-top: 50px;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 30px;
  justify-content: space-between;
}
.grid-item{
  object-fit: cover;
  height: 100%;
}
.frid-item-3{
  margin-left: -50px;
}
</style>



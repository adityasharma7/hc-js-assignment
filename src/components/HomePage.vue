<template>

<!-- PhotoSlider on the top -->


  <PhotoSlider />


<!-- Grid Container -->

  <div class="grid-container">
    <div class="grid-item frid-item-1">
      <img src="https://image.freepik.com/free-photo/organic-body-oil-hair-brush_23-2148796381.jpg" alt="">
    </div>
    <div class="grid-item frid-item-2">
      <img src="https://image.freepik.com/free-psd/women-rsquo-s-earth-tone-fashion-template-psd-social-media-story_53876-130182.jpg" alt="">
    </div>
    <div class="grid-item frid-item-3">
      <div class="ki-1">
        <img src="https://image.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses_158538-4730.jpg" style="height:300px; width:100%; display:block" alt="">
      </div>
      <div class="ki-2">
        <img src="https://img.freepik.com/free-photo/top-view-natural-cosmetics-concept_23-2148578649.jpg?size=338&ext=jpg" style="height:300px; width:100%; margin-top:23px;" alt="">
      </div>
    </div>
  </div>

  <!-- News  letter -->
  <div id="news">
    <div id="head">
      <h1>Subscribe to Newsletters</h1>
    </div>
    <div id="content">
      Be aware of upcoming sales and events. Receive gifts and special offers!
    </div>
    <button>
      SUBSCRIBE
    </button>
  </div>


  <!-- Best Sellers -->
  
  <h1 id="news-head">Best Sellers</h1>
  <div id="best">
    <div><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/24/b65dcf4d-976f-40ff-b6af-ec024c87aa8c1632464861204-image_jpeg_769708168.jpg" style="height:260px; width:200px;" alt=""></div>
    <div><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/24/5af8cfbf-0eef-4bbd-bc15-af7870029a3b1632464839003-image_jpeg_2005307177.jpg" style="height:260px; width:200px;" alt=""></div>
    <div><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/24/0ce1c0fb-761e-4504-b96c-8b3dc46d1f831632464815432-image_jpeg_1417223672.jpg" style="height:260px; width:200px;" alt=""></div>
    <div><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/24/c9bf9916-1047-452a-b9ac-e84fd7e7a4951632464790181-image_jpeg_1309864379.jpg" style="height:260px; width:200px;" alt=""></div>
    <div><img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/24/6a10ecef-c246-4ae8-8285-8ee88346fe821632464761257-image_jpeg_350295818.jpg" style="height:260px; width:200px;" alt=""></div>
  </div>

  <!-- Share Your Look -->
  <div id="share-look-content">
    <h1>Share Your Look</h1>
    <h3>#shareyourlook</h3>
  </div>
  <div id="best">
    <div><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14947340/2021/8/1/2b6c4a7d-5666-4879-a6da-8053855f81061627837389123-VASTRAMAY-Boys-Mustard-Yellow-Pure-Cotton-Kurta-with-Trouser-6.jpg" style="height:400px; width:340px;" alt=""></div>
    <div><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg" style="height:400px; width:340px;" alt=""></div>
    <div><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11077774/2019/12/24/29bdd2c8-3e2f-43aa-8ce5-55f3a501a4fa1577166621272-Difference-of-Opinion-Men-Sea-Green-Solid-Round-Neck-T-shirt-1.jpg" style="height:400px; width:340px;" alt=""></div>
    <div><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13515828/2021/3/9/3c9ae2a6-d702-460e-8112-fe9327794a891615295030445IndoEraNavyBlueSolidStraightKurtaTrouserWithDupattaSets1.jpg" style="height:400px; width:340px;" alt=""></div>
    <div><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/5/22/dfddfe69-d1c3-43c5-9304-37cc65ae6d651558515400506-1.jpg" style="height:400px; width:340px;" alt=""></div>
    <div><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg" style="height:400px; width:340px;" alt=""></div>
  </div>
  

</template>

<script>
import PhotoSlider from './PhotoSlider.vue'

export default {
    name:'HomePage',
    components:{
      PhotoSlider
    }
}
</script>

<style scoped>
/* *{
  /* border:2px solid black; 
} */

/* Grid Container */

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


/* Newsletter Styling */

#news{
  width: 90vw;
  height:50vh;
  margin-top: 150px;
  margin-bottom: 150px;
  background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/7/b1d9fa25-c642-4f35-b6f8-a8605206b7851633613336500-DK-offer-ending-soon-copy.jpg') center center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  font-family: Raleway, sans-serif;
}

#news-head{
  font-size: 50px;
  margin-top:0px;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Raleway",sans-serif;
  font-weight: 300;
}

#news div{
  position: relative;
  color: white;
}

#news #head{
  left: 60px;
  top: 100px;
  font-size: 30px;
}

#news #content{
  left: 60px;
  top: 80px;
  font-size: 20px;
}

#news button{
  position: relative;
  top: 5px;
  left: 1050px;
  padding: 20px;
  width: 150px;
  color:white;
  background-color:#5ECE7B;
  font-weight: 700;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

#best{
  display: flex;
  width: 90vw;
  justify-content: center;
  align-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}

#best div{
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 30px;
}

/* Share Your Look Styling */

#share-look-content{
  text-align: center;
}

#share-look-content h1{
  font-size: 50px;
  margin-top:100px;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Raleway",sans-serif;
  font-weight: 300;
}

#share-look-content h3{
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 40px;
  text-align: center;
  font-family: "Raleway",sans-serif;
  font-weight: 300;
}



</style>
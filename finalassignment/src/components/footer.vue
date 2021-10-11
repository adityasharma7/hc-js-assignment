<template>
  
  <div id="footer">
      <div id="orders">
          <h4>ORDERS</h4>
          <ul>
              <li>My Account</li>
              <li>Delivery</li>
              <li>Return Policy</li>
          </ul>
      </div>
      <div id="help">
          <h4>  HELP</h4>
          <ul>
              <li>Customer Service</li>
              <li>Size Guide</li>
              <li>Contact Us</li>
          </ul>
      </div>
      <div id="aboutus">
          <h4>ABOUT US</h4>
          <ul>
              <li>About Us</li>
              <li>Store Locator</li>
              <li>Customer Service</li>
          </ul>
      </div>
      <div id="others">
          <h4>OTHERS</h4>
          <ul>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
              <li>v1.12.1 2021-06-24 10:41:56</li>
          </ul>
      </div>
      <div id="social">
          <h4>SOCIAL</h4>
          <ul>
              <li><img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Facebook-512.png" style="height:30px; width:30px;" alt=""></li>
              <li><img src="https://www.pnglib.com/wp-content/uploads/2021/02/instagram-logo-png_6023f9ae2ae54-680x680.png" style="height:30px; width:30px;" alt=""></li>
              <li><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" style="height:30px; width:30px;" alt=""></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'footer',
}
</script>

<style scoped>
/* *{
    border: 1px solid black;
} */
#footer{
    margin-top: 200px;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    font-family: "Roboto",sans-serif;
}
#footer div{
    display: inline-block;
    width: 20%;
}
#footer div ul{
    text-decoration: none;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}
#footer div ul li{
    margin:0px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgb(122, 122, 122);
}
#footer h4{
    margin-bottom: 30px;
}
#social{
    float: right;
}
#social ul li{
    display: inline-block;
    /* margin-right: 10px; */
} 
#social ul li img{
    margin-right:25px;
}
</style>
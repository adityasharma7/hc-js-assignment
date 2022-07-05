<template>
  <footer>
    <div class="footer-row">
        <div class="footer-col-1">
            <div class="footer-heading">
                 <p>ABOUT</p>
            </div>
            <div class="footer-list">
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Flipkart Stories</a>
                <a href="#">Press</a>
                <a href="#">Flipkart Wholesale</a>
            </div>
        </div>
        <div class="footer-col-2">
            <div class="footer-heading">
                 <p>HELP</p>
            </div>
            <div class="footer-list">
                <a href="#">Payments</a>
                <a href="#">Shipping</a>
                <a href="#">Cancellation & Returns</a>
                <a href="#">FAQ</a>
                <a href="#">Report Infringement</a>
                
            </div>
        </div>
        <div class="footer-col-3">
            <div class="footer-heading">
                 <p>POLICY</p>
            </div>
            <div class="footer-list">
                <a href="#">Return Policy</a>
                <a href="#">Terms Of Use</a>
                <a href="#">Security</a>
                <a href="#">Privacy</a>
                <a href="#">Sitemap</a>
                <a href="#">EPR Compliance</a>
            </div>
        </div>
        <div class="footer-col-4">
            <div class="footer-heading">
                 <p>SOCIAL</p>
            </div>
            <div class="footer-list">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">YouTube</a>
               
            </div>
        </div>

        <div class="footer-col-5">
            <div class="footer-heading">
                 <p>Mail Us</p>
            </div>
            <div class="footer-list">
                 <p>Flipkart Internet Private Limited,
                    Buildings Alyssa, Begonia &
                    Clove Embassy Tech Village,
                    Outer Ring Road, Devarabeesanahalli Village,
                    Bengaluru, 560103,
                    Karnataka, India</p>
               
            </div>
        </div>

        <div class="footer-col-6">
            <div class="footer-heading">
                 <p>Registered Office Address</p>
            </div>
            <div class="footer-list-address">
             <p>Flipkart Internet Private Limited,</p>
             <p>Buildings Alyssa, Begonia &</p>
             <p>Clove Embassy Tech Village,</p>
             <p>Outer Ring Road, Devarabeesanahalli Village,</p>
             <p>Bengaluru, 560103,</p>
             <p>Karnataka, India</p>
             <p>CIN : U51109KA2012PTC066107</p>
             <p> Telephone:<span> 1800 202 9898</span></p>
               
            </div>
        </div>
    </div>
    <div class="footer-row2">
        <div class="footer-row2-col">
            <p> <i class="fas fa-shopping-bag"></i>Sell On Flipkart</p>
        </div>
        <div class="footer-row2-col">
            <p><i class="fas fa-star"></i>Advertise</p>
        </div>
        <div class="footer-row2-col">
            <p><i class="fas fa-gift"></i>Gift Cards</p>
        </div>
        <div class="footer-row2-col">
            <p><i class="fas fa-question-circle"></i>Help Center</p>
        </div>
        <div class="footer-row2-col">
            <p>© 2007-2021 Flipkart.com</p>
        </div>
        <div class="footer-row2-col">
            <img src=" flipkart images/payment.png" alt="payments">
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
    background-color: #172337;
    height: 332;
}
.footer-row{
    width: 100%;
    height: 270px;
    display: flex;
    padding: 30px 60px;
}
.footer-row2{
    display: flex;
    border-top: 1px solid #454d5e;
    justify-content: space-evenly;
}
.footer-col-1{
    width: 15%;
}
.footer-col-2{
    width: 15%;
}
.footer-col-3{
    width: 15%;
}
.footer-col-4{
    width: 10%;
}
.footer-col-5{
    width: 20%;
    border-left:1px solid #454d5e ;
    height: 120px;
    padding-left: 25px;
}
.footer-col-6{
    width: 20%;
    padding-left: 50px;
}
.footer-heading p{
 color: #878787;
 font-size: 12px;
 font-weight: 400;
 text-align: left;
 padding: 10px 0px;
 cursor: pointer;
 text-transform: uppercase;
}
.footer-list a{
    text-align: left;
    display: block;
    text-decoration: none;
   text-transform: capitalize;
    color: white;
    font-size: 12px;
    font-weight: 400;
    padding: 5px 0px;
}
.footer-list a:hover{
    text-decoration: underline;
}
.footer-list  p{
    text-align: left;
    display: block;
    color: white;
    font-size: 12px;
    font-weight: 100px;
    padding:5px 0px;
    line-height: 20px;
    cursor: pointer;
}
.footer-list-address p{
    text-align: left;
    display: block;
    color: white;
    font-size: 12px;
    font-weight: 100px;
    line-height: 20px;
     cursor: pointer;
}
.footer-list-address span{
    color: rgb(60,109,245);
    cursor: pointer;
}
.footer-row2-col p{
  color: white;
    font-size: 15px;
    font-weight: 100px;
    line-height: 20px;
     cursor: pointer;
      text-align: center;
      line-height: 50px;
      letter-spacing: .7px;
}
.fa-shopping-bag, .fa-star, .fa-gift ,.fa-question-circle{
    color: #ffd700;
    cursor: pointer;
   padding-right: 10px;
   font-size: 15px;
}
</style>
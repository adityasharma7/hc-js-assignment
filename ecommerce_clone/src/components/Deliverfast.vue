
<template>
  <div class="deliver">
    <div class="content">
      <ul
        id="stack_yuda"
        class="nextBestActnWidget stack stack--yuda perspective"
        widgetlength="7"
      >
        <li
          class="
            stack__item
            nextBestActlist
            pincodeActnWidget
            stack__item--current
          "
          action="pincode"
          style="
            opacity: 1;
            z-index: 4;
            pointer-events: auto;
            transform: translate3d(0px, 0px, 0px);
            transition: transform 0.5s ease-out 0s;
            margin: 0px;
          "
        >
          <div class="widgetImage nbaFinalImage pincodeImg"></div>
          <div class="deliveryPin">Your Delivery Pincode</div>
          <div class="dashPincode"></div>
          <p class="letDelivr">
            Enter your pincode to check availability and faster delivery options
          </p>
          <div class="reset-padding check-avail-pin-input-nba marT10">
            <input
              class=""
              type="text"
              id="pincode-check-nba"
              maxlength="6"
              size="24"
              placeholder="Enter pincode"
              value=""
            />
          </div>
             <div class="controls nextBestActionControls padT20 col-xs-24">
            <button
              class="
                btn btn-theme-secondary
                pincodeNbaSubmit
                button--reject
                nextBestActionTrack
                col-xs-16
              "
              data-stack="stack_yuda"
            >
              <span class="">SUBMIT</span></button
            ><button
              class="
                btn
                pincodeSkipSubmit
                btn-light
                col-xs-7
                rfloat
                button--accept
              "
              data-stack="stack_yuda"
            >
              <span class="">NEXT</span>
            </button>
          </div>
        </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
    name:"Deliverfast"
}
</script>
<style scoped>
.nbaFinalImage {
    background-image: url("../assets/artboardNext.png");
    background-repeat: no-repeat;
    display: block;
    background-position: center;
    width: 133px;
    height:88px;
}
.widgetImage{
    height: 133px;
    width:200px;
    padding: 50px;
    background-color: white;
    margin-right: 50px;
    margin-left: 3%;
}
.pincodeNbaSubmit {
  background-color: #333;
  color: #fff;
  padding: 4px 30px;
  height: 38px;
  border: none;
}
.pincodeSkipSubmit{
  background-color: #fff;
  color: #000;
  padding: 4px 20px;
  margin-left: 4px;
  height: 38px;
  border: none;
}
.content{
  background: white;
  width:230px;
  height:329px;
  font-size:15px;
  padding: 4px;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 5px black;
}
li{
  list-style: none;
}
.deliveryPin{
  text-align: center;
  margin-right: 10px;
  font-size:12px;
  color: gray;
}
.letDelivr{
    font-size: 11px;
    font-weight: normal;
    line-height: 1.59;
    text-align: left;
    color: #5a5a59;
    padding-left: 3px;
    padding-right: 5px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.controls{
  margin-left: 1%;
  margin-top: 20px;
}
input{
  margin-left: 1%;
  margin: 2px;


}
.deliver{
    margin-top:2px;
    margin-left:10px;
}
</style>


<template>
  <!-- <h1>Your Name {{item[0].firstName}} {{ item[0].lastName }} </h1> -->

  <div id="head">
      Home &nbsp;&nbsp;| &nbsp;&nbsp;My Account
  </div>
  <div>
      <div id="left">
          <h1>My Account</h1>
          <div id="personal">
              <h2>Personal Details</h2>
              <ul>
                  <li> <a href="">My Profile</a> </li>
                  <li> <a href="">Shipping Details</a> </li>
                  <li> <a href="">Loyality Card</a> </li>
                  <li> <a href="">My Newsletter</a> </li>
                  <li> <a href="" @click="logout">Log Out</a></li>
              </ul>
          </div>
          <div id="order-detail">
              <h2>Order details</h2>
              <ul>
                  <li> <a href="">Order history</a> </li>
                  <li> <a href="">My reviews</a> </li>
              </ul>
          </div>
      </div>
      <div id="right">
          <!-- <div id="buttons"></div> -->
          <button @click="personalData = true; passwordChange = false;">Personal Data</button>
          <button @click="passwordChange = true; personalData = false">Password Change</button>
          <div v-if="personalData">
              <div class="top-content">Feel free to edit any of your details below so your account is always up to date</div>
              <h3>First Name</h3>
              <input type="text" v-model="firstName">
              <h3>Last Name</h3>
              <input type="text" v-model="lastName">
              <h3>Email Id</h3>
              <input type="email" v-model="email">
              <button id="final">UPDATE PERSONAL DATA</button>
          </div>
          <div v-if="passwordChange">
              <div class="top-content">If you want to change the password to access your account, enter the following information:
                    Your current email address is {{ items.email }}
              </div>  
              <h3>Current Password</h3>
              <input type="password" >
              <h3>New Password</h3>
              <input type="password" >
              <h3>Confirm New Password</h3>
              <input type="password" >
              <button id="final">UPDATE PASSWORD</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"UserProfile",
    data(){
        return{
            items:[],
            personalData:true,
            passwordChange:false,
            firstName:'',
            lastName:'',
            email:''
        }
    },
    mounted(){
        this.items = JSON.parse(localStorage.getItem('user-info'))
        console.log(this.items)
        this.firstName = this.items.firstName
        this.lastName =  this.items.lastName
        this.email = this.items.email
    },
    methods: {
        logout(){
            if(confirm('Do you surely want to logout')){
                localStorage.removeItem('user-info')
                // this.$router.push({Name:'HomePage'})
                this.$router.push({name:'HomePage'})
            }
            
        }
    }
}
</script>

<style scoped>

/* Stylig the head */

#head{
    margin: 10px 10px;
    padding-top: 20px;
    padding-left: 20px;
    font-size: 18px;
    color: grey;
}

/* Styling the left portion */

#left{
    width: 30%;
    /* display: inline-block; */
    float: left;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: rgb(239, 242, 243);
    padding-left: 32px;
    padding-top: 15px;
    margin-top: 20px;
    padding-bottom: 20px;
    margin-left: 20px;
}

#left h1{
    font-weight: 400;
    margin-bottom: 20px;

}

#left h2{
    font-weight: 500;
    margin-bottom: 30px;
    margin-top: 30px;
}

#left ul li a{
    text-decoration: none;
    color: rgb(106, 107, 106);
    font-size: 18px;
}

#left ul{
    list-style-type: none;
    padding-left: 0px;
}

#left ul li{
    margin: 20px 0px;
}


/* Styling the right portion */

#right{
    width: 55%;
    display: inline-block;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* background-color: aqua; */
    margin-top: 20px;
    margin-left: 50px;
    padding: 40px 20px;
    padding-left: 0px;
}

#right button{
    width: 30%;
    font-size: 20px;
    padding: 8px;
    margin-right: 32px;
    margin-bottom: -4px;
    border: none;
    background-color: white;
    border-bottom: 2px solid rgb(189, 187, 187);
    text-align: left;
    font-weight: lighter;
    cursor: pointer;
    width: auto;
    color: rgb(124, 123, 121);
}

#right button:focus{
    color: black;
    border-bottom: 2px solid black;
}

#right button:visited{
    border: none;
}

.top-content{
    padding-top: 20px;
    margin-top: 2px;
    border-top: 2px solid rgb(189, 187, 187);
    padding-left: 8px;
    margin-bottom: 35px;
}

h3{
    margin: 0px;
    font-weight: 100;
    font-size: 13px;
    padding-left: 8px;
}

#right input{
    width: 80%;
    margin-top: 5px;
    margin-bottom: 30px;
    padding: 10px;
    font-size: 20px;
    margin-left: 8px;
    border: none;
    border-bottom: 2px solid rgb(240, 237, 237);
    color: rgb(145, 143, 143);
    padding-left: 0px;
}

#right input:focus{
    border-bottom: 2px solid rgb(13, 240, 164);
    outline: none;
}

button #final{
    border: none;
    background-color: rgb(7, 251, 170);
}

#right div button{
    border: none;
    background-color: rgb(19, 199, 139);
    font-size: 18px;
    color: white;
    font-weight: 500;
    padding: 10px;
    margin-left: 10px;
    margin-top: 20px;
}
</style>
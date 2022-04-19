<template>
  <div class="container2">
    <form>
      <h2>Registration Form</h2>
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" value="" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" value="" /><br />

      <lable for="Gender">Gender:</lable><br />
      <input type="radio" name="male" />Male<br />
      <input type="radio" name="other" />Female<br />
      <input type="radio" name="other" />Other<br />

      <label for="email">Enter your Email address:</label><br />
      <input type="email" id="Eid" name="Email" value="" /><br />

      <lable for="password">Enter password</lable><br/>
      <input type="password" class="all" placeholder="Password" v-model="signup.password" /><span style="color: red">*</span><br />
      <lable for="confrmpassword">confirm password </lable><br/>
      <input type="password" class="all" placeholder="Confirm password" v-model="signup.confirm_password"/>
      <h2 v-if="signup.show" style="color: red; font-size: 10px"> The password confirmation does not match </h2>
      <span style="color: red">*</span>
   
     
      
      <label for="contact"> Contact No.: </label><br />
      <input type="text" id="contact" name="Contact No." value="" /><br />
    
      <lable for="myfile">Upload Photo</lable><br />
      <input type="file" id="myfile" name="myfile" /><br />
      <br />

    <input type="submit" value="Submit" name="submit"  @click="redirect" class="float-left submit-button" style="background-color: rgb(100, 100, 241)"  />
    </form>
  </div>
</template>

<script>

export default {
  name: "RegistrationPg",
  data() {
    return {
      signup: {
        password:null,
        confirm_password:null,
        show:false
      }
    };
  },
  methods: {
   redirect(e){
     if (this.signup.password !== this.signup.confirm_password) {
        e.preventDefault();
        this.signup.show = true;
        console.warn("password confirmation does not match");
     }else{this.$router.push({ name: 'LoginPg'})}
       

   },
   
  }
    }
</script>

<style scoped>
*{
  text-align: left;
}

div {
  background-color: wheat;
  height: 500px;
  width: 250px;
  position: relative;
  align-items: center;
  left: 40%;
  top: 30px;
  border: 3px solid black;
  padding: 20px;
}

</style>
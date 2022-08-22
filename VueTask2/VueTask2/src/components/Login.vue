<template>
  

  <div>



   <h1 style="text-align: center; margin-top: 40px;">Login Page</h1>



    <form >
        <label for="alreadyRe">Already Have An Account ?</label> <br>
    <fieldset> 
        <legend style="font-weight: bold;"><h2>SignIn</h2></legend>

        <label for="Username">Enter UserName</label> <br>
        <input type="text" id="Username" name="Username" size="30"><br><br>

        <label for="password">Enter Password</label> <br>
        <input type="password" id="password" name="password" size="30"><br><br>

    </fieldset>
</form>



  </div>


</template>

<script>
export default {
    name: 'Login'
}
</script>

<style>


form {
text-align: center; margin-top: 40px; background-color: azure;



}
</style>
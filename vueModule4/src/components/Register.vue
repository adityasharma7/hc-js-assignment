<template>
<div>

 <h1 style="text-align: center; margin-top: 40px;">SignUp Page</h1>
   <form>
     <label for="alreadyRe">Tell us about yourself</label> <br>

        <fieldset>            

            <legend style="font-weight: bold;"><h2></h2></legend>


            <label for="Username">Enter Name</label> <br>
            <input type="text" id="Username" name="Username" size="30"><br><br>


            <label for="email">Email</label> <br>
            <input type="email" id="email" name="email" size="30"><br><br>

            <label for="phone">Phone No.</label> <br>

            <input type="text" name="phone" size="12" > <br>


            <label for="gender">Gender: </label>
            <input type="radio" id="gender" name="gender" value="male" size="30">Male
            <input type="radio" id="gender" name="gender" value="female" size="30">Female <br /><br>

            <label for="password">Enter Password</label> <br>
            <input type="password" id="password" name="password" size="30"><br><br>


            <label for="Cpassword">Confirm Password</label> <br>
            <input type="password" id="Cpassword" name="Cpassword" size="30"><br><br>



            <label>Country/Region</label> <br>
            <select name="country" id="Country" style="width:160px"><br>
                <option value="india">India</option>
                <option value="pakistan">London</option>
                <option value="africa">Africa</option>
                <option value="china">China</option>
                <option value="other">other</option>
            </select> <br><br>

            <label for="address">Enter Address </label> <br>
            <textarea name="address" id="address" cols="30" rows="3" ></textarea><br><br><br>

            <input type="submit" value="Submit" id="submit">
    <input type="reset" value="Reset" id="reset"><br><br><br>

    <label for="T&C">I have read and understood the Terms and Conditions of E-comm </label> <br>
    <input type="checkbox" value="checkbox" id="T&C" size="30"><br><br><br>





        </fieldset>



    </form>
    </div>

</template>

<script>
export default {
name :'SignUp'
 
}
</script>

<style>
form {
text-align: center; margin-top: 40px; background-color: azure;
}
</style>
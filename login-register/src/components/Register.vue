<template>
  <form action="" method="post">
    <label for="fname">Name: </label> <br />
    <input for="fname" type="text" required placeholder="First Name" />
    <br />

    <input for="lname" type="text" required placeholder="Last Name" />
    <br />
    <br />

    <label for="email">Email: </label> <br />
    <input for="email" type="email" required placeholder="example@email.com" />
    <br />
    <br />

    <label for="phone">Phone: </label> <br />
    <input for="phone" type="text" size="10" required />
    <br />
    <br />

  


    <label for="gender">Gender: </label>
    <input type="radio" name="gender" value="male" />Male
    <input type="radio" name="gender" value="female" />Female
    <br />
    <br />

    <label for="password">Enter Password: </label> <br />
    <input type="password" name="password" required /><br /><br />

    <label for="Cpassword">Confirm Password: </label> <br />
    <input type="password" name="password" required /><br /><br />
    <input type="submit" value="Create Account" />
    <br />
    <br />
    <RouterLink to="/">Already have an account? </RouterLink>

  </form>
</template>

<script>
export default {
  name: "MyRegister"
}
</script>
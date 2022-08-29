<template>
  <form action="" method="get">
    <label for="email">Email: </label> <br />
    <input for="email" type="email" required placeholder="example@email.com" />
    <br /><br />
    <label for="password">Enter Password: </label> <br />
    <input type="password" name="password" required /><br /><br />
    <input type="submit" value="Login" />
    <br><br>
    <RouterLink to="/register">Do not have an account? </RouterLink>
  </form>
</template>

<script>
export default {
  name: "MyLogin"
}
</script>
<template>
  <div>
    <h1> Login into website</h1>
    <div>facebook linkedin twitter </div>
    <p>or use your email account</p>
		<form action="#">
			<div>
				<input type="text" name="Email" placeholder="Email" id="login-email">
			</div>
			<div>
				<input type="password" name="Password" placeholder="Password" id="login-password">
			</div>
			<div><a href="http://" rel="noopener noreferrer">Forget Password</a></div>
			<div>
				<input type="submit" value="Login">
			</div>
		</form>
  </div>
</template>

<script>
export default {
    name:"Login"

}
</script>

<style>

</style>
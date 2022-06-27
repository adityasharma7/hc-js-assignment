<template>
  <div> 
    <h1>Create Account</h1>
    <div>facebook google twitter</div>
    <p>or use your email account</p>
		<form action="#">
			<div>
				<div>
					<input type="text" name="Name" id="Name" placeholder="Name"/>
				</div>
				<div>
					<input type="Email" name="Email" id="Email" placeholder="Email"/>
				</div>
				<div>
					<input type="Password" name="Password" id="Password" placeholder="Password"/>
				</div>
				<div>
					<input type="submit" value="signup">
				</div>
			</div>
		</form>
  </div>
</template>

<script>
export default {
    name:"SignUp"

}
</script>

<style>
input{
    padding: 3px;
    margin: 4px;
}
</style>
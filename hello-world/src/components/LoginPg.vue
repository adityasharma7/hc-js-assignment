<template>
<div id="contanier1">
<h1>Login here</h1>
<form @submit="loginPg">
<input type="text" name="username" placeholder="Enter your name" v-model="name"/><br> <br>
<input type="email" placeholder="Enter your email address" v-model="password" /><br><br>
<input type="password" placeholder="Enter the password" /><br><br>

 <button type="submit" @click= "redirect" style="background-color: rgb(100, 100, 241);" class="btn">submit</button>

</form>
</div>
</template>

<script>

export default {
name: "LoginPg",
data()
{
return{ }
}, 
methods: {
redirect(){
    this.$router.push({ name: 'HomeView'})
}
}
}
</script>



<template>
    <div class="login">
			
			
					<h3>Login</h3>
				
				
					<input type="email" placeholder="Email" name="email" required>
					<input type="password" placeholder="Password" name="password" required>
				
			
					
					<button type="submit" @click="handleLogin">
                		Login
            		</button>
				
			
					<h4>
						{{ this.message }}
					</h4>
				</div>
			
   
</template>

<script>



export default {
	components: {
		
	},
    data() {
        return {
            email : "",
            password: "",
		
        }
    },
    methods() {
        handleLogin: (e) => {
            let url = 'http://localhost:3333/login'
            if(this.password.length > 0){
                this.$post(url,{
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
}
</script>
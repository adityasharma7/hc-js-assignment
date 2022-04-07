<template>
    <div class="container">
        <div>
            <h1>Welcome Back!</h1>
        </div>
        <div>
            <form onsubmit="#">
                <div>
                    <label for="User Id">User Id:</label> <br>
                    <input type="email" v-model="email">
                </div>
                <div>
                    <label for="Password">Password</label> <br>
                    <input type="password" v-model="password">
                </div>
                <input type="submit" @click="checkData">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                email: "",
                password: "",
            }
        },
        methods: {
            checkData() {

                this.email === "" && this.password === "" ? alert("Empty Fields: Please enter credentials") : undefined

                let usersData = JSON.parse(localStorage.getItem("User Data"));
                let userAuthVal = usersData.find(this.authenticate)

                if (userAuthVal.emailID === this.email && userAuthVal.password === this.password ){ 
                    alert("Authenticated");
                    return this.$router.push({ name : 'Client'})
                }
                
                alert("You are not a user please register");
                return false
            },

            authenticate(user){
                if (user.emailID === this.email && user.password === this.password ){ 
                    return true
                } 
            }
        },
    }
</script>

<style scoped>
    .container {
        margin:  10rem auto;
        max-width: 30rem;
        padding: 40px;
    }

    h1 { 
        text-align: center;
        margin: 10px auto;    
    }

    label {
        font-size: 20px;
        font-weight: bold;
    }


    input[type=email], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin-top: 1.3rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }
</style>



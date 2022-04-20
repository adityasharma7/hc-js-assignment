<template>
    <div class="container">
        <div>
            <h1>Welcome Back!</h1>
        </div>
        <div>
            <form>
                <div>
                    <label for="User Id">User Id:</label> <br>
                    <input type="text" v-model="userName" placeholder="mor_2314">
                </div>
                <div>
                    <label for="Password">Password</label> <br>
                    <input type="password" v-model="passkey" placeholder="83r5^_">
                </div>
                <input type="submit" @click="loginAuth">
            </form>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'

  export default {
    name: 'Login',
    data() {
        return {
            userName: this.userName,
            passkey: this.passkey,
        }
    },
    mounted() {
        axios.interceptors.request.use(config => {
            config.headers = {
                "Accept": "*/*",
                "Content-Type": 'application/json',
            }
                
            return config
        },
        err => {
            console.log(err)
            return err    
        })
    },
    methods: {
        // Authenticate User
        async loginAuth(e) {
            e.preventDefault();
            console.log(this.userName, this.passkey);

            const obj = {
                    username: this.userName,
                    password: this.passkey,
            }

            // Get Token if user is registered -
            const token = await this.authenticateUser(obj)
            // Save Token to local -
            this.saveTokeToLocalStorage(token)
            // Redirect to Client -
            this.$router.push({name: 'ClientView'})
        },
        // Gets Token
        async authenticateUser(obj) {

            const {data} = await axios.post('https://fakestoreapi.com/auth/login', JSON.stringify(obj))

            return data
        },
        saveTokeToLocalStorage(token){
            localStorage.setItem('User Token', JSON.stringify(token))
        }
    },
  }
</script>

<style scoped>
    .container {
        margin:  10rem auto;
        max-width: 30rem;
        padding: 40px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    h1 { 
        text-align: center;
        margin-bottom: 20px;
    }
    label {
        font-size: 20px;
        font-weight: bold;
    }
    input[type=text], input[type=password] {
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
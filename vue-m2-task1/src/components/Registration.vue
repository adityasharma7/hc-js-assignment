<template>
    <div class="container">
        <div>
            <h1>Register @ Vue Com</h1>
        </div>
        <div>
            <form>
                <div>
                    <label for="User Id">User Id:</label> <br>
                    <input type="email" v-model="email">
                </div>
                <div>
                    <label for="Password">Password</label> <br>
                    <input type="password" v-model="password">
                </div>
                <div>
                    <label for="Password">Verify Password</label> <br>
                    <input type="password" v-model="rePassword">
                </div>
                <input type="submit" @click="setData">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        data() {
            return {
                email: this.email,
                password: this.password,
                rePassword: this.rePassword,
            }
        },
        methods: {
            setData(e) {
                e.preventDefault();
                
                if (this.password !== this.rePassword) { 
                    alert("Your Passwords Don't match")
                    return
                }

                let usersData;

                if (localStorage.getItem('User Data') === null){
                    usersData = [];
                } else {
                    usersData = JSON.parse(localStorage.getItem('User Data'));
                }

                const user = {
                    emailID: this.email,
                    password: this.password,
                } 

                usersData.push(user)
                // Set User Data -
                localStorage.setItem("User Data", JSON.stringify(usersData))

                this.$router.push({name: "Home"})
            }
        }
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



<template>
    <div class="container">
        <div>
            <h1>iCloudStore Register</h1>
        </div>
        <div>
            <form id="registrationForm">
                <div class="flex">
                    <div>
                        <label for="First Name">First Name:</label>
                        <input type="text" v-model="firstName">
                    </div>
                    <div>
                        <label for="First Name">Last Name:</label>
                        <input type="text" v-model="lastName">
                    </div>
                </div>
                <div>
                    <label for="User Name">User Name:</label>
                    <input type="text" v-model="userName">
                </div>
                <div>
                    <label for="User Id">Email Id:</label> <br>
                    <input type="email" v-model="email">
                </div>
                <div>
                    <label for="Phone Number">Phone Number</label>
                    <input type="tel" v-model="phoneNumber">
                </div>
                <div>
                    <label for="Password">Password</label> <br>
                    <input type="password" v-model="password">
                </div>
                <div>
                    <label for="Password">Verify Password</label> <br>
                    <input type="password" v-model="rePassword">
                </div>
                <hr>
                <div class="address">
                    <label for="Address Info">Address Info:</label>
                </div>
                <div class="flex">
                    <div>
                        <label for="City">City:</label>
                        <input type="text" v-model="city">
                    </div>
                    <div>
                        <label for="zipcode">Zipcode:</label>
                        <input type="text" v-model="zipcode">
                        
                    </div>
                </div>
                <div>
                    <label for="Street">Street:</label>
                    <input type="text" v-model="street">
                </div>
                <input type="submit" @click="registerUser">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        data() {
            return {
                firstName: this.firstName,
                lastName: this.lastName,
                userName: this.userName,
                email: this.email,
                phoneNumber: this.phoneNumber,
                password: this.password,
                rePassword: this.rePassword,
                city: this.city,
                street: this.street,
                zipcode: this.zipcode,
            }
        },
        methods: {
            registerUser(e) {
                e.preventDefault();

                const personData = {
                    email: this.email,
                    username: this.username,
                    password: this.password,
                    name: {
                        firstname: this.firstname,
                        lastname: this.lastName,
                    },
                    address: {
                        city: this.city,
                        street: this.street,
                        number: 309,
                        zipcode: this.zipcode,
                        geolocation: {
                            lat: '-37.3159',
                            long: '81.1496',
                        }
                    },
                    phone: this.phoneNumber
                }

                this.registerNewUser(personData)
            },
            async registerNewUser(personData) {
                const respone = await fetch('https://fakestoreapi.com/users',{
                    method: 'POST',
                    body: JSON.stringify(personData),
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                    }
                })

                const dataRegistered = await respone.json()
                console.log(dataRegistered);
            }
        }
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
    input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .flex div:nth-child(1) {
        margin-right: 10px;
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

    .address {
        margin-top: 20px;
    }

    hr {
        margin-top: 20px;
    }
</style>
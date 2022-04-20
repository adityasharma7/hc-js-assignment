<template>
    <header class="navBar">
        <div class="flex container">
            <nav class="left">
                <ul class="flex">
                    <li>
                        <h1>iCloudStore</h1>
                    </li>
                    <li><a href="#" @click="$router.push('/')">Home</a></li>
                    <li><a href="#features">Upload</a></li>
                    <li><a href="#price">Your Data</a></li>
                </ul>
            </nav>
            <nav class="right">
                <button class="primary" @click="something">Profile</button>
                <button class="btn-primary">Logout</button>
            </nav>
        </div>
    </header>
</template>

<script>
    import axios from 'axios'
    import { setupCache } from 'axios-cache-adapter'


    export default {
        name: 'ClientHeader',
        mounted() {
            // Create `axios-cache-adapter` instance
            const cache = setupCache({
                maxAge: 15 * 60 * 1000
            })

            // Create `axios` instance passing the newly created `cache.adapter`
            const api = axios.create({
                adapter: cache.adapter
            })

            // Send a GET request to some REST api
            api({
                url: 'https://fakestoreapi.com/products',
                method: 'get'
            }).then(async (response) => {
                // Do something fantastic with response.data \o/
                console.log('Request response:', response)

                // Interacting with the store, see `localForage` API.
                const length = await cache.store.length()

                console.log('Cache store length:', length)
            })

        }, 
        methods: {
            something(e){
                e.preventDefault()
            }
        }, 
    }
</script>

<style scoped>
    .navBar {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
    }

    .navBar .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 15px 40px;
        justify-content: space-between;
        align-items: center;
    }

    .navBar ul {
        align-items: center;
    }

    .navBar li {
        padding: 5px 10px;
    }

    .navBar a {
        transition: all 0.3s ease-in;
    }

    .navBar a:hover {
        color: #0275d8;
    }

    .navBar button {
        margin: 0.3rem;
    }
</style>
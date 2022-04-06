<template>
    <div class="login-container">
        <h1>Register</h1>
        <div class="form-container">
            <form>
                <div class="mb-3">
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                    />
                </div>

                <div class="mb-3">
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Set Username"
                    />
                </div>

                <div class="mb-3">
                    <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="mb-3">
                    <input type="password" placeholder="Confirm Password" class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">I declare all informations are authentic</label>
                </div>
                <button type="submit" class="btn btn-success">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped>
    .login-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 450px;
        margin: auto;
        margin-top: 200px;
        background-color: #f4f4f4;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .form-container {
        width: 80%;
    }

    .btn {
        width: 100%;
        position: relative;
        align-items: center;
        margin-bottom: 30px;

    }

    h1 {
        margin: 15px 15px;
    }

    hr {
        margin-bottom: 30px;
        width: 80%;
        border: 1px solid darkgray;
    }
</style>
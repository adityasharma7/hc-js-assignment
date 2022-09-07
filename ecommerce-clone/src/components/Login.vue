<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card px-5 py-5" id="form1">
          <form @submit.prevent="userLogin()">
            <div class="form-data">
              <div class="forms-inputs mb-4">
                <span>
                  {{  $t('username')  }}
                </span>
                <input v-model="username" type="text">
              </div>
              <div class="forms-inputs mb-4">
                <span>
                  {{  $t('password')  }}
                </span>
                <input v-model="password" autocomplete="off" type="password">
              </div>
              <div class="mb-3">
                <button class="btn" @click="changeButtonText()">
                  {{  $t('login')  }}
                </button>
              </div>

              <br>
              <RouterLink to="/register">
                {{  $t('doNotHaveAccount')  }}
                
              </RouterLink>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: "mor_2314",
      password: "83r5^_",
      accessToken: null,
    }
  },
  methods: {
    changeButtonText() {
      document.querySelector('.btn').innerHTML = "Loading..."
    },
    async userLogin() {
      try {
        if (!localStorage.token) {
          const response = await axios.post('https://fakestoreapi.com/auth/login', {
            username: this.username,
            password: this.password
          })

          localStorage.setItem('token', response.data.token)
          localStorage.setItem('loginStatus', "true")
          this.$router.push('/')
        }
      } catch (error) {
        console.log(error);
      }
    },
    checkUserLogin() {
      if (localStorage.token) {
        this.$router.push('/')
      }
    }
  },
  created() {
    this.checkUserLogin()
  }
}
</script>

<style scoped>
.container {
  padding-left: 420px;
  margin: 100px 100px;
}

.forms-inputs {
  margin: 40px 0;
  position: relative
}

.forms-inputs span {
  position: absolute;
  top: -18px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px
}

.forms-inputs input {
  padding: 0 10px;
  height: 40px;
  border: 2px solid #888;
}

.forms-inputs input:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid #2874f0
}

.btn {
  font-size: 18px;
  font-weight: 900;
  height: 50px;
  width: 210px;
  background-color: #2874f0;
  color: #ffe11b;
}

.success-data {
  display: flex;
  flex-direction: column
}

.bxs-badge-check {
  font-size: 90px
}
</style>
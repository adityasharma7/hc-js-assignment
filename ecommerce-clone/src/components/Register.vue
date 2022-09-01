<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card px-5 py-5" id="form1">
          <div class="form-data">
            <form @submit.prevent="registerUser()">
              <div class="forms-inputs mb-4">
                <span>
                  {{  $t('name')  }}
                </span>
                <input v-model="name" type="text">
                <div class="errors">
                  {{  errors.name  }}
                </div>
              </div>
              <div class="forms-inputs mb-4">
                <span>
                  {{  $t('email')  }}
                </span>
                <input v-model="email" type="text">
                <div class="errors">
                  {{  errors.email  }}
                </div>
              </div>
              <div class="forms-inputs mb-4">
                <span>
                  {{  $t('password')  }}

                </span>
                <input v-model="password" type="password">
                <div class="errors">
                  {{  errors.password  }}
                </div>
              </div>
              <div class="forms-inputs mb-4">
                <span>
                  {{  $t('password2')  }}
                </span>
                <input v-model="password2" type="password">
                <div class="errors">
                  {{  errors.password2  }}
                </div>
              </div>
              <div class="mb-3">
                <button class="btn">
                  {{ $t('register') }}

                </button>
              </div>
            </form>
            <br>
            <RouterLink to="/login">
              {{ $t('alreadyAccount') }}

            </RouterLink>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validateRegistration from '../validation/validateRegistration'
export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      password2: "",
      errors: {},
      users: [],
    }
  },
  methods: {
    registerUser() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
        password2: this.password2,
      }

      const { isInvalid, errors } = validateRegistration(user)

      if (isInvalid) {
        this.errors = errors
      } else {
        this.errors = {}

        this.$router.push('/login')

        this.name = ""
        this.email = ""
        this.password = ""
        this.password2 = ""
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding-left: 420px;
  margin: 30px 100px;
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

.errors {
  color: red;
  font-size: 12px;
}

.success-data {
  display: flex;
  flex-direction: column
}

.bxs-badge-check {
  font-size: 90px
}
</style>
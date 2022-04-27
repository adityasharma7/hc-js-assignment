<template>
  <div class="container">
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-8 col-xl-6">
            <div class="row">
              <div class="col text-center">
                <h1>Register</h1>
                <p class="text-h3">Please fill you further information</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col mt-4">
                <label for="email">First Name:</label>
                <input type="text" class="form-control" placeholder="Name" />
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col mt-4">
                <label for="email">last Name:</label>
                <input type="text" class="form-control" placeholder="Surname" />
              </div>
            </div>

            <div class="row align-items-center mt-4">
              <div class="col">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="row align-items-center mt-4">
              <div class="col">
                <label for="pwd">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="col">
                <label for="pwd1">Confirm Password:</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div class="row justify-content-start mt-4">
              <div class="col">
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" />
                    I Read and Accept <a href="#">Terms and Conditions</a>
                  </label>
                </div>

                <button class="btn btn-primary mt-4">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style>
</style>
<template>
  <div class="container">
    <form action="/action_page.php">
      <div class="form-group">
        <label for="text">User Name:</label>
        <input type="text" id="tname" class="form-control" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          id="pwd"
        />
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" /> Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>
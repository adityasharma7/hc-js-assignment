<template>
  <div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #f0f3f6;
  color: #212121;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.green {
  color: #5cb85c;
}
.grey {
  color: rgb(153, 152, 152);
}

a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
}

input {
  padding: 8px;
  width: 30rem;
}

button {
  padding: 8px 30px;
  border: none;
  cursor: pointer;
  font-weight: 800;
  font-size: 13px;
}

.container {
  margin: 0 auto;
}

.primary-btn {
  background-color: #0275d8;
  color: #ffffff;
}

.white-btn {
  background-color: #ffffff;
  color: #0275d8;
}

.relative {
  position: relative;
}

ul {
  list-style-type: none;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

/* Margins along y axis */
.my-1 {
  margin: 1rem auto;
}
.my-2 {
  margin: 1rem auto;
}
.my-3 {
  margin: 1rem auto;
}
.my-4 {
  margin: 1rem auto;
}
.my-5 {
  margin: 1rem auto;
}

/* Margins */
.m-1 {
  margin: 1rem;
}
.m-2 {
  margin: 1rem;
}
.m-3 {
  margin: 1rem;
}
.m-4 {
  margin: 1rem;
}
.m-5 {
  margin: 1rem;
}

/* Padding along y axis */
.py-1 {
  padding: 1rem auto;
}
.py-2 {
  padding: 1rem auto;
}
.py-3 {
  padding: 1rem auto;
}
.py-4 {
  padding: 1rem auto;
}
.py-5 {
  padding: 1rem auto;
}

/* Padding */
.p-1 {
  padding: 1rem;
}
.p-2 {
  padding: 1rem;
}
.p-3 {
  padding: 1rem;
}
.p-4 {
  padding: 1rem;
}
.p-5 {
  padding: 1rem;
}
</style>

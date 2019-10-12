<template>
  <div id="app">
    <img src="./assets/siren.png" alt="SafetySiren Logo">
    <router-view/>
  </div>
</template>

<style>
body, html{
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}

body{
  background-color: #66B2FF;
}
#app {
  margin-top: 20px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

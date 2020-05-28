<template>
  <div id="app">
    <nav id="nav">
      <h1>Welcome to the Book Showroom</h1> |
      <router-link to="/">ShowRoom</router-link> |
      <router-link to="/authors">Authors</router-link> |
      <router-link to="/about">About</router-link> |
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  background-image: url("./assets/background.jpg");
  font-family: 'Balsamiq Sans', cursive;
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

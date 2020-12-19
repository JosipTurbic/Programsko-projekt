<template>

  <div id="app">
    <nav  id="nav" class="navbar navbar-light bg-light">
     <!-- Image and text -->
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo.png" alt="" width="50"  class="d-inline-block align-top">
      BodyFit
    </a>
  </div>
      <router-link to="/">Početna</router-link> |
      <router-link to="/Login">Prijava</router-link> |
      <router-link to="/Signup">Registriraj se</router-link> | 
      <router-link to="/BMI">BMI</router-link> |
      <router-link to="/Vjezbe">Vježbe</router-link> |
      <router-link to="/Program">Moj program</router-link>
      
   
      
    </nav>
    <router-view/>
     
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
  text-align: left;
  background-color:#00BFFF !important; 
  

  a {
    font-weight: bold;
    color: #FFFFFF;

    &.router-link-exact-active {
      color: #FFFF00;
    }
  }
  ul {
    list-style-type: none;
}
}


</style>


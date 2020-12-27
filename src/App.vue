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
      <router-link to="/BMI">BMI</router-link> |
      <router-link to="/Vjezbe">Vježbe</router-link> |
      <router-link to="/Program">Moj program</router-link> |
      <router-link to="/Login" v-if="!store.currentUser">Prijava</router-link> |
      <router-link to="/Signup" v-if="!store.currentUser">Registriraj se</router-link> | 
      <a href="#" @click.prevent="logout()" v-if="store.currentUser">Odjavi se</a>
      
   
      
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
<script>
import store from '@/store';
import{firebase} from '@/firebase';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log('***',user.email);
    store.currentUser = user.email;
  }else{
    //User is not signed in.
    console.log('No user');
    store.currentUser = null;
    
    if(router.name !== 'Login'){
      router.push({name: 'Login'})
    }
   
  }
});

export default {
  name:'app',
  data(){
    return{
      store,
    };
  },
  methods: {
    logout(){
      firebase
      .auth()
      .signOut()
      .then(() =>{
        this.$router.push({name: 'Login'});
      });
    },
  },
  
}
</script>


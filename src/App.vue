<template>
  <div id="app">
        <nav id="nav" class="navbar navbar-expand-md navbar-light">
            <router-link to="/" class="navbar-brand">
                <img src="@/assets/icon.png" height="50" class="d-inline-block align-top" alt="" loading="lazy" />
            </router-link>
            
     <li class="nav-item"> <router-link to="/" class="nav-link">Početna</router-link> </li>
     <li class="nav-item"> <router-link to="/BMI" class="nav-link">BMI</router-link> </li>
     <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Vježbe
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="nav">
          <a class="dropdown-item"><router-link to="/Leda" class="nav-link">Leđa</router-link></a>
          <a class="dropdown-item"><router-link to="/Prsa" class="nav-link">Prsa</router-link></a>
          <a class="dropdown-item"><router-link to="/Biceps" class="nav-link">Biceps</router-link></a>
          <a class="dropdown-item"><router-link to="/Triceps" class="nav-link">Triceps</router-link></a>
          <a class="dropdown-item"><router-link to="/Noge" class="nav-link">Noge</router-link></a>
        </div>
      </li>
     <li class="nav-item"> <router-link to="/Program" class="nav-link">Moj program</router-link> </li>
     
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggler"
                aria-controls="navbarToggler"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
              
                <!-- Image and text -->
                <ul class="navbar-nav ml-auto">
                    <li v-if="!store.currentUser" class="nav-item">
                        <router-link to="/Login" class="nav-link">Login</router-link>
                    </li>
                    <li v-if="!store.currentUser" class="nav-item">
                        <router-link to="/Signup" class="nav-link">Sign up</router-link>
                    </li>
                </ul>
                
                    
                <li v-if="store.currentUser" class="nav-item">
                        <a href="#" @click.prevent="logout()" >Odjavi se</a>
                    </li>
                    
            </div>
        </nav>

        
            <router-view />
            
      
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
 
  background-color:#00BFFF !important; 
  

  a {
    font-weight: bold;
    color: #FFFFFF;
    background-color: #00BFFF;

    &.router-link-exact-active {
      color: #FFFF00;
    }
  }
  li {
    list-style-type: none;
}


}

</style>
<script>
import store from '@/store';
import{firebase} from '@/firebase';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {

  const currentRoute = router.currentRoute;

  if (user) {
    // User is signed in.
    console.log('***',user.email);
    store.currentUser = user.email;

    if(!currentRoute.meta.needsUser){
      router.push({name: 'Home'})
    }

  }else{
    //User is not signed in.
    console.log('No user');
    store.currentUser = null;
    
    if(currentRoute.meta.needsUser){
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


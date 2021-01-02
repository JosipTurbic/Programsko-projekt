<template>
  <div id="app">
        <nav id="nav" class="navbar navbar-expand-md navbar-light">
            <router-link to="/" class="navbar-brand">
                <img src="@/assets/icon.png" height="50" class="d-inline-block align-top" alt="" loading="lazy" />
            </router-link>
            
     <li class="nav-item"> <router-link to="/" class="nav-link">Početna</router-link> </li>
     <li class="nav-item"> <router-link to="/BMI" class="nav-link">BMI</router-link> </li>


<div class="dropdown">
 <button class="dropbtn">Vježbe
  <i class="fa fa-caret-down"></i>
 </button>
    <div class="dropdown-content">
      <li class="nav-item"> <router-link to="/Sklekovi" class="nav-link">Sklekovi</router-link> </li>
     <li class="nav-item"> <router-link to="/Trbusnjaci" class="nav-link"> Trbušnjaci</router-link> </li>
      <li class="nav-item"> <router-link to="/Zgibovi" class="nav-link"> Zgibovi</router-link> </li>
    </div>
  </div>

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

    &.router-link-exact-active {
      color: #FFFF00;
    }
  }
  li {
    list-style-type: none;
}
.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; 
  margin: 0; 
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: green;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: blue;
}

.dropdown:hover .dropdown-content {
  display: block;
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


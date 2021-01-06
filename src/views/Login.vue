<template>
<div class="about">
  <h1>Prijavi se!</h1>
<div class="container">
  <div class="row">
    <div class="col-sm">
      </div>
      <div class="col-sm">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email adresa</label>
            <input 
            type="email"
            v-model="username" 
            class="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Unesi email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'llnever share your email with anyone else.
              </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Lozinka</label>
                <input
                v-model="password"
                type="password" 
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Lozinka"
                />
                </div>
                <button type="button" @click="login()" class="btn btn-primary">Prijava</button>
                </form>
                </div>
                <div class="col-sm">
                  </div>
                  </div>
                  </div>
                  </div>
                  </template>

<script>

import {firebase} from '@/firebase';

export default {
  name: "login",
  data(){
    return{
      username:"",
      password:""
    }
  },

  methods:{
    login(){
      console.log("login....");
      

      firebase
      .auth()
      .signInWithEmailAndPassword(this.username, this.password)
      .then((result) =>{
        console.log("Uspjesna prijava",result);

      })
      .catch(function(e){
        console.error('greška',e);
      });
    }
  }
}
</script>

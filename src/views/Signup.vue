<template>
<div class="about">
  <h1>Registriraj se!</h1>
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
            placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              Shh.. Nikome nećemo reći tvoju lozinku.
              </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Lozinka</label>
                <input
                type="password" 
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Lozinka"
                />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword2">Ponovljena lozinka</label>
                <input 
            type="password" 
            v-model="passwordRepeat"
            class="form-control" 
            id="exampleInputPassword2" 
            aria-describedby="eHelp" 
            placeholder="Ponovite lozinku"
            />
            </div>

                <button type="button" @click="signup" class="btn btn-primary">Pošalji</button>
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
  name: "Signup",
  data(){
    return{
      username: '',
      password: '',
      passwordRepeat: '',
    };
  },
  methods: {
      signup(){
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(
          function()
            {
              console.log("Uspješna registracija");
            })
            .catch(function(error){
              console.error("Došlo je do greške!", error)
            });
            console.log('Nastavak');
      },
  },
};
</script>
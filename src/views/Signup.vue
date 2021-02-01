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
                <label for="KorisnickoIme">Vaše Ime</label>
                <input
                type="text" 
                v-model="name"
                class="form-control"
                id="KorisnickoIme"
                placeholder="Unesite svoje ime"
                />
                </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email adresa</label>
            <input 
            type="email" 
            v-model="email"
            class="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Unesi email"
            />
           
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
                <small id="emailHelp1" class="form-text text-muted">
              Lozinka mora sadržavati najmanje 8 znakova!
              </small>
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


                <button type="button"  @click="signup" class="btn btn-primary">Pošalji</button>
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
  import {db} from '@/firebase';
  

export default {
  name: "Signup",
  data(){
    return{
      email: '',
      password: '',
      passwordRepeat: '',
      name:'',
     
    };
    },
     
  
  methods: {
  

      signup(){
      if (this.password != this.passwordRepeat) {
        alert (" Lozinke se ne podudaraju. Pokušajte ponovo.")
      }
      else if(this.name.length<1){
          alert("Morate upisati ime")
        }

      
      else{
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
                let id = this.email;
                db.collection("users").doc(id).set({
                    email: this.email,
                    name: this.name
                })
            })
         
      }
      },
  },
};
</script>
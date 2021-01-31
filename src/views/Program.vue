<template>
  <div>
    <div class="container-fluid">
      <div class="rows">
        <div class="col align-left text">
          <h3>Moje vježbe</h3>
        </div>
      </div>
      <div class="rows">
        <div class="col align-left text">
          <h3>Leđa</h3>
        </div>

        <div class="col align-left text" v-for="exe in currentUserExercises.Leda" :key="exe">
          <img :src="exe" alt="" />
          <span @click="removeExe('Leda', exe)">&times;</span>
        </div>

        <div class="col align-left text">
          <h3>
            <router-link to="/Leda">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5846 17.0833H17.0846V29.5833H12.918V17.0833H0.417969V12.9167H12.918V0.416656H17.0846V12.9167H29.5846V17.0833Z"
                  fill="black"
                />
              </svg>
            </router-link>
          </h3>
        </div>
      </div>
      <div class="rows">
        <div class="col align-left text">
          <h3>Prsa</h3>
        </div>
        <div class="col align-left text" v-for="exe in currentUserExercises.Prsa" :key="exe">
          <img :src="exe" alt="" />
          <span @click="removeExe('Prsa', exe)">&times;</span>
        </div>
        <div class="col align-left text">
          <h3>
          <router-link to="/Prsa">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5846 17.0833H17.0846V29.5833H12.918V17.0833H0.417969V12.9167H12.918V0.416656H17.0846V12.9167H29.5846V17.0833Z"
                fill="black"
              />
            </svg>
          </router-link>
          </h3>
        </div>
      </div>
      <div class="rows">
        <div class="col align-left text">
          <h3>Triceps</h3>
        </div>
        <div class="col align-left text" v-for="exe in currentUserExercises.Triceps" :key="exe">
          <img :src="exe" alt="" />
          <span @click="removeExe('Triceps', exe)">&times;</span>
        </div>
        <div class="col align-left text">
          <h3>
          <router-link to="/Triceps">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5846 17.0833H17.0846V29.5833H12.918V17.0833H0.417969V12.9167H12.918V0.416656H17.0846V12.9167H29.5846V17.0833Z"
                fill="black"
              />
            </svg>
          </router-link>
          </h3>
        </div>
      </div>
      <div class="rows">
        <div class="col align-left text">
          <h3>Biceps</h3>
        </div>
        <div class="col align-left text" v-for="exe in currentUserExercises.Biceps" :key="exe">
         
          <img :src="exe" alt="" />
           <span @click="removeExe('Biceps', exe)">&times;</span>
        </div>
        <div class="col align-left text">
          <h3>
          <router-link to="/Biceps">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5846 17.0833H17.0846V29.5833H12.918V17.0833H0.417969V12.9167H12.918V0.416656H17.0846V12.9167H29.5846V17.0833Z"
                fill="black"
              />
            </svg>
          </router-link>
          </h3>
        </div>
      </div>

      <div class="rows">
        <div class="col align-left text">
          <h3>Noge</h3>
        </div>
        <div class="col align-left text" v-for="exe in currentUserExercises.Noge" :key="exe">
          <img :src="exe" alt="" />
          <span @click="removeExe('Noge', exe)">&times;</span>
        </div>
        <div class="col align-left text">
          <h3>
          <router-link to="/Noge">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5846 17.0833H17.0846V29.5833H12.918V17.0833H0.417969V12.9167H12.918V0.416656H17.0846V12.9167H29.5846V17.0833Z"
                fill="black"
              />
            </svg>
          </router-link>
          </h3>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
 import store from '@/store';
import {db} from '@/firebase';
  
export default {
  name: "app",
  props: ["info"],
  async mounted() {

    this.userRef = await db.collection("exercises").doc(store.currentUser);
    const allexercises = await this.userRef.get();
    this.currentUserExercises = allexercises.data();
    console.log(this.currentUserExercises);



    // if (localStorage.Biceps) this.Biceps = JSON.parse(localStorage.Biceps);
    // if (localStorage.Leda) this.Leda = JSON.parse(localStorage.Leda);
    // if (localStorage.Prsa) this.Prsa = JSON.parse(localStorage.Prsa);

    // if (localStorage.Tricep) this.Tricep = JSON.parse(localStorage.Tricep);

    // if (localStorage.Noge) this.Noge = JSON.parse(localStorage.Noge);

  },
  data() {
    return {
      Leda: [],
      Prsa: [],
      Triceps: [],
      Biceps: [],
      Noge: [],
      currentUserExercises: {},
    };
  }, 
  methods: {
      removeExe (kategorija, vjezba){
        const index = this.currentUserExercises[kategorija].indexOf(vjezba);
          this.currentUserExercises[kategorija].splice(index, 1);
         this.userRef.set({[kategorija]:  this.currentUserExercises[kategorija]
         }, { merge: true });
      }
  }
};
</script>


<style lang="scss">
.text {
  font-weight: bold;
  color: #00bfff;
  width: 180px;
  border-right: 1px solid #000;

  margin: 0;
  display: inline-block;
  height: 105px;
  &:last-child {
    border: none
    }
  h3 {
    padding: 30px 20px;
  }
  img {
    height: 105px;
  }
}
.rows {
  text-align: left;
  border-width: 1px;
  border-bottom-style: solid;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
 &::-webkit-scrollbar {
  height: 4px;
}
 
&::-webkit-scrollbar-track {
  background-color: #eee;
}
 
&::-webkit-scrollbar-thumb {
  background-color: #111;
  
}
}

.col2 {
  float: left;
  position: relative;
}

.page-footer {
  bottom: 0;
  width: 100%;
}
</style>


<template>
  <div class="row">
    <div class="col">
      <div class="car text-center">
        <div class="card-header">Vježba 1 - Triceps potisak na lat mašini</div>

        <div class="card-body p-0">
          <img class="card-img-top" :src="imgs.tricap" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Stanite pred lat mašinu i primite palicu, u širini ramena, s
            dlanovima okrenutima prema dolje. Ruke moraju biti u laktovima pod
            90° i ne zaboravite držati ramena nazad, prsa van. Palicu potisnite
            prema dolje dok ne izravnate ruke i ne dozvolite da se laktovi
            previše odvoje od tijela. Palici dozvolite da se digne do visine
            laktova, ali cijelo vrijeme morate osjetiti napetost u tricepsima.
            Noge raširite u širinu ramena, koljena lagano skvrčite kako biste
            bili u stabilnom položaju. Napnite trbuh kako bi umirili trup i
            spriječili ljuljanje
          </p>

          <button id="btn" @click="addExe(imgs.tricap)">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">
          Vježba 2 - Potisak sa čela na ravnoj klupi
        </div>
        <div class="card-body p-0">
          <img class="card-img-top" :src="imgs.tricad" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Stavite štangu na rub klupice. Primite štangu s rukama u širini
            ramena i lezite na klupicu. Raširite noge radi stabilnosti.
            Podignite štangu iznad glave, ali pažljivo - nema ljuljanja! Lagano
            spuštajte u luku prema dolje natrag prema čelu, dok laktovi ne budu
            pod kutem 90°. Podlaktice se gibaju po određenoj putanji, a
            nadlaktice se ne miču! Također je važno da ne koristite prevelike
            težine i da ne spuštate prebrzo. Većina ljudi si dozvoli da im
            laktovi "odšeću" prema glavi i pomažu si leđnim mišićima da dignu
            štangu - tako ćete razviti leđne mišiće, a tricepsi će ostati isti.
          </p>

          <button id="btn" @click="addExe(imgs.tricad)">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 3 - Triceps ekstenzija sa bučicom</div>
        <div class="card-body p-0">
          <img class="card-img-top" :src="imgs.tricat" />

          <h3>Kako pravilno izvesti vježbu</h3>
          <p>
            Sjednite na klupu i primite bučicu u ruke. Tijelo mora biti u
            pravilnom položaju tijekom cijele vježbe, nema krivljenja - kičma je
            ravna, noge u stabilnom položaju, koljena lagano skvrčena. Uteg
            dignite sve dok ne ispružite ruke do kraja. Istegnite ruke iznad
            glave, zatim lagano ispuštajte do razine vrata. Samo ruke rade, a
            svi ostali dijelovi tijela se ne miču!
          </p>

          <button id="btn" @click="Exe(imgs.tricat)">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 4 - Bench potisak s uskim hvatom</div>
        <div class="card-body p-0">
          <img class="card-img-top" :src="imgs.tricac" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Potisak na benchu je odlična vježba za prsa i core. Ali promjena
            hvata može učiniti čuda za ruke. Primite šipku s dlanovima okrenutim
            prema dolje, a rukama u širini ramena i držite je iznad grudne kosti
            s potpuno ispruženim rukama. Spustite šipku, pauzirajte i potisnite
            je nazad u početnu poziciju.
          </p>

          <button id="btn" @click="addExe(imgs.tricac)">Dodaj u moj program</button>
        </div>
        <div class="car text-center">
          <div class="card-header">
            Vježba 5 - Potisak girjama u stojećem položaju
          </div>
          <div class="card-body p-0">
            <img class="card-img-top" :src="imgs.tricaz" />

            <h3>Kako pravilno izvesti vježbu</h3>

            <p>
              Primite girje u jednu ruku, a drugom rukom se uhvatite za spravu.
              Lagano savinite leđa i gornji dio ruke držite uspravno uz tijelo.
              Lakat savijajte do 90 stupnjeva i vucite dok ne ispravite ruku i
              ne dovedete je u potpuno ispravljen položaj. Nakon odrađene
              serije, promijenite ruku.
            </p>

            <button id="btn" @click="addExe(imgs.tricaz)">Dodaj u moj program</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
  import {db} from '@/firebase';

export default {
  data() {
    return {
      imgs: {
        tricap: require("@/assets/Tricap.gif"),
        tricad: require("@/assets/Tricad.gif"),
        tricat: require("@/assets/Tricat.gif"),
        tricac: require("@/assets/Tricac.gif"),
        tricaz: require("@/assets/Tricaz.gif"),
      },
    };
  },
   async mounted() {
   console.log(store);
    this.userRef = await db.collection("exercises").doc(store.currentUser);
    const allexercises = await this.userRef.get();
    if (allexercises.exists){
      this.currentUserExercises = allexercises.data()
    } else {
      this.currentUserExercises = {}
      }
    console.log(this.currentUserExercises);
   },
 methods: {
    addExe(img) {
      let keyName = "Triceps";
      if (!this.currentUserExercises[keyName]) { 
       this.currentUserExercises[keyName] = [];
      } 
      if(this.currentUserExercises[keyName].includes(img)){
          alert("Vježba je već dodana");
      }
      else {
          this.currentUserExercises[keyName].push(img);
          this.userRef.set({[keyName]:  this.currentUserExercises[keyName]
          }, { merge: true });
      }
      },
  },
};
</script>

<style>
.card-img-top {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 250px;
}
.card-body {
  background-color: yellow;

  font-weight: bold;
}
.card-header {
  background-color: #00bfff;
  border: solid #ffffff;
  font-weight: bold;
  color: #ffffff;
}
#btn {
  color: #ffffff;
  border-radius: 10px;
  background-color: #00bfff;
  font-weight: bold;
}
</style>
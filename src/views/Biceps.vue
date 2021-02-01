<template>
  <div class="row">
    <div class="col">
      <div class="car text-center">
        <div class="card-header">
                Vježba 1 - Pregib bučicama u pretklonu  </div>
          <div class="card-body p-0">

            <p>
              Nešto jednostavnija vježba no jako efikasna za jačanje bicepsa.
            </p>

            <img class="card-img-top" :src="imgs.bicab" />

            <h3>Kako pravilno izvesti vježbu</h3>

            <p>
              Sjedite na rub klupice, postavite lakat na unutarnju stranu
              noge-blizu koljena. Ruke su lagano pogrčene. Dignite uteg prema
              sebi s pregibom ruke u laktu, zadržite na sekundu i lagano
              ispuštajte u početni položaj. Jako je važno da nema nikakvog
              gibanja tijela već da samo biceps radi, jer ako nije tako, onda
              "trošite" ostale mišiće tijela, a ne onaj koji bi trebali.
            </p>

            <button @click="addExe(imgs.bicab)" id="btn">Dodaj u moj program</button>
          </div>
        </div>
      </div>

      <div class="car text-center">
        <div class="card-header">Vježba 2 - Pregib sa štanglom</div>
        <div class="card-body p-0">
          <p>
            Jedna od vrlo efikasnih vježbi za jačanje bicepsa koja zahtjeva
            dosta koncentracije
          </p>

          <img class="card-img-top" :src="imgs.bicaa" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Noge moraju biti stabilno na podu, u širini ramena. Stupite pred
            štangu, ramena nazad, prsa van, ruke su u visećem položaju kao da
            stojite "mirno".Dižite lagano štangu, ruke su priljepljene uz
            tijelo, odnosno laktovi se ne miču od tijela. Ne zaboravite držati
            ramena nazad i prsa van, zato da ramenski mišići ne bi pomagali pri
            podizanju štange.
          </p>

          <button @click="addExe(imgs.bicaa)" id="btn">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 3 - Pregib kabelom</div>
        <div class="card-body p-0">
          <p>
            Pravilnim drzanjem i radom ove vježbe vidjet ćete rezultate vrlo
            brzo
          </p>

          <img class="card-img-top" :src="imgs.bicat" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Stanite stabilno na pod kako nebi bilo ljuljanja tijekom izvođenja
            vježbe. Koljena su lagano skvrčena. Primite palicu s dlanovima
            okrenutima prema gore,uski hvat. Lagano potegnite palicu prema sebi
            i lagano ju ispuštajte.
          </p>

          <button @click="addExe(imgs.bicat)" id="btn">Dodaj u moj program</button>
        </div>
        <div class="car text-center">
          <div class="card-header">
            Vježba 4 - Pregib bučicama na kosoj klupi
          </div>
          <div class="card-body p-0">
            <p>
              Nešto jednostavnija vježba, no jako efikasna za jačanje bicepsa.
              Povećavanjem težite otežavate vježbu
            </p>

            <img class="card-img-top" :src="imgs.bicac" />

            <h3>Kako pravilno izvesti vježbu</h3>

            <p>
              Sjedite i cijelom tijelom se naslonite na klupicu. Držite ramena
              nazad, a prsa van. U početnom položaju ruke su vam u visećem
              položaju. S dlanovima okrenutima prema gore, dignite uteg prema
              ramenu. Neki ljudi si pomažu pa pomoću upognutog trupa dižu utege
              sa zaletom, što je, naravno nepravilno! Ruka sama po sebi treba
              slijediti putanju do ramena, nema nikakvog zaljetanja, već sve se
              radi polagano. Kao i kod ostalih vježbi, tijelo se ne miče - samo
              ruke rade !
            </p>

            <button @click="addExe(imgs.bicac)" id="btn">Dodaj u moj program</button>
          </div>
        </div>

        <div class="car text-center">
          <div class="card-header">Vježba 5 - Pregib s velikom šipkom</div>
          <div class="card-body p-0">
            <p>
              Nešto jednostavnija vježba no jako efikasna za jačanje bicepsa.
            </p>

            <img class="card-img-top" :src="imgs.bicap" />

            <h3>Kako pravilno izvesti vježbu</h3>

            <p>
              Stojeća pozicija s rukama spuštenim uz tijelo. Uzmite šipku u
              ruke, pridržavajući je hvatom u širini ramena. Kontrakcijom
              bicepsa dižemo šipku do razine ramenog zgloba. Kad šipku podižemo
              prema gore, izdahnemo. Trup tijela je fiksiran u stabilnom
              položaju. Držimo na vrhu pokreta sekundu šipku s maksimalnom
              kontrakcijom bicepsa i polako vraćamo ruke u početni položaj.
              Duboko udahnemo kada spuštamo šipku u donji ili niži položaj.
            </p>

            <button @click="addExe(imgs.bicap)" id="btn">Dodaj u moj program</button>
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
          bicab: require("@/assets/Bicab.gif"),
          bicaa: require("@/assets/Bicaa.gif"),
          bicat: require("@/assets/Bicat.gif"),
          bicac: require("@/assets/Bicac.gif"),
         bicap: require("@/assets/Bicap.gif"),
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
      let keyName = "Biceps";
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
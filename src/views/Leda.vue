<template>
  <div class="row">
    <div class="col">
      <div class="car text-center">
        <div class="card-header">Vježba 1 - Deadlift</div>
        <div class="card-body p-0">
          <p>
            Mrtvo dizanje ili deadlift je jedna od osnovnih i najboljih vežbi,
            ne samo za leđa već i za cijelo tijelo. Aktivira gotovo sve mišićne
            skupine. Radeći vježbu pravilno povećati ćete si i snagu i
            eksplozivnost. Radi se o vrlo zahtjevnoj vježbi koja predstavlja
            veliki stres ne samo na mišiće, nego i na cijeli centralni živčani
            sustav. Treba biti oprezan i imati pravilnu tehniku izvođenja
            vježbe.
          </p>

          <img class="card-img-top" :src="imgs.deadlift" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Stopala trebaju biti razmaknuta otprilike u širini ramena i okrenuta
            prema van. Kada primite šipku potrebno je držati leđa što
            uspravnije. Pogled treba biti usmjeren ravno naprijed tijekom
            čitavog izvođenja. Iz toga položaja se počnite dizati prema gore
            ravnajući noge i podizajući kukove dok se tijelo upotpunosti ne
            ispravi. Kako se ispravite, šipku treba biti naslonjena na bedra.
          </p>

          <button @click="addExe(imgs.deadlift)" id="btn">Dodaj u moj program</button>
        </div>
      </div>

      <div class="car text-center">
        <div class="card-header">Vježba 2 - Zgib</div>
        <div class="card-body p-0">
          <p>
            Zgibovi su savršena vježba za građenje mišića gornjeg dijela tijela.
            Kao što su čučnjevi jako efikasni za donji dio tijela, tako su
            zgibovi za gornji dio tijela. Vježba služi za izgradnju leđnih
            mišića, povećavanje mišićne snage i razvoj snage.
          </p>

          <img class="card-img-top" :src="imgs.zgib" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Nakon što ste se uhvatili za vratilo, nathvatom , potpuno ispružite
            laktove tako da Vam tijelo slobovno visi. Blago savijte koljena.
            Dižite se rukama gore sve dok ne dotirnete vratilo sa prsima. Kada
            dodirnete vratilo isprsite se što je više moguće. Lagano se
            spuštajte sa potpunom kontrolom u leđima.
          </p>

          <button @click="addExe(imgs.zgib)" id="btn">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 3 - Veslanje u pretklonu sa šipkom</div>
        <div class="card-body p-0">
          <p>
            Veslanje u pretklonu sa šipkom također je na listi vježbi kojima
            ćete najbrže doći do željene forme i definiranih leđa. Mišići koji
            će se najviše aktivirati pri ovom pokretu su latissimus, trapezius,
            erector spinae, biceps i mišići podlaktice.
          </p>

          <img class="card-img-top" :src="imgs.pretklon" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Vježbu počinjete stojećki ali tako da su vam koljena blago savinuta.
            Napravite pretklon trupom, učvrstite leđa, a šipka neka visi u
            ispruženim rukama. Držeći leđa učvršćena, povucite šipku prema gore,
            sve dok vam ne dotakne trup. Prilikom dizanja utega nemojte nikako
            trzati donjim dijelom leđa. Uteg dižite pod potpunom kontrolom
            leđnih mišića. Istim putem vratite šipku u početni položaj.
          </p>

          <button  @click="addExe(imgs.pretklon)" id="btn">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 4 - Slijeganje ramenima sa šipkom</div>
        <div class="card-body p-0">
          <p>
            Slijeganje ramenima na vrhu je popisa vježbi kojima ćete izgraditi
            gornji dio leđa odnosno trapezius.
          </p>
          <img class="card-img-top" :src="imgs.slijeganje" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Zauzmite stojeći položaj sa stopalima u širini ramena. Uzmite šipku
            u ruke i ispružite nadlaktice. Održavajući nadlaktice fiksiranima,
            sliježite ramenima što više možete. Polako spuštajte bučice u
            početni položaj
          </p>

          <button  @click="addExe(imgs.slijeganje)" id="btn">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 5 - Hiperekstenzija</div>
        <div class="card-body p-0">
          <p>
            Hiperekstenzija je jako dobro poznata vježba za donji dio leđa.
            Aktivira najviše leđne mišiće.
          </p>

          <img class="card-img-top" :src="imgs.hiper" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Legnite na klupu potrbuške, ali tako da stopala zakvačite ispod
            držača za noge. Kukovi se nalaze na kraju klupe. Izravnajte leđa,
            tako da budu paralelna s podom, a ruke stavite na prsa. Lagano
            spuštajte trup prema dolje, savijajući leđa u polukružnom pokretu,
            sve dok vam trup ne dođe u položaj skoro okomitim na pod. Pod
            potpunom kontrolom donjeg dijela leđa vratite se u početni položaj.
            Pazite da trup ne dižete ili ne spuštate prenaglo. Sve kretnje
            moraju biti kontrolirane i bez trzaja.
          </p>

          <button  @click="addExe(imgs.hiper)" id="btn">Dodaj u moj program</button>
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
        deadlift: require("@/assets/Deadlift.gif"),
        zgib: require("@/assets/Zgib.gif"),
        pretklon: require("@/assets/Pretklon.gif"),
        slijeganje: require("@/assets/Slijeganje.gif"),
        hiper: require("@/assets/Hiper.gif"),
      },
    };
  },
  async mounted() {
   console.log(store);
    this.userRef = await db.collection("exercises").doc(store.currentUser);
    const allexercises = await this.userRef.get();
    this.currentUserExercises = allexercises.data();
    console.log(this.currentUserExercises);
  },
  methods: {
    addExe(img) {
      let keyName = "Leda";
      if (this.currentUserExercises[keyName].includes(img)){
        alert("Vježba je već dodana");
      } else {
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
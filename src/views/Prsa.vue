<template>
  <div class="row">
    <div class="col">
      <div class="car text-center">
        <div class="card-header">Vježba 1 - Široki sklek</div>
        <div class="card-body p-0">
          <p>
            Mnogi treneri sklekove smatraju temeljnom vježbom za izgradnju
            savršenog tijela. Primarno angažiraju prsne mišiće i tricepse, a
            zatim prednji dio ramenih mišića i međurebrene. No prilikom
            izvođenja skleka angažirana je i većina mišića trupa kao
            stabilizatori kako bi omogućili pravilnu tehniku izvođenja, što
            znači da sklekom zapravo jačamo i trbušne i leđne mišiće.
          </p>

          <img class="card-img-top" :src="imgs.sklek" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Okrenite se licem prema podlozi. Oslonite se na nožne prste i
            dlanove, a tijelo držite u ravnoj liniji. U osnovnoj verziji dlanove
            postavite u širini ramena. Savijajući podlaktice spustite se prsima
            što više podu i istim putem vratite se natrag. Ako imate dovoljno
            snage i želite još više jačati mišiće prsa, raširite dlanove što
            više i u tom položaju izvodite vježbu.
          </p>

          <button @click="addExe(imgs.sklek)" id="btn">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 2 - Bench press</div>
        <div class="card-body p-0">
          <p>
            Bench press na vodoravnoj klupi jedna je od osnovnih i
            najučinkovitijih vježbi za oblikovanje prsa koja u manjoj mjeri
            aktivira i triceps i deltoidni mišići tj. mišiće ramenog pojasa.
          </p>
          <p>
            Iako je vježba jednostavna za izvođenje, jako je važno da prije nego
            krenete dizati neke ozbiljnije težine naučite pravilnu tehniku kako
            ipak ne bi došlo do ozljede.
          </p>

          <img class="card-img-top" :src="imgs.press" />
          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Leđima legnite na ravnu klupu, stopala su stabilna i čvrsto
            smještena na podu. Šipku primite u širini ramena tako da vam čelo
            dođe točno ispod nje. Polako i kontrolirano spuštajte šipku dok ne
            dotakne prsa, a potom ju na isti način potisnite prema gore dok ruke
            ne budu potpuno ispružene. Tijekom cijelog izvođenja vježbe torzo,
            ramena i stražnjica moraju biti oslonjeni o bench klupicu. Ukoliko
            vam je donji dio leđa savijen u obliku luka tijekom izvođenja vježbe
            fokus se sa srednjih prsiju prebacuje na donji dio prsiju. Širina
            hvata može varirati. Ukoliko se šipka primi u širini ramena (ili
            nešto više od širine ramena) vježbom će biti pogođeno cijelo
            područje srednjih prsnih mišića dok uži hvat na šipki prebacuje
            napor na unutarnji središnji dio prsiju uz veći doprinos tricepsa.
            Ukoliko se šipka primi hvatom koji je znatnije veći od hvata u
            širini ramena dolazi do većeg opterećenja na vanjski dio srednjih
            prsiju, a doprinos tricepsa u izvođenju vježbe se smanjuje, ali se i
            znatno povećava rizik od ozljede.
          </p>

          <button  @click="addExe(imgs.press)" id="btn">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 3 - Dipsevi</div>
        <div class="card-body p-0">
          <p>
            Još jedan sjajan izgrađivač prsa je duboko uranjanje (po mogućnosti
            s opterećenjem) poznatije kao dips. Osim prsa aktiviraju i mišiće
            ramena te tricepse, a također omogućuju da lako prebacite težinu s
            jedne strane na drugu što će vam pomoći da izjednačite prsa ako su
            asimetrična. Možete je izvoditi samo s vlastitom težinom ili uz
            dodatno opterećenje, ovisnom o nivou vaše snage.
          </p>

          <img class="card-img-top" :src="imgs.dipsevi" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Podignite se na klupe sa zaključanim laktovima i ispruženim rukama.
            Nagnite se prema naprijed i savijte koljena. Držite laktove
            usmjerene prema van za vrijeme spuštanja dok vam podlaktice ne budu
            paralelne s podom. Nakon toga slijedi potisak prema gore dok ruke
            opet ne budu potpuno ispružene. Pazite da cijelo vrijeme izvođenja
            vježbe budete nagnuti prema naprijed jer će vam u suprotnom većina
            opterećenja prijeći na tricepse.
          </p>

          <button  @click="addExe(imgs.dipsevi)" id="btn">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 4 - Razvlačenje bučicama</div>
        <div class="card-body p-0">
          <p>
            Važna vježba koja dobro isteže vaša prsa i daje im široki izgled je
            Razvlačenje bućicama. Pošto je to izolacijska vježba, najbolje je da
            je radite na kraju vaše rutine za prsa, kako vam nebi oduzela
            previše snage za potiske koje trebate obaviti.
          </p>

          <img class="card-img-top" :src="imgs.bucicama" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Legnite na ravnu klupu, stopala su čvrsto na podu, i u svaku ruku
            uzmite bućicu i podignite ih prema gore dlanovima okrenutim prema
            unutra. Koristeći polukružni pokret spuštate bućice lagano prema
            dolje sa svake strane grudi. Laktovi neka budu savijeni tijekom
            čitavog izvođenja vježbe. Vježbu uvijek izvodite s težinama koje vam
            dozvoljavaju pravilno izvođenje kako ne bi došlo do ozljede ramena.
          </p>

          <button  @click="addExe(imgs.bucicama)" id="btn">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">
          Vježba 5 - Potisak na kosoj klupi s bučicama
        </div>
        <div class="card-body p-0">
          <p>
            Bench-press na kosoj klupi s bučicama također je na popisu onih
            kojima ćete u rekordnom roku doći do snažnih i mišićavih prsa.
            Vježba posebno stimulira rad srednjeg i donjeg dijela prsnih mišića,
            a prilikom izvođenja osim prsnih mišića uključeni su i deltoides i
            triceps. Kao i bench press vježba je jednostavna za izvođenje te je
            kao takva primjerena za početnike jednako kao i za naprednije
            vježbače.
          </p>

          <img class="card-img-top" :src="imgs.kosoj" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Sjednite na klupu, bučice položite na noge iznad koljena i legnite
            na klupu te istovremeno bučice položite na prsa. Važno je da nikad
            ne lijegate na klupu dok bučice držite u rukama podignute od tijela.
            Stopala su čvrsto postavljena na držaču kako ne bi gubili ravnotežu
            dok izvodite vježbu. Nakon što ste legli napravite trzaj rukama te
            bučice izbacite u početni položaj. Prvo ponavljanje izvodite dok su
            vam ruke ispružene a ne dok su spuštene u predjelu prsa. U istom
            ritmu nastavite dok ne odradite željeni broj ponavljanja.
          </p>

          <button  @click="addExe(imgs.kosoj)"  id="btn">Dodaj u moj program</button>
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
        sklek: require("@/assets/Sklek.gif"),
        press: require("@/assets/Bench.gif"),
        dipsevi: require("@/assets/Dips.gif"),
        bucicama: require("@/assets/Bucpres.gif"),
        kosoj: require("@/assets/Prsazad.gif"),
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
      let keyName = "Prsa";
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
<template>
  <div class="row">
    <div class="col">
      <div class="car text-center">
        <div class="card-header">Vježba 1 - Nožna ekstenzija</div>
        <div class="card-body p-0">
          <p>
            Nešto jednostavnija i lakša vježba , ali ne i manje važna za
            izgradnju lijepih i čvrstih nogu.
          </p>

          <img class="card-img-top" :src="imgs.nogep" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Postavite spravu tako da su vam leđa potpuno poduprta, a noge
            komforno oslonjene na sjedalo; rolice bi trebale dodirivati sam vrh
            vaših gležnjeva. Primite se za drške sa strane.Podižite noge sve dok
            se koljena ne isprave, a pri tom pazite da vam se kukovi ne podignu
            sa sjedišta. Podignite uteg do kraja, ispravite noge i kratko ga
            zadržite, a potom ga lagano spustite u početni položaj. Važno je da
            pokret bude dug i da osjetite kontrakciju mišića svo vrijeme tokom
            dizanja i spuštanja.
          </p>

          <button id="btn" @click="addExe(imgs.nogep)">
            Dodaj u moj program
          </button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 2 - Nožni potisak</div>
        <div class="card-body p-0">
          <p>
            Alternativna vježba za čučnjeve u slučaju da imate problema sa
            donjim dijelom leđa. Oni koju mogu raditi čučnjeve, bi ih trebali i
            izvoditi, a nožni potisak koristiti kao zamjensku vježbu za
            promjenu.
          </p>

          <img class="card-img-top" :src="imgs.noged" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Sjedite na spravu za pritisak za noge i postavite stopala na
            poprečnu šipku/ploču, razmaknuta u širini ramena, sa prstima blago
            okrenutim u stranu. Uhvatite se za ručke pored sjedišta. Savijajte
            koljena i spuštajte uteg što je moguće niže, a da pri tome ne
            promijenite položaj kukova. Ne spuštajte uteg toliko da kukovi počnu
            klizati sa sjedišta. Zastanite nakratko, a onda lagano podignite
            uteg petama, a ne nožnim prstima. Ne ispravljajte koljena do kraja,
            već podignite uteg toliko da ona ostanu blago savijena. Onda ponovo
            lagano spuštajte uteg.
          </p>

          <button id="btn" @click="addExe(imgs.noged)">
            Dodaj u moj program
          </button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 3 - Jednonožni bugarski čučanj</div>
        <div class="card-body p-0">
          <p>
            Angažira čitavu donju polovicu tijela s posebnim naglaskom na
            kvadriceps. Kod ove vježbe manja je opasnost od ozljeda nego kod
            klasičnog čučnja.
          </p>

          <img class="card-img-top" :src="imgs.noget" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Stanite na jednu nogu, a drugu zabacite unazad i postavite na 30-50
            centimetara visoku klupu ili sanduk. Spustite se u čučanj toliko da
            stražnjom nogom dođete tik do podloge. Početnici mogu raditi vježbu
            bez dodatnih opterećenja, dok se naprednijim vježbačima preporuča
            izvođenje ove vježbe s utezima ili bučicama.
          </p>

          <button id="btn" @click="addExe(imgs.noget)">
            Dodaj u moj program
          </button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 4 - Jednonožni čučanj</div>
        <div class="card-body p-0">
          <p>
            Izuzetno je zahtjevna vježba u kojoj uz zavidan nivo snage morate
            imati i odličnu ravnotežu.
          </p>

          <img class="card-img-top" :src="imgs.nogec" />

          <h3>Kako pravilno izvesti vježbu</h3>
          <p>
            Uspravan stav, noge su u širini kukova, jednu nogu lagano podignemo
            od poda, ruke su uz tijelo. Iz početne pozicije spuštamo se u čučanj
            tako da je lijeva noga lagano ispružena iza tijela i vraćamo se u
            početni položaj. Početnici si mogu rukama pomoći održati ravnotežu,
            dok napredniji vježbači mogu izvoditi ovu vježbu s nekim rekvizitom.
          </p>

          <button id="btn" @click="addExe(imgs.nogec)">
            Dodaj u moj program
          </button>
        </div>
        <div class="car text-center">
          <div class="card-header">Vježba 5 - Bočni čučanj</div>
          <div class="card-body p-0">
            <p>
              Alternativna vježba za čučnjeve u slučaju da imate problema sa
              donjim dijelom leđa. Oni koju mogu raditi čučnjeve, bi ih trebali
              i izvoditi, a nožni potisak koristiti kao zamjensku vježbu za
              promjenu.

              <img class="card-img-top" :src="imgs.nogez" />
            </p>

            <h3>Kako pravilno izvesti vježbu</h3>

            <p>
              Raširi noge više od širine svojih kukova. Prebaci svoju težinu na
              desnu nogu, bokove gurni unazad i savij desno koljeno dok ti
              lijeva noga mora ostati ravna. Pokušaj napraviti tako da ti desno
              bedro bude paralelno s podom kada si u položaju čučnja. Za vrijeme
              izvođenja vježbe ruke možeš ispružiti naprijed za bolju ravnotežu
              ili ih možeš držati stisnute uz prsa. Zatim se vrati u početni
              položaj, stisni mišiće nogu, a kukove gurni lagano prema naprijed.
            </p>

            <button id="btn" @click="addExe(imgs.nogez)">
              Dodaj u moj program
            </button>
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
        nogep: require("@/assets/Nogep.gif"),
        noged: require("@/assets/Noged.gif"),
        noget: require("@/assets/Noget.gif"),
        nogec: require("@/assets/Nogec.gif"),
        nogez: require("@/assets/Nogez.gif"),
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
      let keyName = "Noge";
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


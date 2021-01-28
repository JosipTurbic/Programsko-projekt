<template>
  <div class="row">
    <div class="col">
      <div class="car text-center">
        <div class="card-header">
                Vježba 1 - Pregib bučicama u pretklonu  
          <div class="card-body p-0">

            <p>
              Nešto jednostavnija vježba no jako efikasna za jačanje bicepsa.
            </p>

            <img class="card-img-top" :src="vjezbe[0].url" />

            <h3>Kako pravilno izvesti vježbu</h3>

            <p>
              Sjedite na rub klupice, postavite lakat na unutarnju stranu
              noge-blizu koljena. Ruke su lagano pogrčene. Dignite uteg prema
              sebi s pregibom ruke u laktu, zadržite na sekundu i lagano
              ispuštajte u početni položaj. Jako je važno da nema nikakvog
              gibanja tijela već da samo biceps radi, jer ako nije tako, onda
              "trošite" ostale mišiće tijela, a ne onaj koji bi trebali.
            </p>

            <button @click="addExe(vjezbe[0].url)" id="1">Dodaj u moj program</button>
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

          <img class="card-img-top" :src="vjezbe[1].url" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Noge moraju biti stabilno na podu, u širini ramena. Stupite pred
            štangu, ramena nazad, prsa van, ruke su u visećem položaju kao da
            stojite "mirno".Dižite lagano štangu, ruke su priljepljene uz
            tijelo, odnosno laktovi se ne miču od tijela. Ne zaboravite držati
            ramena nazad i prsa van, zato da ramenski mišići ne bi pomagali pri
            podizanju štange.
          </p>

          <button @click="addExe(vjezbe[1].url)" id="1">Dodaj u moj program</button>
        </div>
      </div>
      <div class="car text-center">
        <div class="card-header">Vježba 3 - Pregib kabelom</div>
        <div class="card-body p-0">
          <p>
            Pravilnim drzanjem i radom ove vježbe vidjet ćete rezultate vrlo
            brzo
          </p>

          <img class="card-img-top" :src="vjezbe[2].url" />

          <h3>Kako pravilno izvesti vježbu</h3>

          <p>
            Stanite stabilno na pod kako nebi bilo ljuljanja tijekom izvođenja
            vježbe. Koljena su lagano skvrčena. Primite palicu s dlanovima
            okrenutima prema gore,uski hvat. Lagano potegnite palicu prema sebi
            i lagano ju ispuštajte.
          </p>

          <button @click="addExe(vjezbe[2].url)" id="btn">Dodaj u moj program</button>
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

            <img class="card-img-top" :src="vjezbe[3].url" />

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

            <button @click="addExe(vjezbe[3].url)" id="btn">Dodaj u moj program</button>
          </div>
        </div>

        <div class="car text-center">
          <div class="card-header">Vježba 5 - Pregib s velikom šipkom</div>
          <div class="card-body p-0">
            <p>
              Nešto jednostavnija vježba no jako efikasna za jačanje bicepsa.
            </p>

            <img class="card-img-top" :src="vjezbe[4].url" />

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

            <button @click="addExe(vjezbe[4].url)" id="btn">Dodaj u moj program</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const STORAGE_KEY = "vjezba-storage";

export default {
  name: "app",
  props: ["info"],
  data() {
    return {
      vjezbe: [
        {
          id: "1",
          naziv: "Vježba 1 - Pregib bučicama u pretklonu",
          url: require("@/assets/Bicab.gif"),
        },
        {
          id: "2",
          naziv: "Vježba 2 - Pregib sa štanglom",
          url: require("@/assets/Bicaa.gif"),
        },
        {
          id: "3",
          naziv: "Vježba 3 - Pregib kabelom",
          url: require("@/assets/Bicat.gif"),
        },
        {
          id: "4",
          naziv: "Vježba 4 - Pregib bučicama na kosoj klupi",
          url: require("@/assets/Bicac.gif"),
        },
        {
          id: "5",
          naziv: "Vježba 5 - Pregib s velikom šipkom",
          url: require("@/assets/Bicap.gif"),
        },
      ],
      vjezba: "",
    };
  },
  methods: {
    getNazivByIndex({ vjezbe = [], index = 0 }) {
      return vjezbe[index] || {};
    },
    addExe(img) {
      let keyName = "Bicep";
      let noges = [];
      if (localStorage[keyName]) {
        noges = JSON.parse(localStorage[keyName]);
      }
      let flag = true;

      noges.forEach((url) => {
        if (img == url) {
          alert("Already added");
          flag = false;
        }
      });
      if (flag) noges.push(img);

      localStorage[keyName] = JSON.stringify(noges);
    },
  },
};
</script>
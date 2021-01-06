<template>
  <div>
    <div>
    <img src="@/assets/teretana_002.jpg" width="100%" height="350"/>
    </div>
  <div class="container">
  <div class="row" >
    <div class="col align-self-start" id="slova">
      Pronađi željene vježbe
    </div>
    <div class="col align-self-center" id="slova">
      Napravi vlastiti plan vježbanja
    </div>
    <div class="col align-self-end" id="slova">
      Izmjeri indeks tjelesne mase
    </div>
  </div> 
   <Footer />
  </div>   




</div>

</template>

<style >
#slova {
  
 font-weight: bold;
  color: #070707;

}

.page-footer{
 bottom: 0;
 width: 100%;
}

</style>
<script>
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>







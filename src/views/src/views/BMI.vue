<template>
<div>
 <div>
    <img src="@/assets/teretana_002.jpg" width="100%" height="350"/>
    <p><b>Izmjerite svoj index tjelesne mase</b></p>
   
    </div>
  
  <div class="container" id="ulijevo" >
  <div class="row">
    <div class="col-sm">
      </div>
      <div class="col-sm" >
        <form>
          <div class="form-group">
            <label for="Visina">Vaša visina u centimetrima</label>
            <input 
            type="float" 
            class="form-control" 
            id="Visina" 
            placeholder="Unesite svoju visinu"
            v-model="visina"
            />
              </div>
              <div class="form-group" >
                <label for="Tezina">Vaša težina u kg</label>
                <input
                type="float" 
                class="form-control"
                id="Tezina"
                placeholder="Unesite svoju težinu"
                v-model="tezina"
                />
                
          
                </div>
                
                
                
                
                </form>
                
              
                </div>
                <div class="col-sm">
                  </div>
                  </div>
                  </div>
                  <div id="centar">
                <p>Vaš indeks tjelesne mase je: {{zbr}}</p>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Vrijednost indeksa tjelesne mase</th>
      <th scope="col">Vaše stanje</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
    
      <td>BMI manji od 18,5</td>
      <td>Premala tjelesna težina</td>
    </tr>
    <tr>
     
      
      <td>BMI 18,5 - 24,9</td>
      <td>Normalna tjelesna težina</td>
    </tr>
    <tr>
 
      <td>BMI 25 - 29,9</td>
      <td>Prekomjerna tjelesna težina</td>
    </tr>
    <tr>
      
      <td>BMI 30 - 34,9</td>
      <td>Debljina prvog stupnja</td>
    </tr>
    <tr>
      
      <td>BMI 35 - 39,9</td>
      <td>Debljina drugog stupnja</td>
    </tr>

    <tr>
      
      <td>BMI veći od 40</td>
      <td>Debljina trećeg stupnja</td>
    </tr>
  </tbody>
</table>
     
                </div>
</div>

</template> 
<script>
export default {
  data() {
    return {
      tezina: '', 
      visina: '' 
    }
  },
  computed: {
    zbr: function() {
      return (Number(this.tezina) / Number((this.visina/100)*(this.visina/100))).toFixed(1)
    
    }
    
    
  }
}
</script>

<style>
#ulijevo{
    float:left;
    font-weight:bold;
}    
#centar{
   
    font-weight:bold;
}    
</style>

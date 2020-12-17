<template>
<div>
 <div>
    <img src="@/assets/teretana_002.jpg" width="100%" height="350"/>
    <p>Izmjerite svoj index tjelesne težine</p>
    {{zbr}}
    
    
    </div>
  
  <div class="container" id="ulijevo" >
  <div class="row">
    <div class="col-sm">
      </div>
      <div class="col-sm" >
        <form>
          <div class="form-group">
            <label for="Visina">Vaša visina u metrima</label>
            <input 
            type="float" 
            class="form-control" 
            id="Visina" 
            placeholder="Unesite svoju visinu"
            v-model="zbr.visina"
            />
              </div>
              <div class="form-group" >
                <label for="Tezina">Vaša težina u kg</label>
                <input
                type="float" 
                class="form-control"
                id="Tezina"
                placeholder="Unesite svoju težinu"
                v-model="zbr.tezina"
                />
                
          
                </div>
                
                <button type="button" onclick="" class="btn btn-primary">Izračunaj</button>
                </form>
              
                </div>
                <div class="col-sm">
                  </div>
                  </div>
                  </div>
</div>

</template> 
<script>
export default {
        data() {
            return {
                zbr: {
                   tezina:'',
                   visina:'',
                      
                },
                
            }
            }
            
        
    }

</script>

<style>
#ulijevo{
    float:left;
}    
</style>

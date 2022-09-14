<template>
  <div>
    <!-- Navigation -->
    <navigation theme="dark"></navigation>


    <!-- Espace personnel section -->
    <div class="px-5 px-lg-5 pt-5 my-0 bg-black">

      <div class="row gx-4 gx-lg-5">
        <h1 class="text-start text-white text-uppercase col-md-10"><b>Mes adresses</b></h1>
        <router-link to="/espace" class="col-md-1">
          <button type="button" class="btn btn-light text-uppercase text-white">Retour</button>
        </router-link>

        <!-- colume 1 -->
        <div class="col-md-4 my-5">
          <div class="card bg-white">
            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
              <li class="list-group-item card-title">Intitulé: <b>Siège</b></li>
              <li class="list-group-item card-title">Nom: <b>SOULIER</b></li>
              <li class="list-group-item card-title">Prénom: <b>Enzo</b></li>
              <li class="list-group-item card-title">Adresse: <b>9 LE CLOS DES APPENS</b></li>
              <li class="list-group-item card-title">Complément d'adresse: </li>
              <li class="list-group-item card-title">Code Postal: <b>42450</b></li>
              <li class="list-group-item card-title">Ville: <b>SURY-LE-COMTAL</b></li>
              <li class="list-group-item card-title">Pays: <b>France</b></li>
              <li>
                <input type="checkbox" class="form-check-input" id="exampleCheck1" checked>
                <label class="form-check-label text-muted" for="exampleCheck1">Définir comme adresse favorite</label>
              </li>
            </ul>
          </div>
        </div>

        <!-- colume 2 -->
        <div class="col-md-4 my-5">
          <div class="card bg-white">
            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
              <li class="list-group-item card-title">Intitulé: <b>Domicile</b></li>
              <li class="list-group-item card-title">Nom: <b>SOULIER</b></li>
              <li class="list-group-item card-title">Prénom: <b>Enzo</b></li>
              <li class="list-group-item card-title">Adresse: <b>9 LE CLOS DES APPENS</b></li>
              <li class="list-group-item card-title">Complément d'adresse: </li>
              <li class="list-group-item card-title">Code Postal: <b>42000</b></li>
              <li class="list-group-item card-title">Ville: <b>SAINT-ETIENNE</b></li>
              <li class="list-group-item card-title">Pays: <b>France</b></li>
              <li>
                <input type="checkbox" class="form-check-input" id="exampleCheck2">
                <label class="form-check-label text-muted" for="exampleCheck1">Définir comme adresse favorite</label>
              </li>
            </ul>
          </div>
        </div>

        <!-- colume 3 -->


      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./navigation.vue";
  export default{
    components: { Navigation },
    data(){
      return{

      }
    },
  }
</script>

<style>
a{
  color: black;
}

.btn{
  background-color: black;
}

</style>

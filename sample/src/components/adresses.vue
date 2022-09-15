<template>
  <div>
    <!-- Navigation -->
    <navigation theme="dark"></navigation>


    <!-- Espace personnel section -->
    <div class="px-5 px-lg-5 pt-5 my-0 bg-black">

      <div class="row">

        <h1 class="text-start text-white text-uppercase col-md-10"><b>Mes adresses</b></h1>
        <router-link to="/espace" class="col-md-1">
          <button type="button" class="btn btn-light text-uppercase text-white">Retour</button>
        </router-link>

        <div class="col-md-4 my-5" v-for="(adresse, index) in adresses">
          <div class="card bg-white">
            <ul class="card-body mb-0 p-4 py-5 text-black text-start">
              <li class="list-group-item card-title">Intitulé: <b>{{ adresse.Intitule }}</b></li>
              <li class="list-group-item card-title">Nom: <b>{{ adresse.Nom }}</b></li>
              <li class="list-group-item card-title">Prénom: <b>{{ adresse.Prenom }}</b></li>
              <li class="list-group-item card-title">Adresse: <b>{{ adresse.Adresse }}</b></li>
              <li class="list-group-item card-title">Complément d'adresse: <b>{{ adresse.ComplementAdresse }}</b></li>
              <li class="list-group-item card-title">Code Postal: <b>{{ adresse.CodePostal }}</b></li>
              <li class="list-group-item card-title">Ville: <b>{{ adresse.Ville }}</b></li>
              <li class="list-group-item card-title">Pays: <b>{{ adresse.Pays }}</b></li>
              <li>
                <input type="checkbox" class="form-check-input" v-bind:id="'check' + index" :checked="adresse.checked">
                <label class="form-check-label text-muted" v-bind:for="'check' + index">Définir comme adresse favorite</label>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-4 my-5 section-add">
          <div v-on:click="addAdresse()" class="border border-white h-100 rounded text-white btn-add-parent">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle btn-add" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./navigation.vue";

  export default{

    components: { Navigation },

    methods : {
      addAdresse(){
        this.adresses.push({
          Intitule: null,
          Nom: null,
          Prenom: null,
          Adresse : null,
          ComplementAdresse: null,
          CodePostal: null,
          Ville: null,
          Pays: null,
          checked: false,
        });
        document.querySelector(".btn-add-parent")
      }
    },

    data(){

      return{
        mot : null,
        adresses : [
          {
            Intitule: "Siège",
            Nom: "SOULIER",
            Prenom: "Enzo",
            Adresse : "9 LE CLOS DES APPENS",
            ComplementAdresse: null,
            CodePostal: "42450",
            Ville: "SURY-LE-COMTAL",
            Pays: "France",
            checked: true,
          },
          {
            Intitule: "Domicile",
            Nom: "SOULIER",
            Prenom: "Enzo",
            Adresse : "10 LE CLOS DES APPENS",
            ComplementAdresse: null,
            CodePostal: "42000",
            Ville: "SAINT-ETIENNE",
            Pays: "France",
            checked: false,
          },
          {
            Intitule: "Domicile",
            Nom: "SOULIER",
            Prenom: "Enzo",
            Adresse : "10 LE CLOS DES APPENS",
            ComplementAdresse: null,
            CodePostal: "42000",
            Ville: "SAINT-ETIENNE",
            Pays: "France",
            checked: false,
          },
          {
            Intitule: "Domicile",
            Nom: "SOULIER",
            Prenom: "Enzo",
            Adresse : "10 LE CLOS DES APPENS",
            ComplementAdresse: null,
            CodePostal: "42000",
            Ville: "SAINT-ETIENNE",
            Pays: "France",
            checked: true,
          },
        ],
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

.btn-add-parent{
  position:relative;
}

.btn-add{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 10%;
  width: 50%;
  margin: auto;
}
</style>

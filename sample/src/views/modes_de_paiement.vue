<template>
  <div>
    <!-- Navigation -->
    <navigation theme="clair"></navigation>

    <div class="px-5 my-0 bg-white">
      <div class="row gx-4 gx-lg-5 p-5">
        <h1 class="text-start text-black text-uppercase col-md-10"><b>Modes de paiement</b></h1>
        <router-link to="/espace" class="col-md-1">
          <button type="button" class="btn btn-dark text-uppercase ">Retour</button>
        </router-link>
        <!-- container importer option1 produit -->
        <div class="container-produit row align-items-start">
          <div class="col-md-12 my-5 text-white">
            <div class="card bg-black">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <ul class="card-body mb-0 p-5 text-start">
                    <li class="list-group-item card-title text-uppercase"><b>virement</b></li>
                    <li class="list-group-item card-title">Intitulé: <b>CAISSE D'ÉPARGNE</b></li>
                    <li class="list-group-item card-title">Pays de la banque: <b>France</b></li>
                    <li class="list-group-item card-title">Devise: <b>EUR(€)</b></li>
                    <li class="list-group-item card-title">BIC: <b>CEPA FR 00 000</b></li>
                    <li class="list-group-item card-title">IBAN: FR 1234567891234567</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="card-body mb-0 p-5 text-start">
                    <li class="list-group-item card-title">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Je suis un professionnel</label>
                    </li>
                    <li class="list-group-item card-title text-uppercase">Nom de la société: <b>GRAALSPOTTER</b></li>
                    <li class="list-group-item card-title text-uppercase">TVA: <b>FR12899883938</b></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-produit row align-items-start">
          <div class="col-md-12 my-5">
            <div class="card bg-light">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <ul class="card-body mb-0 p-5 text-start">
                    <li class="list-group-item card-title text-uppercase"><b>PAYPAL</b></li>
                    <li class="list-group-item card-title">Intitulé: <b>PAYPAL PERSO</b></li>
                    <li class="list-group-item card-title">E-mail: <b>enzo.soulier@gmail.com</b></li>
                    <li class="list-group-item card-title">Confirmation e-mail: <b>enzo.soulier@gmail.com</b></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

import Navigation from "../components/navigation.vue";

export default{

  components: { Navigation },

  data(){
    return{

    }
  },
}
</script>

<style>
.btn-dark{
  background-color: black;
}
</style>

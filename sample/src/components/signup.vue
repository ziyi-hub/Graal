<template>
  <div>
    <!-- Navigation -->
    <navigation theme="clair"></navigation>

    <div class="row">
      <!-- section 1 formulaire -->
      <div class="col-xl-6">
        <div class="card-body p-md-5 text-black text-uppercase">
          <h1 class="text-start"><b>Inscription</b></h1>
          <p class="text-muted mb-5 text-start">Tu as déjà un compte? <a href="#" class="fw-bold text-body"><u>CONNECTE TOI</u></a></p>
          <form class="row g-3 text-uppercase text-start">
            <!-- Genre -->
            <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
              <h6 class="mb-0 me-4">Genre: </h6>
              <div class="form-check mb-0 me-5">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option1" />
                <label class="form-check-label" for="maleGender">Homme</label>
              </div>

              <div class="form-check mb-0 me-5">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option2" />
                <label class="form-check-label" for="femaleGender">Femme</label>
              </div>
            </div>

            <!-- Nom -->
            <div class="col-md-6">
              <label for="nom" class="form-label">Nom</label>
              <input type="text" class="form-control" id="nom" aria-describedby="NOM">
            </div>

            <!-- Prénom -->
            <div class="col-md-6">
              <label for="prenom" class="form-label">Prénom</label>
              <input type="text" class="form-control" id="prenom">
            </div>

            <!-- E-mail -->
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email">
            </div>

            <!-- Téléphone -->
            <div class="mb-3">
              <label for="telephone" class="form-label">Téléphone</label>
              <input type="tel" class="form-control" id="telephone">
            </div>

            <!-- Mot de passe -->
            <div class="col-md-6">
              <label for="password" class="form-label">Mot de passe</label>
              <div class="input-group g-3">
                <input type="password" class="form-control" id="password">
                <span class="input-group-text input-group-text-1" v-on:click="clickMasquer()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                  </svg>
                </span>
              </div>
            </div>

            <!-- Confirmer le mot de passe -->
            <div class="col-md-6">
              <label for="passwordConfirm" class="form-label">Confirmer le mot de passe</label>
              <div class="input-group g-3">
                <input type="password" class="form-control" id="passwordConfirm">
                <span class="input-group-text input-group-text-2" v-on:click="clickMasquerConfirm()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                  </svg>
                </span>
              </div>
            </div>

            <!-- Checkbox m'abonner a la newsletter -->
            <div class="col-md-6 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label text-muted" for="exampleCheck1">M'abonner a la newsletter</label>
            </div>
            <router-link to="/description"><button v-on:click="" class="btn btn-dark" type="button">JE M'INSCRIS</button></router-link>
          </form>
        </div>
      </div>

      <!-- section 2 image -->
      <div class="col-xl-6 d-none d-xl-block">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" class="img-fluid"/>
      </div>
    </div>
  </div>


</template>

<script>

import Navigation from "./navigation.vue";

  export default{

    components: { Navigation },

    methods : {
      clickMasquer(){
        let input = document.getElementById("password");
        if (input.type === "password") {
          input.type = "text";
        } else {
          input.type = "password";
        }
      },

      clickMasquerConfirm(){
        let input = document.getElementById("passwordConfirm");
        if (input.type === "password") {
          input.type = "text";
        } else {
          input.type = "password";
        }
      },
    },

    computed : {
    },
  }
</script>

<style>

</style>

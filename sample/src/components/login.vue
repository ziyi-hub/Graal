<template>
  <div>
    <!-- Navigation -->
    <navigation theme="clair"></navigation>

    <div class="row">
      <!-- section 1 formulaire -->
      <div class="col-xl-6">
        <div class="card-body p-md-5 text-black text-uppercase">
          <h1 class="text-center"><b>CONNEXION</b></h1>
          <p class="text-muted text-center">Tu n'as pas de compte? <a href="#" class="fw-bold text-body"><u>INSCRIS TOI</u></a></p>
          <form class="row g-3 p-md-5 text-uppercase text-start">

            <!-- E-mail -->
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email">
            </div>

            <!-- Mot de passe -->
            <div class="mb-3">
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
            <p class="text-muted oublie-mot-de-passe"><u>J'ai oublié mon mot de passe</u></p>

            <button v-on:click="" class="btn btn-dark" type="button">CONNEXION</button>
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
    },

    computed : {
    },
  }
</script>

<style>
.oublie-mot-de-passe{
  font-size: 0.575em;
  color: #6c757d;
  display: inline;
}
</style>

<template>
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
              <input type="number" class="form-control" id="telephone">
            </div>

            <!-- Mot de passe -->
            <div class="col-md-6">
              <label for="password" class="form-label">Mot de passe</label>
              <input type="password" class="form-control" id="password">
            </div>

            <!-- Confirmer le mot de passe -->
            <div class="col-md-6">
              <label for="passwordConfirm" class="form-label">Confirmer le mot de passe</label>
              <input type="password" class="form-control" id="passwordConfirm">
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

</template>

<script>
  export default{
    methods : {

    },

    computed : {

    },
  }
</script>

<style>

</style>

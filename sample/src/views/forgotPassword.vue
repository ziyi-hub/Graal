<template>
  <div>
    <!-- Navigation -->
    <navigation theme="clair"></navigation>

      <!---->

    <div class="row">
      <!-- section 1 formulaire -->
      <div class="col-xl-6">
        <div class="card-body p-md-5 text-black">
          <h1 class="text-start text-uppercase"><b>Mot de passe oublié?</b></h1>

              <div class="card shadow-sm mt-5">
                <div class="card-body p-5 text-start">
                  <div class="mb-4">
                    <h5>Mot de passe oublié?</h5>
                    <p class="mb-2">Indiquez l'adresse e-mail associée à votre Espace Client pour générer un nouveau mot de passe</p>
                  </div>
                  <form>
                    <div class="mb-3">
                      <label for="email" class="form-label">Adresse email</label>
                      <input type="email" id="email" class="form-control" name="email" placeholder="Adresse email"
                             required="">
                    </div>
                    <div class="mb-3 d-grid">
                      <button type="submit" class="btn btn-primary">Envoyer</button>
                    </div>
                    <p class="text-muted text-center">Tu n'as pas de compte?
                      <router-link to="/inscription"><a class="fw-bold text-body"><u>INSCRIS TOI</u></a></router-link>
                    </p>
                  </form>
                </div>

          </div>
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
import Navigation from "../components/navigation.vue";

export default{
  components: { Navigation },
}
</script>

<style>

</style>

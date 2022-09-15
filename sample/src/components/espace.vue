<template>
  <div>
    <!-- Navigation -->
    <navigation theme="dark"></navigation>


    <!-- Espace personnel section -->
    <div class="px-5 px-lg-5 pt-5 my-0 bg-black">
      <h1 class="text-start text-white text-uppercase"><b>Mon espace personnel</b></h1>
      <div class="row gx-4 gx-lg-5">

        <!-- colume 1 -->
        <div class="col-md-4 pt-5">
          <div class="card bg-white">

            <a class="btn-profil p-4 pt-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
              </svg>
            </a>

            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
              <li class="list-group-item card-title">Nom: <b>SOULIER</b></li>
              <li class="list-group-item card-title">Prénom: <b>Enzo</b></li>
              <li class="list-group-item card-title">Identifiant: <b>hainezosoul</b></li>
              <li class="list-group-item card-title">Téléphone: <b>06 12 34 56 78</b></li>
              <li class="list-group-item card-title">e-mail: <b>enzo.soulier@gmail.com</b></li>
              <li class="list-group-item card-title">Mot de passe: ********</li>
            </ul>
          </div>

          <div class="card bg-white mt-5">
            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
              <li class="list-group-item card-title"><b>Mode de paiement</b></li>
              <li class="list-group-item card-title">Vous n'avez pas encore ajouter de mode de paiement</li>
            </ul>
            <button type="button" class="btn btn-dark">Configurer</button>
          </div>
        </div>

        <!-- colume 2 -->
        <div class="col-md-4 my-5">
          <div class="card bg-white">

            <router-link to="/adresses">
              <a class="btn-adresse p-4 pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                </svg>
              </a>
            </router-link>

            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
              <li class="list-group-item card-title text-uppercase"><b>ADRESSES</b></li>
              <li class="list-group-item card-title">Intitulé: <b>Siège</b></li>
              <li class="list-group-item card-title">Nom: <b>SOULIER</b></li>
              <li class="list-group-item card-title">Prénom: <b>Enzo</b></li>
              <li class="list-group-item card-title">Adresse: <b>9 LE CLOS DES APPENS</b></li>
              <li class="list-group-item card-title">Complément d'adresse: </li>
              <li class="list-group-item card-title">Code Postal: <b>42450</b></li>
              <li class="list-group-item card-title">Ville: <b>SURY-LE-COMTAL</b></li>
              <li class="list-group-item card-title">Pays: <b>France</b></li>
            </ul>
            <button type="button" class="btn btn-dark">Ajouter une autre adresse</button>
          </div>
        </div>

        <!-- colume 3 -->
        <div class="col-md-4 my-5">
          <div class="card bg-white">
            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
              <li class="list-group-item card-title text-uppercase"><b>Mes produits listés</b></li>

              <!-- liste de produits -->
              <div class="layout-scrollbars">
                <div class="row">
                  <div v-for="product in products" class="row-md-12">

                    <!-- utilise boule pour afficher des produits -->
                    <div class="card card-body mt-3">
                      <div class="media align-items-center ">
                        <div class="row align-items-center">
                          <div class="col">
                            <div class="mr-2 mb-3 mb-lg-0"><img v-bind:src="product.img" width="100" height="100" alt=""></div>
                          </div>
                          <div class="col">
                            <div class="media-body">
                              <h6 class="media-title font-weight-semibold">
                                <li class="list-inline-item"><a data-abc="true">{{ product.marque }}</a></li>
                              </h6>
                              <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                                <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">{{ product.model }}</a></li>
                              </ul>
                              <ul class="list-inline list-inline-dotted mb-0">
                                <li class="list-inline-item">{{ product.tailles }}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            <button type="button" class="btn btn-dark">Ajouter des produits</button>
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
    data(){
      return{
        mot : null,
        products : [
          {
            marque: "MARQUE1",
            model: "MODEL1",
            tailles: "TAILLES RECHERCHÉES1",
            img : "https://www.courir.com/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dwbd5a6bac/images/hi-res/001497464_101.png?sw=600&sh=600&sm=fit"
          },
          {
            marque: "MARQUE2",
            model: "MODEL2",
            tailles: "TAILLES RECHERCHÉES2",
            img : "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/55bbafbe-01b7-4117-b63e-0d907ce06cf3/chaussure-jordan-1-mid-pour-plus-age-cMgFgw.png"
          },
          {
            marque: "MARQUE3",
            model: "MODEL3",
            tailles: "TAILLES RECHERCHÉES3",
            img : "https://m.media-amazon.com/images/I/61J23MniCRL._AC_UY695_.jpg"
          },
        ],
      }
    },
  }
</script>

<style>
.layout-scrollbars{
  height: 400px;
  overflow-y: scroll;
}

a{
  color: black;
}

.btn{
  background-color: black;
}

.btn-adresse, .btn-profil{
  position: absolute;
  top: 0;
  right: 0;
}

</style>

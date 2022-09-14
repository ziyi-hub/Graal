<template>
  <div>
    <!-- Navigation -->
    <navigation theme="dark"></navigation>


    <!-- Espace personnel section -->
    <div class="px-5 px-lg-5 pt-5 my-0 bg-black">

      <div class="row gx-4 gx-lg-5">
        <h1 class="text-start text-white text-uppercase col-md-10"><b>suivi de mes produits</b></h1>
        <router-link to="/espace" class="col-md-1">
          <button type="button" class="btn btn-light text-uppercase text-white">Retour</button>
        </router-link>

        <!-- colume 1 -->
        <div class="col-md-4 my-5">
          <div class="card bg-white">
            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
              <li class="list-group-item card-title text-uppercase"><b>En attente de confirmation</b></li>

              <!-- liste de produits -->
              <div class="layout-scrollbars">
                <div class="row">
                  <div v-for="product in products" class="row-md-12 liste-produit ">

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
                                <li class="list-inline-item"><a  class="text-muted" data-abc="true">{{ product.model }}</a></li>
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
          </div>
        </div>

        <!-- colume 2 -->
        <div class="col-md-4 my-5">
          <div class="card bg-white">
            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
              <li class="list-group-item card-title text-uppercase"><b>Ventes en cours</b></li>

              <!-- liste de produits -->
              <div class="layout-scrollbars">
                <div class="row">
                  <div v-for="product in products" class="row-md-12 liste-produit ">

                    <!-- utilise boule pour afficher des produits -->
                    <div class="card card-body mt-3">
                      <div class="media align-items-center my-3">
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
                                <li class="list-inline-item"><a class="text-muted" data-abc="true">{{ product.model }}</a></li>
                              </ul>
                              <ul class="list-inline list-inline-dotted mb-0">
                                <li class="list-inline-item">{{ product.tailles }}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                          <li class="list-inline-item">N° <b>2157951231579GN</b></li>
                          <li class="list-inline-item">En attente de l'expédition</li>
                          <li class="list-inline-item">
                            <button class="btn btn-dark" type="button">Télécharger le bordereau</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <!-- colume 3 -->
        <div class="col-md-4 my-5">
          <div class="card bg-white">
            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
              <li class="list-group-item card-title text-uppercase"><b>Archivés</b></li>

              <!-- liste de produits -->
              <div class="layout-scrollbars">
                <div class="row">
                  <div v-for="product in products" class="row-md-12 liste-produit ">

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
                                <li class="list-inline-item"><a class="text-muted" data-abc="true">{{ product.model }}</a></li>
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

</style>

<template>
  <div>
    <!-- Navigation -->
    <navigation theme="clair"></navigation>

    <div class="px-5 px-lg-5 pt-5 my-0 bg-white">
      <div class="row gx-4 gx-lg-5">

        <!-- section 1 -->
        <div class="col-md-6">
          <h1 class="text-start text-black text-uppercase"><b class="p-4">Lister un produit</b></h1>
          <div class="bg-white">
            <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">

              <!-- Navbar Search-->
              <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0 w-100">
                <div class="input-group">
                  <input class="form-control" type="text" placeholder="JORDAN MID M..." aria-label="JORDAN MID M..." aria-describedby="btnNavbarSearch" v-model="mot"/>
                  <button class="btn btn-dark" id="btnNavbarSearch" type="button" v-on:click="$emit('setval')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </button>
                </div>
              </form>

              <!-- liste de produits -->
              <div class="layout-scrollbars">
                <div class="row">
                  <div v-for="product in products" class="row-md-12 liste-produit ">

                    <!-- utilise boule pour afficher des produits -->
                    <div class="card card-body mt-3" v-on:click="clickMasquerProduit()">
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

        <!-- section 2 -->
        <div class="col-md-6">
          <!-- titre -->
          <div class="container">
            <h1 class="row text-uppercase">
              <b class="col-md-6 text-black">bulk list</b>
              <div class="col-md-6">
                <div class="btn-csv">
                  <button type="button" class="btn btn-dark text-uppercase" v-on:click="clickMasquer">
                    <b>importer un csv</b>
                  </button>
                  <i>ou connecter un google sheet</i>
                </div>
              </div>
            </h1>
          </div>

          <!-- container importer option1 produit -->
          <div class="container-produit row align-items-start">
            <div class="col-md-12 my-5">
              <div class="card bg-white">
                <div class="row align-items-center">
                  <div class="col">
                    <ul class="card-body mb-0 p-4 pt-5 text-black text-start text-uppercase">
                      <li class="list-group-item card-title"><b>Nike</b></li>
                      <li class="list-group-item card-title">AJ1 mid mcr</li>
                      <li class="card-title row checkboxs">
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_37">
                          <label class="form-check-label" for="tailles_37">37</label>
                        </div>
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_38">
                          <label class="form-check-label" for="tailles_38">38</label>
                        </div>
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_39">
                          <label class="form-check-label" for="tailles_39">39</label>
                        </div>
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_40">
                          <label class="form-check-label" for="tailles_40">40</label>
                        </div>
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_41">
                          <label class="form-check-label" for="tailles_41">41</label>
                        </div>
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_42">
                          <label class="form-check-label" for="tailles_42">42</label>
                        </div>
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_43">
                          <label class="form-check-label" for="tailles_43">43</label>
                        </div>
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_44">
                          <label class="form-check-label" for="tailles_44">44</label>
                        </div>
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_45">
                          <label class="form-check-label" for="tailles_45">45</label>
                        </div>
                        <div class="col-md-4">
                          <input class="form-check-input" type="checkbox" value="" id="tailles_46">
                          <label class="form-check-label" for="tailles_46">46</label>
                        </div>
                      </li>

                      <li class="list-group-item card-title">Durée de l'offre</li>
                      <li>
                        <div class="input-group">
                          <input type="text" class="form-control" aria-label="">
                          <span class="input-group-text">jours</span>
                        </div>
                      </li>
                      <li class="list-group-item card-title">Prix</li>
                      <li>
                        <div class="input-group">
                          <input type="text" class="form-control" aria-label="">
                          <span class="input-group-text">€</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col mb-0 p-4 pt-5">
                    <img src="https://m.media-amazon.com/images/I/61J23MniCRL._AC_UY695_.jpg" width="200" height="200" alt="">
                  </div>
                </div>
                <div class="row text-start p-4 pt-0">
                  <p class="text-success">Votre fichier à bien été importé</p>
                  <p class="text-danger">Echec de l'importation de votre fichier</p>
                </div>
              </div>
            </div>

            <div class="text-end col pb-5">
              <button type="button" class="btn btn-dark"><b>AJOUTER MON PRODUIT</b></button>
            </div>
          </div>

          <!-- container importer option2 csv -->
          <div class="container-import">
            <div class="col-md-12 my-5 ">
              <div class="card bg-white">
                <ul class="card-body mb-0 p-4 pt-5 pb-5 text-black text-start">
                  <li class="list-group-item card-title text-uppercase">
                    <b>Télécharger notre model de csv</b>
                    <button type="button" class="btn btn-dark"><b>ICI</b></button>
                  </li>
                  <li class="list-group-item card-title text-uppercase">
                    <b>Remplir votre fichier en suivant notre model</b>
                  </li>
                  <li class="list-group-item card-title text-uppercase">
                    <b>Importer votre fichier</b>
                    <button type="button" class="btn btn-dark"><b>IMPORTER</b></button><br><br>
                    <b>ou connecter un google sheet</b>
                    <button type="button" class="btn btn-dark"><b>CONNECTER</b></button>
                  </li>
                  <li>
                    <p class="text-success">Votre fichier à bien été importé</p>
                    <p class="text-danger">Echec de l'importation de votre fichier</p>
                  </li>
                </ul>
              </div>
            </div>


            <div class="text-end">
              <button type="button" class="btn btn-dark"><b>VALIDER</b></button>
            </div>
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
      statusMasquer : true,
      statusMasquerProduit : true,
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

  methods : {
    clickMasquer(){
      if (this.statusMasquer === true){
        document.querySelector(".container-import").style.display = "block";
      }else{
        document.querySelector(".container-import").style.display = "none";
      }
      this.statusMasquer = !this.statusMasquer;
    },

    clickMasquerProduit(){
      if (this.statusMasquerProduit === true){
        document.querySelector(".container-produit").style.display = "block";
      }else{
        document.querySelector(".container-produit").style.display = "none";
      }
      this.statusMasquerProduit = !this.statusMasquerProduit;
    },
  }
}
</script>

<style>
.layout-scrollbars{
  height: 400px;
  overflow-y: scroll;
}

.btn-dark{
  background-color: black;
}

.btn-csv > i {
  font-size: 0.3em;
  color: #6c757d;
  display: inline;
}

.btn-csv{
  display: grid;
}

p{
  margin: 0;
}

.checkboxs{
  margin-left: 0;
}

.container-produit, .container-import{
  display: none;
}



</style>

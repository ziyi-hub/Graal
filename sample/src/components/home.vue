<template>
  <div>
    <!-- Product section -->
    <div class="px-5 px-lg-5 pt-5 my-0">
      <div class="row gx-4 gx-lg-5">

        <!-- colume1 liste de marques -->
        <div class="col-md-3 pt-5">
          <div class="card bg-black">
            <ul class="card-body mb-0 p-4 pt-5 pb-5">
              <li class="list-group-item card-title text-white">TOUTES LES MARQUES</li>
              <li class="list-group-item card-title text-white">NIKE</li>
              <li class="list-group-item card-title text-white">ADIDAS</li>
              <li class="list-group-item card-title text-white">AIR JORDAN</li>
              <li class="list-group-item card-title text-white">YEEZY</li>
              <li class="list-group-item card-title text-white">BALENCIAGA</li>
              <li class="list-group-item card-title text-white">NEW BALANCE</li>
              <li class="list-group-item card-title text-white">CONVERSE</li>
            </ul>
          </div>
        </div>

        <!-- colume2 liste de produits -->
        <div class="col-md-5 my-5">
          <!-- Navbar Search-->
          <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0 w-100">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" v-model="mot"/>
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
                <div class="card card-body mt-3">
                  <div class="media align-items-center ">
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="mr-2 mb-3 mb-lg-0"><img v-bind:src="product.img" width="150" height="150" alt=""></div>
                      </div>
                      <div class="col">
                        <div>
                          <div class="media-body">
                            <h6 class="media-title font-weight-semibold">
                              <a href="#" data-abc="true">{{ product.marque }}</a>
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
          </div>
        </div>

        <!-- colume3 A propos -->
        <div class="col-md-4">
          <section class="page-section clearfix">
            <div class="container">
              <div class="intro">
                <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                  <h2 class="section-heading mb-4"><span class="section-heading-upper">Graal List</span></h2>
                  <p class="mb-3 text-start">Bienvenue sur la Graal List. Ici tu retrouveras toutes les paires que nous souhaitons racheter actuellement.</p>
                  <div class="d-flex">
                    <button class="signup btn btn-outline-light flex-shrink-0" type="button">S'INSCRIRE</button>
                    <button type="button" class="btn btn-outline-dark flex-shrink-0">SE CONNECTER</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
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

    methods : {
      setval(){
        this.input = this.$refs.inputmodule.mot;
        //this.created()
      },
/*
      created(){
        axios.
        get("https://api" + "/" + this.input)
          .then(response => {
            this.info2 = response.data[0]
          })
          .catch(error => {
            this.errored = true;
          })
          .finally(() => this.loading = false );
      },
*/
    },
  }
</script>

<style>
.list-group-item{
  text-align: left;
}

.signup{
  background-color: black;
}

.layout-scrollbars{
  height: 400px;
  overflow-y: scroll;
}

</style>

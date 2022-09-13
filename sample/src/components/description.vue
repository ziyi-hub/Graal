<template>
  <!-- Carousel Start -->
  <div class="p-0">
    <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item item1 bg-black active">
          <div class="carousel-caption">
            <div class="row justify-content-center">
              <div class="col-lg-12 pt-5">
                <h1 class="display-1 text-white mb-3 fw-bold"><b>BIENVENUE !</b></h1>
                <p class="fs-5 text-white mb-4">Nous venons de t'envoyer un mail de confirmation afin de vérifier ton compte</p>
                <button class="btn btn-outline-light btn-circle m-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item item2 bg-black">
          <div class="carousel-caption">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-7 pt-5">
                  <h1 class="display-4 text-white mb-3 ">Let's Save More Lifes With Our Helping Hand</h1>
                  <p class="fs-5 text-white-50 mb-5 ">Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</p>
                  <a class="btn btn-primary py-2 px-3 ">
                    Learn More
                    <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                      <i class="fa fa-arrow-right"></i>
                    </div>
                  </a>
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
  export default{
    methods : {
      changeContenu(){
        let actives = document.querySelector(".active");
        if(actives !==null){
          actives.classList.remove("active");
        }
        document.querySelector(".item2").classList = "carousel-item item2 bg-black active";
      },
    },

    computed : {

    },
  }
</script>

<style>
.carousel-item{
  height: 70vh;
}

.btn-circle{
  border-radius: 50%;
}

</style>

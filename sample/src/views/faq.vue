<template>
  <div>

    <!-- Navigation -->
    <navigation theme="clair"></navigation>

    <div class="px-5 my-0 bg-white">
      <div class="row gx-4 gx-lg-5 p-5">
        <h1 class="text-start text-black text-uppercase col-md-10"><b>faq</b></h1>
        <router-link to="/espace" class="col-md-1">
          <button type="button" class="btn btn-dark text-uppercase ">Retour</button>
        </router-link>

        <!--<div class="container-produit row align-items-start">-->
          <div class="col-md-12 my-5 text-black text-start">

            <b>Lorem Ipsum is simply dummy text of the printing?</b>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <br><br>
            <b>Lorem Ipsum is simply dummy text of the printing?</b>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <br><br>
            <b>Lorem Ipsum is simply dummy text of the printing?</b>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <br><br>
            <b>Lorem Ipsum is simply dummy text of the printing?</b>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <br><br>
            <b>Lorem Ipsum is simply dummy text of the printing?</b>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

          </div>
        <!--</div>-->
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

</style>

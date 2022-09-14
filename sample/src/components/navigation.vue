<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light"
       v-bind:class="theme === 'dark' ? 'navbar navbar-expand-lg navbar-light bg-black' : 'navbar navbar-expand-lg navbar-light bg-light' ">
    <div class="container px-4">
      <a class="navbar-brand" v-bind:style="theme === 'dark' ? 'color: white' : ''">GS GRAAL LIST<i>&nbsp;by Graal Spotter</i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <router-link to="/" v-bind:class="className">
            <li class="nav-item"></li>
          </router-link>
          <router-link to="/espace" v-bind:class="className">
            <li class="nav-item"><b>MON ESPACE</b></li>
          </router-link>
          <router-link to="/mes_produits" v-bind:class="className">
            <li class="nav-item"><b>MES PRODUITS</b></li>
          </router-link>
          <router-link to="/lister_un_produit" v-bind:class="className">
            <li class="nav-item"><b>LISTER UN PRODUIT</b></li>
          </router-link>
          <router-link to="/faq" v-bind:class="className">
            <li class="nav-item"><b>FAQ</b></li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default{
    props: ['theme'],

    data(){
      return{
        className : "color-black",
      }
    },

    mounted: function() {
      if (this.theme === "dark"){
        this.className = "color-white";
      }else{
        this.className = "color-black";
      }
    }
  }
</script>

<style>
.navbar-collapse{
  flex-grow: unset;
}

.navbar-brand > i {
  font-size: 0.575em;
  color: #6c757d;
  display: inline;
}

.color-white {color: white;}
.color-black {color: black;}

</style>

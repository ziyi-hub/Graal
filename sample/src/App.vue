<template>
  <div id="app">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4">
        <a class="navbar-brand">GS GRAAL LIST by Graal Spotter</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li class="nav-item"><router-link to="/"></router-link></li>
            <li class="nav-item"><router-link to="/mon_espace">MON ESPACE</router-link></li>
            <li class="nav-item"><router-link to="/mes_produits">MES PRODUITS</router-link></li>
            <li class="nav-item"><router-link to="/lister_un_produit">LISTER UN PRODUIT</router-link></li>
            <li class="nav-item"><router-link to="/faq">FAQ</router-link></li>
          </ul>

        </div>
      </div>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {

    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: black;
  text-decoration: none;
}

.navbar-collapse{
  flex-grow: unset;
}
</style>

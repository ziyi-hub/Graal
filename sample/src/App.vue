<template>
  <div id="app">
    <ul>
      <li><router-link to="/"></router-link></li>
      <li><router-link to="/mon_espace">MON ESPACE</router-link></li>
      <li><router-link to="/mes_produits">MES PRODUITS</router-link></li>
      <li><router-link to="/lister_un_produit">LISTER UN PRODUIT</router-link></li>
      <li><router-link to="/faq">FAQ</router-link></li>
    </ul>

    <router-view></router-view>

    <div id="footer" style="text-align: center" class="footer_box">
      <div style="font-size: 30px; color: #333">
        <facebook-outlined style="margin: 4px" />
        <instagram-outlined style="margin: 8px" />
        <twitter-outlined style="margin: 4px" />
      </div>
      <div>Info · Support · Marketing</div>
      <div>Terms of Use · Privacy Policy</div>
      <div>© 2022 ELYF</div>
    </div>


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
  margin-top: 60px;
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
  color: #42b983;
}

.footer_box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-flow: column wrap;
}
</style>

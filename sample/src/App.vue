<template>
  <div id="app">

    <router-view></router-view>
    <Footer />

  </div>
</template>

<script>
import Footer from "./components/footer";

export default {
  name: 'app',
  components: { Footer },

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
  /*color: black;*/
  text-decoration: none;
}

.navbar-collapse{
  flex-grow: unset;
}

.navbar-brand > i {
  font-size: 0.575em;
  color: #6c757d;
  display: inline;
}
</style>

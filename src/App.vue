<template>
  <div id="app">
    <app-header></app-header>

    <app-nav></app-nav>

    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

export default {
  components: {
    'app-header': Header ,
    'app-nav' : Nav
  }
}
</script>

<style lang="scss">
</style>

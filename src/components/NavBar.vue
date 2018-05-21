<template>
  <div class="hello">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand :to="{ name: 'trivia-app'}">Trivia App</b-navbar-brand>
      
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item class="active" :to="{ name: 'chuck'}">Chuck Noris</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <search-term 
                  @search-term-change="setSearchTerm"
            />
          </b-nav-form>
        </b-navbar-nav>

      </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
import SearchTerm from './SearchTerm'
import { mapMutations } from 'vuex'
export default {
  name: 'NavBar',
  components: {
    SearchTerm
  },
  methods: {
    ...mapMutations([
        'setSearchTerm'
    ])
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="hello">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand :to="{ name: 'trivia-app'}">Trivia App</b-navbar-brand>
      
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#"></b-nav-item>
          <b-nav-item href="#"></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>

      </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

}
</script>

<style scoped>

</style>

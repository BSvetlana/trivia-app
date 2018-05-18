<template>
    <div>

        <div class="container mt-4">
            <b-container class="bv-example-row">
                <b-row class="justify-content-md-center">
                    <b-col cols="6"> 

                        <b-card title="Card Title"
                                :img-src="randomJoke.iconUrl"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                                <p>{{randomJoke.value}}</p>
                        </b-card>

                    </b-col>
                </b-row>
            </b-container>
        </div>
        
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { store } from "../store";

export default {
  name: "ChuckNoris",
  computed: {
    ...mapGetters({
      randomJoke: "getRandomJoke"
    })
  },
  methods: {
    ...mapActions(["fatchRandomJoke"])
  },
  // created(){
  //     this.fatchRandomJoke()
  // },
  beforeRouteEnter(to, from, next) {
    store.dispatch("fatchRandomJoke", next);
    //next();
  }
};
</script>

<style>
</style>



<template>
    <div>

        <div class="container mt-4">
            <b-container class="bv-example-row">
                <b-row class="justify-content-md-center">
                    <b-col cols="6"> 

                        <b-card title="New Joke"
                                :img-src="randomJoke.iconUrl"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2">
                                <p>{{randomJoke.value}}</p>
                                <b-button variant="warning"
                                          @click="getNewJoke"  
                                          >
                                          Get New Joke
                                </b-button>
                                <input class="form-control mt-2" @input="setCategory"/>                                     
                         </b-card>

                    </b-col>
                </b-row>
            </b-container>
        </div>
        
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { store } from "../store";

export default {
  name: "ChuckNoris",
  computed: {
    ...mapGetters({
      randomJoke: "getRandomJoke"
    })
  },
  methods: {
      ...mapMutations([
          'setJokeCategory'
      ]),
    getNewJoke(){
       store.dispatch("fatchRandomJoke", () => {}) 
    },
    setCategory(event){
        this.setJokeCategory(event.target.value);
        
    }
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("fatchRandomJoke", next);
    
  }
};
</script>

<style>
</style>



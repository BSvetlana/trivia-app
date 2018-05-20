<template>
    <div>
      <div class="container mt-4">
        <b-container class="bv-example-row">
          <b-row class="justify-content-md-center">
            <b-col cols="10"> 
              <b-list-group>

                  <b-list-group-item 
                          v-for="trivia in trivias" 
                          :key="trivia.id"
                          @click="toggleTrivia(trivia.id)">
                      Question: {{trivia.question}} ?
                          <!-- <b-button type="submit"
                                    style="float: right"
                                    @click="gotAnswer(trivia.id)"
                                    v-b-modal.modal1>
                                Answer
                          </b-button> -->
                  <b-list-group-item 
                          :class="{ 'show': isVisibleTriviaAnswer(trivia.id) }">
                    Answer: {{ trivia.answer }}
                    </b-list-group-item>
                  </b-list-group-item>
                  

              </b-list-group>

              <!-- <b-modal id="modal1" title="Answer">
                  <p class="my-4">{{ triviaAnswer }}</p>
              </b-modal> -->

            </b-col>
          </b-row>
        </b-container>
      </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TriviaApp",
  data() {
    return {
      selectedTriviasId: [],
      answer: "test"
    };
  },
  computed: {
    ...mapGetters({
      trivias: "getTrivias"
    }),
    // triviaAnswer() {
    //   return this.answer;
    // }
  },
  methods: {
    ...mapActions(["fetchTrivias"]),
    toggleTrivia(triviaId) {
      let triviaIdIndex = this.selectedTriviasId.indexOf(triviaId);
      let isSelectedTriviaId = this.selectedTriviasId.indexOf(triviaId) > -1;

      if (isSelectedTriviaId) {
        return this.selectedTriviasId.splice(triviaIdIndex, 1);
      }
      this.selectedTriviasId.push(triviaId);
    },
    isVisibleTriviaAnswer(triviaId){
      return this.selectedTriviasId.indexOf(triviaId) > -1;
    }
    // gotAnswer(id) {
    //   let trivias = this.trivias.filter(trivia => {
    //     return trivia.id === id;
    //   });

    //   this.answer = trivias[0].answer;
    // }
  },
  created() {
    this.fetchTrivias();
  }
};
</script>

<style>
</style>



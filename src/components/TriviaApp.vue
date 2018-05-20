<template>
    <div>
      <div class="container mt-4">
        <b-container class="bv-example-row">
          <b-row class="justify-content-md-center">
            <b-col cols="10"> 
              <!-- <b-list-group>

                    <b-list-group-item 
                           v-for="trivia in trivias" 
                           :key="trivia.id"
                           @click="toggleTrivia(trivia.id)">
                       Question: {{trivia.question}} ?
                           <b-button type="submit"
                                     style="float: right"
                                     @click="gotAnswer(trivia.id)"
                                     v-b-modal.modal1>
                                 Answer
                           </b-button>
                   <b-list-group-item 
                           :class="{ 'show': isVisibleTriviaAnswer(trivia.id) }">
                     Answer: {{ trivia.answer }}
                     </b-list-group-item>
                   </b-list-group-item>
                  

                </b-list-group>

               <b-modal id="modal1" title="Answer">
                   <p class="my-4">{{ triviaAnswer }}</p>
               </b-modal>   -->

                <select
                  class="custom-select"
                  size="10"
                  @change="onCategoryChanged"
                >
                  <option
                    v-for="triviaCategory in triviaCategories"
                    :key="triviaCategory.id"
                    :value="triviaCategory.id">
                    {{ triviaCategory.title }}
                  </option>
                </select>
            <div class="accordion">
              <div
                      class="card"
                v-for="trivia in trivias"
                :key="trivia.id"
                @click="toggleTrivia(trivia.id)"
              >
              <div class="card-header">
                  <h5 class="mb-0">
                    {{ trivia.question }}
                  </h5>
              </div>

              <div
                  class="collapse"
                  :class="{ 'show': isVisibleTriviaAnswer(trivia.id) }"
              >
              <div class="card-body">
                    {{ trivia.answer }}
              </div>
                </div>
              </div>
            </div>
        

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
      answer: ''
    };
  },
  computed: {
    ...mapGetters({
      trivias: "getTrivias",
      triviaCategories: 'getTriviaCategories'
    }),
    // triviaAnswer() {
    //   return this.answer;
    // }
  },
  methods: {
    ...mapActions([
      "fetchTrivias",
      'fetchTriviaCategory'
      ]),
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
    },
    onCategoryChanged(event) {
      this.fetchTrivias(event.target.value)
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
    this.fetchTriviaCategory();
  }
};
</script>

<style>
</style>



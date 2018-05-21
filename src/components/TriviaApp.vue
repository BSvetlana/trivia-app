<template>
    <div>
      <div class="container mt-4">
        <b-container class="bv-example-row">
          <b-row class="justify-content-md-center">
            <b-col cols="10"> 
               <b-list-group>

                    <b-list-group-item 
                           v-for="trivia in currentlyVisibleTrivias" 
                           :key="trivia.id"
                           @click="toggleTrivia(trivia.id)">
                       Question: {{trivia.question}} ?
                           <b-button type="submit"
                                     style="float: right"
                                     @click="gotAnswer(trivia.id)"
                                     v-b-modal.modal1>
                                 Answer
                           </b-button>
                    </b-list-group-item>
                  

                </b-list-group>

               <b-modal id="modal1" title="Answer">
                   <p class="my-4">{{ triviaAnswer }}</p>
               </b-modal>   

             <!--    <select
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
             </div> -->

                 
            </b-col>
          </b-row>
        </b-container>
      </div>

            <custom-paginator
                  class=" mt-4"
                  :number-of-pages="numberOfPages"
                  :current-page="currentPage"
                  @selected-page="setCurrentPage"
                />
    </div>
</template>

<script>
import CustomPaginator from './CustomPaginator.vue'

import { mapGetters, mapActions } from "vuex";

export default {
  name: "TriviaApp",
  components: { 
      CustomPaginator
  },
  data() {
    return {
      selectedTriviasId: [],
      answer: '',
      filterTriviaTerm: '',
      currentPage: 1,
      
    }
  },
  computed: {
    ...mapGetters({
      trivias: "getTrivias",
      triviaCategories: 'getTriviaCategories',
      currentTerm: 'getSearchTerm'
    }),
    filteredTrivias(){
      return this.trivias.filter((trivia) => {
        return trivia.question.toLowerCase()
        .indexOf(this.currentTerm.toLowerCase()) > -1;
      })
    },
    currentlyVisibleTrivias() {
        let bottomLimit = (this.currentPage - 1) * 5;
        let topLimit = bottomLimit + 5;

        return this.filteredTrivias.filter((trivia, index) => {
          return index >= bottomLimit && index < topLimit;
           })
    },
    numberOfPages() {
      return Math.ceil(this.trivias.length / 5);
    },
    triviaAnswer() {
      return this.answer;
    }
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
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
    gotAnswer(id) {
      let trivias = this.trivias.filter(trivia => {
        return trivia.id === id;
      });

      this.answer = trivias[0].answer;
    },
    onSearchTerm(term) {
      this.currentTerm = term;
    }
  },
  created() {
    this.fetchTrivias();
    this.fetchTriviaCategory();
  }
};
</script>

<style>
</style>



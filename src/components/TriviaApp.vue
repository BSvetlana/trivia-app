<template>
    <div>
        <b-list-group>

            <b-list-group-item v-for="trivia in trivias" :key="trivia.id">
                {{trivia.question}}
                    <b-button type="submit"
                         
                        @click="gotAnswer(trivia.id)"
                        style="float: right"
                        v-b-modal.modal1>
                        Answer
                    </b-button>

            </b-list-group-item>

        </b-list-group>

        <b-modal id="modal1" title="Answer">
            <p class="my-4">{{ triviaAnswer }}</p>
        </b-modal>

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
    triviaAnswer() {
      return this.answer;
    }
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
    gotAnswer(id) {
      let trivias = this.trivias.filter(trivia => {
        return trivia.id === id;
      });

      this.answer = trivias[0].answer;
    }
  },
  created() {
    this.fetchTrivias();
  }
};
</script>

<style>
</style>



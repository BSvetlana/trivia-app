import {
  TriviaService
} from "../services/TriviaService";

export const TriviaModule = {
  state: {
    trivias: [],
    triviaCategories: []
  },
  getters: {
    getTrivias(state) {
      return state.trivias;
    },
    getTriviaCategories(state) {
      return state.triviaCategories;
    }
  },
  mutations: {
    setTrivias(state, trivias) {
      state.trivias = trivias;
    },
    setTriviaCategories(state, triviaCategories) {
      state.triviaCategories = triviaCategories;
    }
  },
  actions: {
    // fetchTrivias(store) {
    //   TriviaService.getRandomTrivias().then(({
    //     data
    //   }) => {
    //     store.commit("setTrivias", data);
    //   });
    // },

       async fetchTrivias(store, category) {
         const { data } = await TriviaService.getRandomTrivias(category);
          store.commit('setTrivias',data);
       },
       async fetchTriviaCategory(store)  {
         const { data } = await TriviaService.getTriviaCategories();
         store.commit('setTriviaCategories',data)
       }

    }
  }

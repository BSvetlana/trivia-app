import {
  TriviaService
} from "../services/TriviaService";
  

export const TriviaModule = {
  state: {
    trivias: [],
    triviaCategories: [],
    searchTerm: ''
  },
  getters: {
    getTrivias(state) {
      return state.trivias;
    },
    getTriviaCategories(state) {
      return state.triviaCategories;
    },
    getSearchTerm(state) {
      return state.searchTerm
    }
  },
  mutations: {
    setTrivias(state, trivias) {
      state.trivias = trivias;
    },
    setTriviaCategories(state, triviaCategories) {
      state.triviaCategories = triviaCategories;
    },
    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm
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

import { ChuckService } from "../services/ChuckService";

export const ChuckModule = { 
    state: { 
        randomJoke: "", 
        jokeCategory: "" 
        }, 
        getters: { getRandomJoke(state) {
             return state.randomJoke;
           } },
            mutations: { setRandomJoke(state, joke) {
             state.randomJoke = joke;
           }, 
           setJokeCategory(state, jokeCategory){
               state.jokeCategory = jokeCategory;
           } }, 
           actions: { 
               fatchRandomJoke(store, next) {
                   ChuckService.getRandomJoke(store.state.jokeCategory).then(joke => {
               store.commit("setRandomJoke", joke);
               next();
             });
           } } };
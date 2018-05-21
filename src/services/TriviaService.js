import Axios from 'axios'

class TriviaService {
    constructor() {
        this.client = new Axios.create({
            baseURL: 'http://jservice.io/api'
        })
    }

    getRandomTrivias(triviaCategoryId, term = '') {
        return this.client.get('/random', {
            params: {
                count: 30,
                category: triviaCategoryId,
                term
            }
        })
    }

    getTriviaCategories(numberOfCategory = 10) {
        return this.client.get('/categories', {
            params: {
                count: numberOfCategory
            }
        })
    }
}

const triviaService = new TriviaService()

export {
    triviaService as TriviaService
}
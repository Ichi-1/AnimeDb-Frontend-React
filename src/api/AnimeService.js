import axios from "axios";

const URL = 'https://anidb-api.herokuapp.com/api/v1/animes/'

export default class AnimeSerivce {

    static async fetchSearch(query, page=1) {
        const response = await axios.get(URL, {
            params: {
                search: query,
                page: page
            }
        })
        return response;
    }

    static async getList() {
        const response = await axios.get(URL)
        return response
    }

}
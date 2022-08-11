import axios from "axios";

export default class AnimeSerivce {

    static async fetchSearch(query, page=1) {
        const response = await axios.get("https://anidb-api.herokuapp.com/api/v1/animes/", {
            params: {
                search: query,
                page: page
            }
        })
        return response;
    }

}
export default class AnimeSerivce {
    static async fullTextSearch(query) {
        const URL = `https://anidb-api.herokuapp.com/api/v1/animes/?search=`;
        const searchQueryEncoded = encodeURI(URL+query)
        
        const response = await fetch(searchQueryEncoded, {
                method: 'GET',
                headers: {
                    'accept':'application/json'
                }
            }
        )
        return response
        
    }


    // static async sortBy() {

    // }
    
}
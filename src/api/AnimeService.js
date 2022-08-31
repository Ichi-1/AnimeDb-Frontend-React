import axios from "axios";

const URL = 'https://anidb-api.herokuapp.com/api/v1/anime'

export default class AnimeSerivce {

    static async getByQuery(query, page=1) {
        const response = await axios.get(URL, {
            params: {
                search: query,
                page: page
            }
        })
        return response;
    }

    static async getList(page=1) {
        const response = await axios.get(URL, {
            params: {
                page: page
            }
        })
        return response
    }


    static async getByID(id) {
        const response = await axios.get(`${URL}/${id}`)
        return response
    }

    
    static async postComment(anime_id, user_id, body, accessToken) {
        
        const response = await fetch(`${URL}/${anime_id}/comments/`, {
            method: "POST",
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "author": user_id,
                "body": body,
            })
        })
        return response
    }

    static async getComments(anime_id) {
        const response = await fetch(`${URL}/${anime_id}/comments/`, {
            method: "GET",
            headers: {
                'accept': 'application/json' 
            }
        }).then(res => res.json())
        
        return response
        
    }
}
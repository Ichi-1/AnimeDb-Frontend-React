import axios from "axios";

const URL = 'https://anidb-api.herokuapp.com/api/v1/users/'

export default class UserService {
    static async getList() {
        const response = axios.get(URL)
        return response
    };

    static async getByID() {

    }


    
}
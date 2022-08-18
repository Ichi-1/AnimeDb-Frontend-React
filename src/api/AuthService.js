const API_AUTH_URL = 'https://anidb-api.herokuapp.com/api/v1/auth'
const API_OAUTH2_URL = 'https://anidb-api.herokuapp.com/api/v1/oauth2'

export default class AuthService {

    static async userLogin(nickname, password) {
        const response =  await fetch(`${API_AUTH_URL}/jwt/create/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                "nickname": nickname,
                "password": password,
            })
        })
        return response
    }
    
    static async verifyToken(token) {
        const response = await fetch(`${API_AUTH_URL}/jwt/verify/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                "token": token
            })
        })
        return response
    }

    static async updateAccessToken(refreshToken) {
        const response = await fetch(`${API_AUTH_URL}/jwt/refresh/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                "refresh": refreshToken
            })

        })
        return response
    }

    static async userRegistration(nickname, email, password) {
        const response = await fetch(`${API_AUTH_URL}/sign-up/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                "nickname": nickname,
                "email": email,
                "password": password,
            })
        })
        return response
    }


    static async googleAuth(id_token) {
        const response = await fetch(`${API_OAUTH2_URL}/google/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id_token": id_token
            })
           
        })
        return response
    }   
    

    static async githubAuth(code) {
    
        const response = await fetch(`http://localhost:8000/api/v1/oauth2/github/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "code": code
            })
        })
        

        return response
    }
}   


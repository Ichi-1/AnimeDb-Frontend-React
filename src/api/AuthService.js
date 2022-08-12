export default class AuthService {
    static async userLogin(nickname, password) {
        const response =  await fetch('https://anidb-api.herokuapp.com/api/v1/auth/jwt/create/', {
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
        const response = await fetch('https://anidb-api.herokuapp.com/api/v1/auth/jwt/verify/', {
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
        const response = await fetch('https://anidb-api.herokuapp.com/api/v1/auth/jwt/refresh/', {
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
        const response = await fetch('https://anidb-api.herokuapp.com/api/v1/auth/sign-up/', {
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
        const response = await fetch('https://anidb-api.herokuapp.com/api/v1/oauth2/google/', {
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
       
}   


export default class AuthService {
    static async fetchLogin(nickname, password) {
        const response =  await fetch('http://127.0.0.1:8000/api/v1/auth/jwt/create/', {
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

    static async fetchRegistration(nickname, email, password) {
        const response = await fetch('http://localhost:8000/api/v1/auth/sign-up/', {
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
}   


import axios from "axios";

const URL = 'https://anidb-api.herokuapp.com/api/v1/users'

export default class UserService {
    static async getList() {
        const response = axios.get(URL)
        return response
    };

    static async getAuthUser(id, accessToken) {
        const response = fetch(`${URL}/${id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${accessToken}`
            }
        })
        return response

    }

    static async updateProfile(id, data, accessToken) {
        let form_data = new FormData();

        if (data.avatar) {
            form_data.append(
                "avatar", 
                data.avatar,
                data.avatar.name
            );
        }

        if (data.birthdate) {
            form_data.append("birthdate", data.birthdate)
        }

        if (data.gender) {
            form_data.append("gender", data.gender)
        }

        if (data.about) {
            form_data.append("about", data.about)
        }


        const response = fetch(`${URL}/${id}/`, {
            method: 'PATCH',
            headers: {
                'Authorization': `JWT ${accessToken}`
            },
            body: form_data
        })
        return response
    }


    static async setPassword(newPassword, currentPassword, accessToken) {
        const response = fetch(`${URL}/set-password/`, {
            method: 'POST',
            headers: {
                'Authorization': `JWT ${accessToken}`
            },
            body: {
                'new_password': newPassword,
                'current_password': currentPassword
            }
        })
        return response
    }


    static async setLogin(newNickname, currentPassword, accessToken) {
        const response = fetch(`${URL}/set-nickname/`, {
            method: 'POST',
            headers: {
                'Authorization': `JWT ${accessToken}`
            },
            body: {
                'new_nickname': newNickname,
                'current_password': currentPassword
            }
        })
        return response
    }
}
import AuthService from '../services/AuthService';


export const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nickname = data.get('nickname')
    const password = data.get('password')
    const email = data.get('email')

    const request = await AuthService.fetchRegistration(
        nickname, email, password
    )
    const response= await request.json()
    

    if (request.status !== 201) {
        console.log('ERROR', request.status)

        for (let field in response) {
            let error = response[field]
            console.log(`${field}: ${error.toString()}`)
        }
    } else {
        console.log('ok')
    }

};


export const handleResetPasswordSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')

}
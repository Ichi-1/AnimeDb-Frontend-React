import AuthService from 'api/AuthService';

export const signUpSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nickname = data.get('nickname')
    const password = data.get('password')
    const email = data.get('email')

    const request = await AuthService.userRegistration(
        nickname, email, password
    )
    const response= await request.json()
    

    if (request.status !== 201) {
        console.log('ERROR', request.status)
        for (let field in response) {
            let error = response[field]
            console.log(`${field}: ${error.toString()}`)
        }
        return ['danger', 'Sign Up is Failed']
    } 
    return ['success', 'Activation link was sended']
};


export const handleResetPasswordSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')

}
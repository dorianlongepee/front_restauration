import $axios from 'axios'

const API_URL = 'http://localhost:3000/auth/';

export class UsersApi {

    static async login(user){
        try {
            return (await $axios
                .post(
                    API_URL + 'login',
                    {
                        mail: user.email,
                        password: user.password
                    }
                ).then(response => {
                    if(response.data){
                        localStorage.setItem('user', JSON.stringify(response.data));
                    }

                    return response.data
                })
            )
        } catch (error) {
            console.log(error)
        }
    }

    static async logout(){
        try {
            localStorage.removeItem('user');
        } catch (error) {
            console.log(error);
        }
    }

    static signup(user){
        return $axios
                .post(
                    API_URL + 'signup',
                    {
                        mail: user.email,
                        password: user.password,
                        prenom: user.prenom,
                        nom: user.nom,
                        admin: user.admin
                    }
                )
            .then(function(response){
                return response
            })
            .catch(function (error){
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response)
                    return error.response
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            })
    }
}
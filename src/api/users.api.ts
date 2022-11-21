import $axios from 'axios'

export class UsersApi {

    static API_URL: string = "http://localhost:3000/auth/";

    static async login(user){
        try {
            return (await $axios
                .post(
                    this.API_URL + 'login',
                    {
                        mail: user.mail,
                        password: user.password
                    }
                ).then(response => {
                    if(response.data.accessToken){
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

    static async signup(user){
        try {
            return (await $axios
                .post(
                    this.API_URL + 'signup',
                    {
                        mail: user.mail,
                        password: user.password
                    }
                )
            )
        } catch (error) {
            console.log(error);
        }
    }
}
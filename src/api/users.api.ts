import $axios from 'axios'

export class PlatsApi {

    private static API_URL: string = "http://localhost:3000/auth/";

    static async login(user){
        try {
            return (await $axios
                .post(
                    this.API_URL + 'login',
                    {
                        mail: user.mail,
                        password: user.password
                    }
                )
            )
        } catch (error) {
            console.log(error)
        }
    }

    static async logout(){

    }

    static async signup(){

    }
}
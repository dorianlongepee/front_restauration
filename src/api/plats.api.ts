import $axios from 'axios'

export class PlatsApi {
    static async fetchPlats(){
        try {
            return (await $axios.get("http://localhost:3000/plats")).data
        } catch (error) {
            console.log(error)
        }
    }
}
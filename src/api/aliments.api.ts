import $axios from 'axios'

export class AlimentsApi {
    static async fetchAliments() {
        try {
            return (await $axios.get("http://localhost:3000/aliments")).data
        } catch (error) {
            console.log(error)
        }
    }
}
import $axios from 'axios'

export class AlimentsApi {
    static async fetchAliment(Aliment_id){
        try {
            return (await $axios.get("http://localhost:3000/aliments/" + Aliment_id))
        }  catch(error){
            console.log(error)
        }
    }
}
import {Aliment} from "./Aliment.type";

export class Plat {
    _id: string
    nom: string
    type: string
    aliments: Aliment[]
    prix: number
}
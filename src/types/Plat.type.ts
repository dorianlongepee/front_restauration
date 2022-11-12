import {TAliment} from "./Aliment.type";

export class TPlat {
    _id: string
    nom: string
    type: string
    aliments: TAliment[]
    prix: number
}
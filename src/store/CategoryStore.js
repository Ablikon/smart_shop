import { makeAutoObservable } from "mobx";

export default class CategoryStore {
    constructor() {
        this._types = [
            {id: 1, name: "Mobile and Laptops"}
        ]
        this._brands = [
            {}
        ]
        this._products = [
            {}
        ]
    }

}
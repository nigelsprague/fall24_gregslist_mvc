import { AppState } from "../AppState.js";
import { House } from "../models/Houses.js";

class HousesService {
  createHouse(houseFormData) {
    const houses = AppState.houses
    const newHouse = new House(houseFormData)
    houses.push(newHouse)
  }
}

export const housesService = new HousesService()
import { AppState } from "../AppState.js";
import { House } from "../models/Houses.js";
import { loadState, saveState } from "../utils/Store.js";

class HousesService {
  createHouse(houseFormData) {
    const houses = AppState.houses
    const newHouse = new House(houseFormData)
    houses.push(newHouse)

    this.saveHouses()
  }

  saveHouses() {
    saveState('houses', AppState.houses)
  }

  loadHouses() {
    const housesFromLocalStorage = loadState('houses', [House])
    AppState.houses = housesFromLocalStorage
  }
}

export const housesService = new HousesService()
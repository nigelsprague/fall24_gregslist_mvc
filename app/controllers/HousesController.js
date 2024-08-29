import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class HousesController {
  constructor() {
    console.log('Houses Controller loaded')
    AppState.on('houses', this.drawHouses)

    this.drawHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let houseHTMLContent = ''
    houses.forEach(house => houseHTMLContent += house.houseHTMLTemplate)
    const housesElem = document.getElementById('house-listings')
    housesElem.innerHTML = houseHTMLContent
  }

  createHouse() {
    event.preventDefault()
    console.log('creating car listing')
    const form = event.target
    const houseFormData = getFormData(form)
    housesService.createHouse(houseFormData)
  }
}
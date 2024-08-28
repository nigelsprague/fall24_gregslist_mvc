import { generateId } from "../utils/GenerateId.js";

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get houseHTMLTemplate() {
    return `
    <div class="col-md-6">
          <section class="row bg-light shadow">
            <div class="p-0">
              <img class="img-fluid house-img"
                src="${this.imgUrl}" alt="House listing">
            </div>
            <div class="">
              <div class="p-2">
                <h2>$${this.priceAsCurrency}</h2>
                <p class="fs-5">${this.bedrooms} | ${this.bathrooms} | ${this.sqft} | ${this.year}</p>
                <p>${this.description}</p>
              </div>
            </div>
          </section>
        </div>`
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat().format(this.price)
  }
}
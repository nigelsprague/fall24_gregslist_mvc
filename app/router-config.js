import { HomeController } from "./controllers/HomeController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HousesController } from "./controllers/HousesController.js";
import { JobsController } from "./controllers/JobsController.js";
import { ExamplesController } from "./controllers/ExamplesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/about',
    controllers: [ExamplesController],
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/houses',
    controllers: [HousesController],
    view: 'app/views/HousesView.html'
  },
  {
    path: '#/jobs',
    controllers: [JobsController],
    view: 'app/views/JobsView.html'
  }
])
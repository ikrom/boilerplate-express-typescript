import { Router } from 'express';
import RolesController from '@controllers/roles.controller';
import { Routes } from '@interfaces/routes.interface';

class IndexRoute implements Routes {
  public path = '/roles';
  public router = Router();
  public RolesController = new RolesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.RolesController.getRoles);
  }
}

export default IndexRoute;

import { NextFunction, Request, Response } from 'express';
// import { RoleDto } from '@dtos/roles.dto';
import { Role } from '@interfaces/roles.interface';
import roleService from '@services/role.service';

class RolesController {
  public roleService = new roleService();

  public getRoles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const roles: Role[] = await this.roleService.findAllRole();
      res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  };
}

export default RolesController;

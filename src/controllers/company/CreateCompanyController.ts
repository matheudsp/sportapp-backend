import {Request, Response} from 'express'
import { CreateCompanyService } from '../../services/company/CreateCompanyService';

class CreateCompanyController{
  async handle(req: Request, res: Response){
    const { name, email, address, phone } = req.body;

    const createCompanyService = new CreateCompanyService();

    const company = await createCompanyService.execute({
      name,
      email,
      address,
      phone
    });

    return res.json(company)
  }
}

export { CreateCompanyController }
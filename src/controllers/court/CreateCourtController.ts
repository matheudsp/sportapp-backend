import {Request, Response} from 'express'
import { CreateCourtService } from '../../services/court/CreateCourtService';

class CreateCourtController{
  async handle(req: Request, res: Response){
    const { name, type, price_per_hour, available, companyId } = req.body;

    const createCompanyService = new CreateCourtService();

    const company = await createCompanyService.execute({
      name,
      type,
      price_per_hour,
      available,
      companyId
    });

    return res.json(company)
  }
}

export { CreateCourtController }
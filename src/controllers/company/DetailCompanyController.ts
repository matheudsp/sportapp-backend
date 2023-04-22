import {Request, Response} from 'express'
import { DetailCompanyService } from '../../services/company/DetailCompanyService'

class DetailCompanyController{
  async handle(req: Request, res: Response){

    const company_id = req.body;

    const detailCompanyService = new DetailCompanyService();

    const company = await detailCompanyService.execute(company_id);

    return res.json(company);

  }
}

export { DetailCompanyController  }
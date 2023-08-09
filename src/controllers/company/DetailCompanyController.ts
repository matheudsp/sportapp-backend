import {Request, Response} from 'express'
import { DetailCompanyService } from '../../services/company/DetailCompanyService'

class DetailCompanyController{
  async handle(req: Request, res: Response){

    const companyId = req.body;

    const detailCompanyService = new DetailCompanyService();

    const company = await detailCompanyService.execute(companyId);

    return res.json(company);

  }
}

export { DetailCompanyController  }
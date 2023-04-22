import { Request, Response } from "express";
import { ListCompanyService } from "../../services/company/ListCompanyService";


class ListCompanyController{

    async handle(req:Request, res: Response){

        const listCompanyService = new ListCompanyService();

        const court = await listCompanyService.execute();

        return res.json(court);
    }
}

export { ListCompanyController }
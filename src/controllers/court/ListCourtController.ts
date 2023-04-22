import { Request, Response } from "express";
import { ListCourtService } from "../../services/court/ListCourtService";


class ListCourtController{

    async handle(req:Request, res: Response){
        const companyId = req.body;

        const listCourtService = new ListCourtService();

        const court = await listCourtService.execute(
            companyId
        );

        return res.json(court);
    }
}

export { ListCourtController }
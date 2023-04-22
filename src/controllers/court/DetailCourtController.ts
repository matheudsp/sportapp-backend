import {Request, Response} from 'express'
import { DetailCourtService } from '../../services/court/DetailCourtService';

class DetailCourtController{
  async handle(req: Request, res: Response){

    const courtId = req.body;

    const detailCourtService = new DetailCourtService();

    const court = await detailCourtService.execute(courtId);

    return res.json(court);

  }
}

export { DetailCourtController  }
import {Request, Response} from 'express'
import { CreateBookingService } from '../../services/booking/CreateBookingService';

class CreateBookingController{
  async handle(req: Request, res: Response){
    const { userId, courtId, date, paid } = req.body;

    const createBookingService = new CreateBookingService();

    const booking = await createBookingService.execute({
      userId,courtId, date, paid
    });

    return res.json(booking)
  }
}

export { CreateBookingController }
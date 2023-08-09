import prismaClient from "../../prisma";

interface PostRequest {
    userId: string;
    courtId: number;
    date: Date;
    paid: boolean;
}

class CreateBookingService {
    async execute({ userId, courtId, date, paid }: PostRequest) {

        // verificar os campos
        if (!userId || !courtId || !date || !paid) {
            throw new Error("Schedule invalid")
        }


        // const bookingAlreadyExists = await prismaClient.booking.findFirst({
        //     where: {
        //         data: date
        //     }
        // })

        // if (bookingAlreadyExists) {
        //     throw new Error("Booking already exists")
        // }




        const booking = await prismaClient.booking.create({
            data: {
                userId: userId,
                courtId: courtId,
                date: date,
                paid: paid,

            }
        })


        return booking;
    }
}

export { CreateBookingService }
import prismaClient from "../../prisma";

interface PostRequest {
  courtId:number
}

class DetailCourtService{
  async execute({courtId}: PostRequest){
    
    if(!courtId){
      throw new Error("Court invalid")
    }

    const findById = await prismaClient.court.findMany({
      where:{
        id: courtId
      },
      select:{
        id:true,
        name: true,
        type: true,
        price_per_hour:true,
        available:true,
        companyId: true
      }
    })

    return findById;
  }
}

export { DetailCourtService }
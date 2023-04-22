import prismaClient from '../../prisma'
// import { hash } from 'bcryptjs'

interface CourtRequest{
  name: string;
  type:string;
  price_per_hour: number;
  available: boolean;
  companyId: number
}

class CreateCourtService{
  async execute({ name, type, price_per_hour, available, companyId  }: CourtRequest){

    // verificar se ele enviou um email
    if(name === "" ){
      throw new Error("Name invalid")
    }

    const companyExist = await prismaClient.company.findFirst({
      where:{
        id: companyId
      }
    })

    if(!companyExist){
      throw new Error("Company invalid")
    }


    const court = await prismaClient.court.create({
      data:{
        name: name,
        type: type,
        price_per_hour:price_per_hour,
        available: available,
        companyId: companyId
        
      },
      select:{
        id: true,
        name: true,       
        type: true,
        price_per_hour:true,
        available: true,
        companyId: true,
      }
    })


    return court;
  }
}

export { CreateCourtService }
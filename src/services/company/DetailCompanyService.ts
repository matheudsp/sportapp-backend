import prismaClient from "../../prisma";
interface PostRequest {
  companyId: number
}
class DetailCompanyService{
  async execute({companyId}: PostRequest){

    
    if(!companyId){
      throw new Error("Company invalid")
    }

    const findById = await prismaClient.company.findFirst({
      where:{
        id: companyId
      },
      select:{
        id:true,
        name: true,
        email: true,
        address:true,
        phone:true,
      }
    })

    return findById;
  }
}

export { DetailCompanyService }
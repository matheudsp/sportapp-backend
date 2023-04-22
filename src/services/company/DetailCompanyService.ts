import prismaClient from "../../prisma";
interface PostRequest {
  company_id: number
}
class DetailCompanyService{
  async execute({company_id}: PostRequest){

    const findById = await prismaClient.company.findMany({
      where:{
        id: company_id
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
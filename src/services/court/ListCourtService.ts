import prismaClient from "../../prisma";

interface PostRequest{
    companyId: number
    
}

class ListCourtService{
    async execute({companyId}: PostRequest){

        if(!companyId){
            throw new Error("Company invalid")
          }

        const findAll = await prismaClient.court.findMany({
            
            where:{
                companyId:companyId
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

        return findAll;
    }
}

export { ListCourtService}
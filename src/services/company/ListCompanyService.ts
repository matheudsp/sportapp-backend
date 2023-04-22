import prismaClient from "../../prisma";


class ListCompanyService{
    async execute(){

        const findAll = await prismaClient.company.findMany({
            
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

export { ListCompanyService}
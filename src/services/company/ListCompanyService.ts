import prismaClient from "../../prisma";


class ListCompanyService {
    async execute() {

        const findAll = await prismaClient.company.findMany({

            select: {
                id: true,
                name: true,
                email: true,
                address: true,
                phone: true,
            }

        })

        return findAll;
    }
}

export { ListCompanyService }
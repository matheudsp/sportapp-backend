import prismaClient from '../../prisma'
// import { hash } from 'bcryptjs'

interface CompanyRequest{
  name: string;
  email: string;
  address: string;
  // password: string
  phone: string;
}

class CreateCompanyService{
  async execute({ name, address, phone, email }: CompanyRequest){

    // verificar se ele enviou um email
    if(!email || !name || !address || !phone ){
      throw new Error("Information incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const companyAlreadyExists = await prismaClient.company.findFirst({
      where:{
        email: email
      }
    })

    if(companyAlreadyExists){
      throw new Error("Company already exists")
    }

    // const passwordHash = await hash(password, 8)


    const company = await prismaClient.company.create({
      data:{
        name: name,
        address:address,
        phone: phone,
        email: email,
        
      },
      select:{
        id: true,
        name: true,       
        email: true,
      }
    })


    return company;
  }
}

export { CreateCompanyService }
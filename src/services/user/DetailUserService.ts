import prismaClient from "../../prisma";

class DetailUserService{
  async execute(user_id: string){
    if(!user_id){
      throw new Error('User invalid')
    }
    const user = await prismaClient.user.findFirst({
      where:{
        id: user_id
      },
      select:{
        id: true,
        name: true,
        email: true,
      }
    })

    return user;
  }
}

export { DetailUserService }
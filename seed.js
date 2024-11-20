const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



async function seed() {
        const createMany = await prisma.recipies.create({
            data: {
                name: "",
                image: "",
                ingredients: {
                    create: {
                        name: "name",
                        tags: "tag"
                    }
                },
                steps: {
                    create: {
                        name: "name",
                        number: 0
                    }
                },
                methods: {
                    create: {
                        name: ""
                    }
                },
                likes: 0
            },
        })
        console.log(createMany)
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
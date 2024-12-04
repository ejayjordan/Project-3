const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



async function seed() {
        const createMany = await prisma.recipies.create({
            data: {
                name: "test recipie",
                image: "",
                ingredients: {
                    create: [
                        {name: "ingredient test", tags: "test"}
                    ]
                },
                steps: {
                    create: [
                        {name: "step test", number: 1}
                    ]
                },
                methods: {
                    create: [
                        {name: "method test"}
                    ]
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
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



async function seed() {
        const createMany = await prisma.recipies.create({
            data: {
                name: "test recipie 4",
                image: "",
                ingredients: {
                    create: [
                        {name: "pepperoni"}
                    ]
                },
                steps: {
                    create: [
                        {name: "{method} {ingredient} at the wall"}
                    ]
                },
                methods: {
                    create: [
                        {name: "throw"}
                    ]
                },
                tags: {
                    create: [
                        {name: "meat"}
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
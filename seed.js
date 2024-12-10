const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



async function seed() {
        const createMany = await prisma.recipies.create({
            data: {
                name: "test recipie 4",
                image: "",
                ingredients: {
                    create: [
                        {name: "pepperoni"}, {name: "brocoli"}, {name: "kitkat"}
                    ]
                },
                steps: {
                    create: [
                        {name: "{method} {ingredient} at the wall"}, {name: "{method} the {ingredient} until browned"}, {name: "{ingredient} should be {method} until finely diced"}
                    ]
                },
                methods: {
                    create: [
                        {name: "throw"}, {name: "broil"}, {name: "chop"}
                    ]
                },
                tags: {
                    create: [
                        {name: "meat"}, {name: "vegetable"}, {name: "candy"}
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
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const seed = async () => {
        const createMany = await prisma.recipie.createMany({
            data: [
            { ingredient: 'placeolder', method: 'placeholder', steps: 'placeholder' },
            ],
            skipDuplicates: true
        })
}

seed()
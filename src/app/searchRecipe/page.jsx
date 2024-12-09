const searchRecipies = await prisma.user.findMany({
    take: 5,
    where: {
            Steps:{ not: null },
            Tags:{ not: null }
        }
  })
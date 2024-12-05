import { PrismaClient } from "@prisma/client"
import React from "react"


export default async function Page() {
    const prisma = new PrismaClient()

    const tags = await prisma.tags.findMany()
    const tagList = tags.map((tags, index) =>
        <li key={index}>
            {tags.name}
        </li>
    )

    return (
        <li>
        {tagList}
        </li>
    )

}
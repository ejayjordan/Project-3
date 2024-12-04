'use client'
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/navigation';
const prisma = new PrismaClient();

export default function Extract() {
    const router = useRouter()
return (
    <><button onClick={() => router.push('/search/searchRecipe')}>Search Recipies</button>
    <button onClick={() => router.push('/generateRecipe')}>Generate Recipies</button>
    <button onClick={() => router.push('/createRecipe')}>Create Recipies</button></>
);
}

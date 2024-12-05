import { prisma } from '@/lib/prisma';

const Home = async () => {
  const recipies = await prisma.recipies.findMany();

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <h2>Home</h2>

      <ul className="flex flex-col gap-y-2">
        {recipies.map((recipies) => (
          <li key={recipies.id}>{recipies.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
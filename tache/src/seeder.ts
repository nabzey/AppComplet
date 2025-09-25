import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Exemple de seed pour la table Tache
  await prisma.tache.createMany({
    data: [
     
    ],
  });
  console.log('Seed terminé !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

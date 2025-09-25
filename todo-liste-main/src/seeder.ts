// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   // Exemple de seed pour la table Tache
//   await prisma.tache.createMany({
//     data: [
//       {
//         titre: 'Première tâche',
//         description: 'Description de la première tâche',
//         etattat: 'EN_COURS', // Remplace par la valeur exacte de ton enum
//         dateDebut: new Date('2025-09-25'),
//         dateFin: new Date('2025-09-30'),
//       },
//       {
//         titre: 'Deuxième tâche',
//         description: 'Description de la deuxième tâche',
//         Etat: 'TERMINE', // Remplace par la valeur exacte de ton enum
//         dateDebut: new Date('2025-09-20'),
//         dateFin: new Date('2025-09-22'),
//       },
//     ],
//   });
//   console.log('Seed terminé !');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(() => {
//     prisma.$disconnect();
//   });

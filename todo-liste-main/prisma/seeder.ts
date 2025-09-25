// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   // Exemple de seed pour la table Tache
//   await prisma.tache.createMany({
//     data: [
//       {
//         titre: 'Première tâche',
//         description: 'Description de la première tâche',
//         statut: 'EN_COURS',
//         dateDebut: new Date('2025-09-25'),
//         dateFin: new Date('2025-09-30'),
//       },
//       {
//         titre: 'Deuxième tâche',
//         description: 'Description de la deuxième tâche',
//         statut: 'TERMINÉ',
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

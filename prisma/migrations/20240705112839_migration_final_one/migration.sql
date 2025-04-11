/*
  Warnings:

  - You are about to drop the column `vagueVague_id` on the `Entreprise` table. All the data in the column will be lost.
  - Added the required column `entreprise_id` to the `Type_aliment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entreprise_id` to the `Type_medicament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entreprise" DROP COLUMN "vagueVague_id";

-- AlterTable
ALTER TABLE "Type_aliment" ADD COLUMN     "entreprise_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Type_medicament" ADD COLUMN     "entreprise_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Type_medicament" ADD CONSTRAINT "Type_medicament_entreprise_id_fkey" FOREIGN KEY ("entreprise_id") REFERENCES "Entreprise"("Entreprise_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Type_aliment" ADD CONSTRAINT "Type_aliment_entreprise_id_fkey" FOREIGN KEY ("entreprise_id") REFERENCES "Entreprise"("Entreprise_id") ON DELETE CASCADE ON UPDATE CASCADE;

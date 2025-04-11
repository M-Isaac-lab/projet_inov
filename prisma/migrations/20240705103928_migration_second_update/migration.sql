/*
  Warnings:

  - Added the required column `entreprise_id` to the `Environnement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Environnement" ADD COLUMN     "entreprise_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Environnement" ADD CONSTRAINT "Environnement_entreprise_id_fkey" FOREIGN KEY ("entreprise_id") REFERENCES "Entreprise"("Entreprise_id") ON DELETE CASCADE ON UPDATE CASCADE;

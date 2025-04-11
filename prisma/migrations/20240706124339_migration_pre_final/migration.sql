/*
  Warnings:

  - The primary key for the `Environnement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Environnemt_id` on the `Environnement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Environnement" DROP CONSTRAINT "Environnement_pkey",
DROP COLUMN "Environnemt_id",
ADD COLUMN     "Environnement_id" SERIAL NOT NULL,
ADD CONSTRAINT "Environnement_pkey" PRIMARY KEY ("Environnement_id");

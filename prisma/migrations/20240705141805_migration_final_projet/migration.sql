/*
  Warnings:

  - The primary key for the `Fermier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Fermer_id` on the `Fermier` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Fermier" DROP CONSTRAINT "Fermier_pkey",
DROP COLUMN "Fermer_id",
ADD COLUMN     "Fermier_id" SERIAL NOT NULL,
ADD CONSTRAINT "Fermier_pkey" PRIMARY KEY ("Fermier_id");

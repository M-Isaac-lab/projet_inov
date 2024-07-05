/*
  Warnings:

  - Added the required column `vague_id` to the `Entreprise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entreprise" ADD COLUMN     "vagueVague_id" INTEGER,
ADD COLUMN     "vague_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Entreprise" ADD CONSTRAINT "Entreprise_vague_id_fkey" FOREIGN KEY ("vague_id") REFERENCES "Vague"("Vague_id") ON DELETE CASCADE ON UPDATE CASCADE;

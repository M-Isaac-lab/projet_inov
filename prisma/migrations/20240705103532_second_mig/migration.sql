/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Fermier" (
    "fermer_id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "adresse" VARCHAR(150) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "role" TEXT NOT NULL,
    "entreprise_id" INTEGER NOT NULL,

    CONSTRAINT "Fermier_pkey" PRIMARY KEY ("fermer_id")
);

-- CreateTable
CREATE TABLE "Entreprise" (
    "Entreprise_id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,

    CONSTRAINT "Entreprise_pkey" PRIMARY KEY ("Entreprise_id")
);

-- CreateTable
CREATE TABLE "Vague" (
    "Vague_id" SERIAL NOT NULL,
    "Date_debut" DATE NOT NULL,
    "Quantite_entree" INTEGER NOT NULL,
    "Quantite_presente" INTEGER NOT NULL,
    "N_jour" INTEGER NOT NULL,

    CONSTRAINT "Vague_pkey" PRIMARY KEY ("Vague_id")
);

-- CreateTable
CREATE TABLE "Type_vollaile" (
    "Type_vollaile_id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "vague_id" INTEGER NOT NULL,

    CONSTRAINT "Type_vollaile_pkey" PRIMARY KEY ("Type_vollaile_id")
);

-- CreateTable
CREATE TABLE "Type_medicament" (
    "Type_medicament_id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "quantite" INTEGER NOT NULL,
    "type_vollaile_id" INTEGER NOT NULL,

    CONSTRAINT "Type_medicament_pkey" PRIMARY KEY ("Type_medicament_id")
);

-- CreateTable
CREATE TABLE "Type_aliment" (
    "Type_aliment_id" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "quantite" INTEGER NOT NULL,
    "type_vollaile_id" INTEGER NOT NULL,

    CONSTRAINT "Type_aliment_pkey" PRIMARY KEY ("Type_aliment_id")
);

-- CreateTable
CREATE TABLE "Deces" (
    "Deces_id" SERIAL NOT NULL,
    "vague_id" INTEGER NOT NULL,
    "Nmbre_deces" INTEGER NOT NULL,
    "date_deces" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Deces_pkey" PRIMARY KEY ("Deces_id")
);

-- CreateTable
CREATE TABLE "Vente" (
    "Vente_id" SERIAL NOT NULL,
    "vague_id" INTEGER NOT NULL,
    "Nmbre_vente" INTEGER NOT NULL,
    "date_vente" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vente_pkey" PRIMARY KEY ("Vente_id")
);

-- CreateTable
CREATE TABLE "Environnement" (
    "Environnemt_id" SERIAL NOT NULL,
    "temperature_max_seuil" INTEGER NOT NULL,
    "temperature_min_seuil" INTEGER NOT NULL,
    "humidite_max_seuil" INTEGER NOT NULL,
    "humidite_min_seuil" INTEGER NOT NULL,
    "type_vollaile_id" INTEGER NOT NULL,

    CONSTRAINT "Environnement_pkey" PRIMARY KEY ("Environnemt_id")
);

-- AddForeignKey
ALTER TABLE "Fermier" ADD CONSTRAINT "Fermier_entreprise_id_fkey" FOREIGN KEY ("entreprise_id") REFERENCES "Entreprise"("Entreprise_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Type_vollaile" ADD CONSTRAINT "Type_vollaile_vague_id_fkey" FOREIGN KEY ("vague_id") REFERENCES "Vague"("Vague_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Type_medicament" ADD CONSTRAINT "Type_medicament_type_vollaile_id_fkey" FOREIGN KEY ("type_vollaile_id") REFERENCES "Type_vollaile"("Type_vollaile_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Type_aliment" ADD CONSTRAINT "Type_aliment_type_vollaile_id_fkey" FOREIGN KEY ("type_vollaile_id") REFERENCES "Type_vollaile"("Type_vollaile_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deces" ADD CONSTRAINT "Deces_vague_id_fkey" FOREIGN KEY ("vague_id") REFERENCES "Vague"("Vague_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_vague_id_fkey" FOREIGN KEY ("vague_id") REFERENCES "Vague"("Vague_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Environnement" ADD CONSTRAINT "Environnement_type_vollaile_id_fkey" FOREIGN KEY ("type_vollaile_id") REFERENCES "Type_vollaile"("Type_vollaile_id") ON DELETE CASCADE ON UPDATE CASCADE;

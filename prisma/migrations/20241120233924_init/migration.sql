/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `methods` on the `Recipies` table. All the data in the column will be lost.
  - You are about to drop the column `saved` on the `Recipies` table. All the data in the column will be lost.
  - You are about to drop the column `steps` on the `Recipies` table. All the data in the column will be lost.
  - Added the required column `image` to the `Recipies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Recipies` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Ingredient";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Steps" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Methods" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipiesToSteps" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_RecipiesToSteps_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipies" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RecipiesToSteps_B_fkey" FOREIGN KEY ("B") REFERENCES "Steps" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_IngredientsToRecipies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_IngredientsToRecipies_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredients" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_IngredientsToRecipies_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipies" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MethodsToRecipies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MethodsToRecipies_A_fkey" FOREIGN KEY ("A") REFERENCES "Methods" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MethodsToRecipies_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipies" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "likes" INTEGER NOT NULL
);
INSERT INTO "new_Recipies" ("id", "likes") SELECT "id", "likes" FROM "Recipies";
DROP TABLE "Recipies";
ALTER TABLE "new_Recipies" RENAME TO "Recipies";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_RecipiesToSteps_AB_unique" ON "_RecipiesToSteps"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipiesToSteps_B_index" ON "_RecipiesToSteps"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientsToRecipies_AB_unique" ON "_IngredientsToRecipies"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientsToRecipies_B_index" ON "_IngredientsToRecipies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MethodsToRecipies_AB_unique" ON "_MethodsToRecipies"("A", "B");

-- CreateIndex
CREATE INDEX "_MethodsToRecipies_B_index" ON "_MethodsToRecipies"("B");

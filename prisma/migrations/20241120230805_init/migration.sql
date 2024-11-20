-- CreateTable
CREATE TABLE "Recipies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "methods" TEXT NOT NULL,
    "steps" TEXT NOT NULL,
    "saved" BOOLEAN NOT NULL DEFAULT false,
    "likes" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "recipiesId" INTEGER,
    CONSTRAINT "Ingredient_recipiesId_fkey" FOREIGN KEY ("recipiesId") REFERENCES "Recipies" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

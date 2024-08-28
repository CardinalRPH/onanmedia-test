/*
  Warnings:

  - You are about to drop the column `job` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "job",
DROP COLUMN "password";

-- CreateTable
CREATE TABLE "pembaca" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "trending" BOOLEAN NOT NULL,

    CONSTRAINT "pembaca_pkey" PRIMARY KEY ("id")
);

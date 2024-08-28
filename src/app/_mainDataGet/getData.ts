import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getData = async () => {
  try {
    const pembacas = await prisma.pembaca.findMany();
    return pembacas;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getData;

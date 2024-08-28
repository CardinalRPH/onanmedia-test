import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const trendPembaca = await prisma.pembaca.findFirst({
      where: {
        trending: true,
      },
    });
    if (!trendPembaca) {
      return NextResponse.json({}, { status: 404 });
    }
    return NextResponse.json({
      data: trendPembaca,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
};

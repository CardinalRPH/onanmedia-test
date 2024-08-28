import { getAllPembaca, postPembaca } from "@/validations/pembacaValidation";
import { PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();
const pageSize = 8;

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.nextUrl);
  const pageParam = searchParams.get("page");

  const valResult = getAllPembaca.safeParse({ page: Number(pageParam) });

  if (!valResult.success) {
    return NextResponse.json(
      {
        error: valResult.error.format(),
      },
      { status: 400 }
    );
  }

  try {
    const page = pageParam ? Number(pageParam) : 1;
    const skip = (page - 1) * pageSize;

    const pembacas = await prisma.pembaca.findMany({
      skip,
      take: pageSize,
    });
    const pembacaCount = await prisma.pembaca.count();

    return NextResponse.json({
      page:
        pembacas.length > 0 ? (Number(pageParam) ? Number(pageParam) : 1) : 0,
      per_page: pageSize,
      total: pembacaCount,
      total_pages: Math.ceil(pembacaCount / pageSize),
      data: pembacas,
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

export const POST = async (requset: NextRequest) => {
  let bodyJson;
  try {
    bodyJson = await requset.json();
  } catch (error) {
    return NextResponse.json(
      {
        error: "Body is Not JSON",
      },
      { status: 400 }
    );
  }

  const valResult = postPembaca.safeParse(bodyJson);
  if (!valResult.success) {
    return NextResponse.json(
      {
        error: valResult.error.format(),
      },
      { status: 400 }
    );
  }

  try {
    if (bodyJson.trending === true) {
      const existTrending = await prisma.pembaca.findFirst({
        where: {
          trending: true,
        },
      });
      if (existTrending) {
        await prisma.pembaca.updateMany({
          where: {
            trending: true,
          },
          data: {
            trending: false,
          },
        });
      }
    }
    
    const created = await prisma.pembaca.create({
      data:bodyJson
    })

    return NextResponse.json({
      created,
      createdAt: new Date(),
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

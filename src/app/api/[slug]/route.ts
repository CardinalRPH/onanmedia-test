import { getAllResourceVal } from "@/validations/resourcesValidation";
import { PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();
const pageSize = 6;

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.nextUrl);
  const pageParam = searchParams.get("page");

  const valResult = getAllResourceVal.safeParse({ page: Number(pageParam) });

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
    const resources = await prisma.resource.findMany({
      skip,
      take: pageSize,
    });
    const resourceCount = await prisma.resource.count();

    return NextResponse.json({
      page:
        resources.length > 0 ? (Number(pageParam) ? Number(pageParam) : 1) : 0,
      per_page: pageSize,
      total: resourceCount,
      total_pages: Math.ceil(resourceCount / pageSize),
      data: resources,
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

import { getSingleResourceVal } from "@/validations/resourcesValidation";
import { PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const valResult = getSingleResourceVal.safeParse({ id: Number(id) });

  if (!valResult.success) {
    return NextResponse.json(
      {
        error: valResult.error.format(),
      },
      { status: 400 }
    );
  }
  try {
    const resource = await prisma.resource.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!resource) {
      return NextResponse.json({}, { status: 404 });
    }

    return NextResponse.json({
      data: resource,
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

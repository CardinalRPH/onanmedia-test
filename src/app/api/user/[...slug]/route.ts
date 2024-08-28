import generateId from "@/utils/idGenerator";
import { getSingleResourceVal } from "@/validations/resourcesValidation";
import { PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
  _request: NextRequest,
  { params }: { params: { slug: string[] } }
) => {
  if (params.slug.length > 1) {
    return NextResponse.json({}, { status: 404 });
  }

  const id = params.slug[0];
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
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      return NextResponse.json({}, { status: 404 });
    }

    return NextResponse.json({
      data: user,
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

export const POST = async (request: NextRequest) => {
  try {
    const bodyJson = await request.json();
    return NextResponse.json({
      ...bodyJson,
      id: generateId(),
      createdAt: new Date(),
    });
  } catch (error) {
    return NextResponse.json({
      id: generateId(),
      createdAt: new Date(),
    });
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const bodyJson = await request.json();
    return NextResponse.json({
      ...bodyJson,
      updatedAt: new Date(),
    });
  } catch (error) {
    return NextResponse.json({
      updatedAt: new Date(),
    });
  }
};

export const PATCH = async (request: NextRequest) => {
  try {
    const bodyJson = await request.json();
    return NextResponse.json({
      ...bodyJson,
      updatedAt: new Date(),
    });
  } catch (error) {
    return NextResponse.json({
      updatedAt: new Date(),
    });
  }
};

export const DELETE = () => {
  return new NextResponse(null, { status: 204 });
};

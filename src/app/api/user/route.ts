import generateId from "@/utils/idGenerator";
import { getAllUserVal } from "@/validations/usersValidation";
import { PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();
const pageSize = 6;

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.nextUrl);
  const pageParam = searchParams.get("page");

  const valResult = getAllUserVal.safeParse({ page: Number(pageParam) });

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
    const users = await prisma.user.findMany({
      skip,
      take: pageSize,
    });
    const userCount = await prisma.user.count();

    return NextResponse.json({
      page: users.length > 0 ? (Number(pageParam) ? Number(pageParam) : 1) : 0,
      per_page: pageSize,
      total: userCount,
      total_pages: Math.ceil(userCount / pageSize),
      data: users,
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


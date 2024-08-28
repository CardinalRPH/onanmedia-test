import {
  deletePembaca,
  getSinglePembaca,
  putPembaca,
} from "@/validations/pembacaValidation";
import { PrismaClient } from "@prisma/client";

import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  const valResult = getSinglePembaca.safeParse({ id: Number(id) });

  if (!valResult.success) {
    return NextResponse.json(
      {
        error: valResult.error.format(),
      },
      { status: 400 }
    );
  }

  try {
    const pembaca = await prisma.pembaca.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!pembaca) {
      return NextResponse.json({}, { status: 404 });
    }

    return NextResponse.json({
      data: pembaca,
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

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  let bodyJson;
  try {
    bodyJson = await request.json();
  } catch (error) {
    return NextResponse.json(
      {
        error: "Body is Not JSON",
      },
      { status: 400 }
    );
  }

  const valResult = putPembaca.safeParse({ id: Number(id), ...bodyJson });

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
    const updated = await prisma.pembaca.update({
      data: bodyJson,
      where: {
        id: Number(id),
      },
    });

    NextResponse.json({
      updated,
      updatedAt: new Date(),
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

export const DELETE = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const valResult = deletePembaca.safeParse({ id: Number(id) });

  if (!valResult.success) {
    return NextResponse.json(
      {
        error: valResult.error.format(),
      },
      { status: 400 }
    );
  }

  try {
    const deleted = await prisma.pembaca.delete({
      where: {
        id: Number(id),
      },
    });

    NextResponse.json({
      deleted,
      deleteddAt: new Date(),
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

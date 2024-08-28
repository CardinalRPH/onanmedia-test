import encryptToUniqueCode from "@/utils/encryptor";
import { loginVal } from "@/validations/authValidation";
import { PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  const bodyJson = await request.json();

  const valResult = loginVal.safeParse(bodyJson);

  if (!valResult.success) {
    return NextResponse.json(
      {
        error: valResult.error.format(),
      },
      { status: 400 }
    );
  }

  try {
    const { email } = bodyJson;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        {
          error: "User Not Found",
        },
        { status: 404 }
      );
    }
    const token = encryptToUniqueCode(email);
    return NextResponse.json({
      token,
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

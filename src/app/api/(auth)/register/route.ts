import encryptToUniqueCode from "@/utils/encryptor";
import { registerVal } from "@/validations/authValidation";
import { PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  const bodyJson = await request.json();

  const valResult = registerVal.safeParse(bodyJson);

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
          error: "Note: Only defined users succeed registration",
        },
        { status: 404 }
      );
    }
    const token = encryptToUniqueCode(email);
    return NextResponse.json({
      id: user.id,
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

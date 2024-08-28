import { NextResponse, type NextRequest } from "next/server";
import delayValidation from "./validations/delayValidation";

const delayinSecond = (second: number) =>
  new Promise((resolve) => setTimeout(resolve, second * 1000));
const middleware = async (request: NextRequest) => {
  const { searchParams } = new URL(request.nextUrl);
  const delayParam = searchParams.get("delay");

  const valResult = delayValidation.safeParse({ delay: Number(delayParam) });

  if (!valResult.success) {
    return NextResponse.json(
      {
        error: valResult.error.format(),
      },
      { status: 400 }
    );
  }
  await delayinSecond(Number(delayParam));
  return NextResponse.next();
};

export const config = {
  matcher: "/api/:path*",
};
export default middleware;

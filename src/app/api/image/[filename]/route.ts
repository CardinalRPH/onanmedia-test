import { existsSync, readFileSync } from "fs";
import { NextResponse, type NextRequest } from "next/server";
import path from "path";

export const GET = (
  _request: NextRequest,
  { params }: { params: { filename: string } }
) => {
  try {
    const { filename } = params;
    const imagePath = path.join(
      process.cwd(),
      "src",
      "image",
      "serverimage",
      filename as string
    );

    if (!existsSync(imagePath)) {
      return NextResponse.json(
        {
          error: "Image not found",
        },
        { status: 404 }
      );
    }
    const extname = path.extname(imagePath).toLowerCase();
    let contentType = "image/jpeg";
    switch (extname) {
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
      case ".jpeg":
        contentType = "image/jpeg";
        break;
      default:
        contentType = "application/octet-stream";
    }

    const imageBuffer = readFileSync(imagePath);

    const response = new NextResponse(imageBuffer);
    response.headers.set("Content-Type", contentType);
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: "Error fetching image",
      },
      { status: 500 }
    );
  }
};

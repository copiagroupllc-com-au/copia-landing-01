import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { filename } = await params;

  // Decode the filename from the URL (handles %20, %28, %26 etc.)
  const decoded = decodeURIComponent(filename);

  // Sanitize: strip any path traversal attempts
  const safe = decoded.replace(/[/\\]/g, "");

  const filePath = join(process.cwd(), "public", "jd", safe);

  try {
    const buffer = await readFile(filePath);
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${safe}"`,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

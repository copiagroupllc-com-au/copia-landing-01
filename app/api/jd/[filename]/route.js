import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { filename } = await params;
  const decoded = decodeURIComponent(filename);
  // Strip any path traversal
  const safe = decoded.replace(/[/\\]/g, "");
  const filePath = join(process.cwd(), "public", "jd", safe);

  try {
    const buffer = await readFile(filePath);
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `inline; filename="${safe}"`,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

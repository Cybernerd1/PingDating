import { NextRequest, NextResponse } from "next/server";
import { EarlyAccessSchema } from "@/lib/validations";
import { addRegistration, getRegistrations } from "@/lib/early-access-store";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parseResult = EarlyAccessSchema.safeParse(body);

    if (!parseResult.success) {
      const errorMsg = parseResult.error.issues[0]?.message || "Invalid input";
      return NextResponse.json(
        {
          success: false,
          error: errorMsg,
        },
        { status: 400 }
      );
    }

    const { email, source } = parseResult.data;
    const userAgent = request.headers.get("user-agent") || undefined;
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    const result = await addRegistration(email, source, { userAgent, ip });

    if (result.isDuplicate) {
      return NextResponse.json(
        {
          success: true,
          isDuplicate: true,
          message: "You're already on the list! We'll send your early-access link when it's ready.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        isDuplicate: false,
        message: "You're on the list. We'll send your early-access link when it's ready.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Early access registration failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to complete registration. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Public health check response: does not expose internal subscriber counts or metrics
  const authHeader = request.headers.get("authorization");
  const adminSecret = process.env.ADMIN_API_KEY;

  // If authenticated admin requests stats
  if (adminSecret && authHeader === `Bearer ${adminSecret}`) {
    try {
      const list = await getRegistrations();
      return NextResponse.json({
        status: "operational",
        totalRegistrations: list.length,
        recentCount: list.filter(
          (r) => Date.now() - new Date(r.createdAt).getTime() < 24 * 60 * 60 * 1000
        ).length,
      });
    } catch {
      return NextResponse.json(
        { status: "error", error: "Failed to read registrations" },
        { status: 500 }
      );
    }
  }

  // Unauthenticated callers receive only a benign uptime status
  return NextResponse.json({ status: "operational" });
}

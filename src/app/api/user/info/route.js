import User from "../../../models/User";
import connectDB from "../../../utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const { email } = await request.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { data: existingUser },
        { status: 200 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { status: "failed", message: "Error in storing data in DB" },
      { status: 500 }
    );
  }
}

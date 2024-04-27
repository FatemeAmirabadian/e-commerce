import User from "../../models/User";
import connectDB from "../../utils/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error in connect db" }, { status: 500 });
  }
  
  const users = await User.find();

  if (!users) {
    return NextResponse.json({ message: "user not found" }, { status: 400 });
  }

  return NextResponse.json(
    {
      data: users,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  try {
    await connectDB();

    const { email, password } = await request.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "user already exists" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "please enter the email" },
        { status: 400 }
      );
    }

    if (!password) {
      return NextResponse.json(
        { error: "please enter the password" },
        { status: 400 }
      );
    }

    const newUser = await User.create({
      email,
      password,
    });

    console.log("New User:", newUser);

    return NextResponse.json(
      { message: "new user added to db" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { status: "failed", message: "Error in storing data in DB" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();

    const { email, firstName, lastName } = await request.json();

    const existingUser = await User.findOne({ email });

    existingUser.firstName = firstName || existingUser.firstName;
    existingUser.lastName = lastName || existingUser.lastName;

    await existingUser.save();

    return NextResponse.json(
      { message: "user updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { status: "failed", message: "Error in updating user" },
      { status: 500 }
    );
  }
}

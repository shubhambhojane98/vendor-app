import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();

    const vendorsList = await User.find();
    return new NextResponse(JSON.stringify(vendorsList), { status: 200 });
    // return new NextResponse("done", { status: 200 });
  } catch (err) {
    return NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newVendor = new User(body);

  try {
    await connect();

    await newVendor.save();

    return new NextResponse("Vendor has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

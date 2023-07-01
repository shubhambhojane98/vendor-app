import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const body = await request.json();

  try {
    await connect();
    const vendor = await User.findByIdAndUpdate(id, body);
    return new NextResponse(JSON.stringify(vendor), { status: 500 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();
    const vendor = await User.findByIdAndDelete(id);
    return new NextResponse(JSON.stringify(vendor), { status: 500 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  const { id } = params;
  console.log("id", id);
  try {
    await connect();
    const vendor = await User.findOne({ _id: id });
    console.log("vendor", vendor);
    return new NextResponse(JSON.stringify(vendor), { status: 500 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

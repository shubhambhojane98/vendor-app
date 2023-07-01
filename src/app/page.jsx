import AddVendor from "@/components/AddVendor";
import VendorList from "@/components/VendorList";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly min-h-screen  bg-white">
      <div className="text-center mb-5">
        <AddVendor />
      </div>
      <div className="mt-4 px-10">
        <VendorList />
      </div>
    </div>
  );
}

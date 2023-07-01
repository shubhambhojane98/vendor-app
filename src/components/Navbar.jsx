"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Navbar = () => {
  const session = useSession();

  return (
    <div className="flex justify-between items-center p-2  bg-slate-100 bottom-1">
      <h1 className="font-semibold">VendorApp</h1>
      {session.status === "authenticated" ? (
        <button className="bg-green-400 p-2" onClick={signOut}>
          Logout
        </button>
      ) : (
        <button className="bg-green-400 p-2" onClick={() => signIn("google")}>
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;

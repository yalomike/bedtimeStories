"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="items-center text-center mx-5">
      <li className="list-none">
        <button
          onCLick={() => {
            signIn;
          }}
          className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25"
        >
          Sign in
        </button>
        <button className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25 mx-2">
          Register
        </button>
      </li>
    </div>
  );
}

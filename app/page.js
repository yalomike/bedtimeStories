import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="mx-5 my-9 py-5 text-center text-4xl">
          Welcome to Bedtime Stories for Kids
        </h1>
      </div>
    </main>
  );
}

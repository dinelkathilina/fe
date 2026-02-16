import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-black p-4 text-center">
      <main className="flex flex-col items-center gap-8 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          User Management System
        </h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          A simple and secure way to manage users and access control. Login to
          your dashboard to get started.
        </p>
        <div className="flex gap-4">
          <Link href="/login">
            <Button className="px-8 py-3 text-lg">Get Started</Button>
          </Link>
          <Link href="/register">
            <Button variant="secondary" className="px-8 py-3 text-lg">
              Check Register
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

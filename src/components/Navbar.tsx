"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

const Navbar = () => {
  const { user, logout } = useAuth(); // We can ignore isLoading or token if not needed for rendering logic

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                UMS
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Hello, {user.name}
                </span>
                <Button
                  variant="secondary"
                  onClick={logout}
                  className="text-sm"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="secondary" className="text-sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" className="text-sm">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

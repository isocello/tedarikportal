import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-lightGreen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-darkGreen mb-6">
        Welcome to the Bidding Portal
      </h1>
      <nav className="space-x-6">
        <Link
          to="/tenders"
          className="bg-primaryGreen text-white px-4 py-2 rounded hover:bg-darkGreen transition"
        >
          View Tenders
        </Link>
        <Link
          to="/admin"
          className="bg-primaryGreen text-white px-4 py-2 rounded hover:bg-darkGreen transition"
        >
          Admin Panel
        </Link>
      </nav>
    </div>
  );
}

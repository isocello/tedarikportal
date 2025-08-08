// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primaryGreen p-4 text-white flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        Bidding Portal
      </Link>
      <nav className="space-x-4">
        <Link to="/tenders" className="hover:underline">
          Tenders
        </Link>
        <Link to="/admin" className="hover:underline">
          Admin
        </Link>
      </nav>
    </header>
  );
}

import React from 'react'
import { Link } from 'react-router-dom'

const sampleTenders = [
  { id: '1', title: 'Office Supplies Tender' },
  { id: '2', title: 'IT Equipment Tender' },
  { id: '3', title: 'Construction Services Tender' },
]

export default function TenderList() {
  return (
    <div>import React from "react";
import { Link } from "react-router-dom";

const sampleTenders = [
  { id: "1", title: "Office Supplies Tender" },
  { id: "2", title: "IT Equipment Tender" },
  { id: "3", title: "Construction Services Tender" },
];

export default function TenderList() {
  return (
    <div className="min-h-screen bg-lightGreen p-8">
      <h2 className="text-3xl font-semibold text-darkGreen mb-6">Tenders</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleTenders.map((t) => (
          <li
            key={t.id}
            className="bg-white rounded shadow p-4 flex justify-between items-center"
          >
            <span className="font-medium text-lg text-primaryGreen">{t.title}</span>
            <Link to={`/bid/${t.id}`}>
              <button className="bg-primaryGreen text-white px-3 py-1 rounded hover:bg-darkGreen transition">
                Make Bid
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

      <h2>Tenders</h2>
      <ul>
        {sampleTenders.map(t => (
          <li key={t.id}>
            {t.title}{' '}
            <Link to={`/bid/${t.id}`}>
              <button>Make Bid</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

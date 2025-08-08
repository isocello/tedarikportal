import React from 'react'
import { Link } from 'react-router-dom'

const sampleTenders = [
  { id: '1', title: 'Office Supplies Tender' },
  { id: '2', title: 'IT Equipment Tender' },
  { id: '3', title: 'Construction Services Tender' },
]

export default function TenderList() {
  return (
    <div>
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

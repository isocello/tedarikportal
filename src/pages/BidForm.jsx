import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function BidForm() {
  const { tenderId } = useParams()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [applicationNumber, setApplicationNumber] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [bidValue, setBidValue] = useState('')
  const [receiptFile, setReceiptFile] = useState(null)

  // Generate application number on step 2 submit
  const generateApplicationNumber = () => {
    return 'APP-' + Math.floor(100000 + Math.random() * 900000)
  }

  const nextStep = () => {
    if (step === 2 && !applicationNumber) {
      setApplicationNumber(generateApplicationNumber())
    }
    setStep(step + 1)
  }
  const prevStep = () => setStep(step - 1)

  const handleSubmit = () => {
    alert('Bid submitted! (Functionality not implemented yet)')
    navigate('/tenders')
  }

  return (
    <div>
      <h2>Bid for Tender ID: {tenderId}</h2>

      {step === 1 && (
        <div>
          <p>Step 1: Confirm Tender Selection</p>
          <button onClick={nextStep}>Continue</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p>Step 2: Enter Email and Password</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <p>Your Application Number: {applicationNumber || 'Will generate on continue'}</p>
          <button onClick={prevStep}>Back</button>{' '}
          <button onClick={nextStep} disabled={!email || !password}>
            Continue
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <p>Step 3: Enter Personal Details</p>
          <input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <br />
          <input
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <br />
          <button onClick={prevStep}>Back</button>{' '}
          <button onClick={nextStep} disabled={!name || !phone}>
            Continue
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <p>Step 4: Enter Bid Value</p>
          <input
            type="number"
            placeholder="Bid Value"
            value={bidValue}
            onChange={e => setBidValue(e.target.value)}
          />
          <br />
          <button onClick={prevStep}>Back</button>{' '}
          <button onClick={nextStep} disabled={!bidValue}>
            Continue
          </button>
        </div>
      )}

      {step === 5 && (
        <div>
          <p>Step 5: Payment (Bank Transfer Only)</p>
          <p>
            Credit card payments are disabled. Please upload your bank transfer receipt.
          </p>
          <input
            type="file"
            onChange={e => setReceiptFile(e.target.files[0])}
          />
          <br />
          <button onClick={prevStep}>Back</button>{' '}
          <button onClick={handleSubmit} disabled={!receiptFile}>
            Submit Bid
          </button>
        </div>
      )}
    </div>
  )
}

{step === 2 && (
  <div className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
    <p className="text-xl font-semibold text-primaryGreen mb-4">Step 2: Enter Email and Password</p>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primaryGreen"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primaryGreen"
    />
    <p>Your Application Number: <span className="font-semibold">{applicationNumber || "Will generate on continue"}</span></p>
    <div className="flex justify-between">
      <button onClick={prevStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition">
        Back
      </button>
      <button
        onClick={nextStep}
        disabled={!email || !password}
        className="bg-primaryGreen disabled:opacity-50 text-white px-4 py-2 rounded hover:bg-darkGreen transition"
      >
        Continue
      </button>
    </div>
  </div>
)}

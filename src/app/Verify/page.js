"use client";

export default function Verify() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md text-center w-[400px]">

        {/* Icon */}
        <div className="text-6xl mb-4">📩</div>

        <h1 className="text-2xl font-bold mb-2">
          Verify your email
        </h1>

        <p className="text-gray-600 mb-6">
          Click on the link we sent to your email to finish signup
        </p>

        {/* Buttons */}
        <div className="space-y-3">

          <button
            onClick={() => window.open("https://mail.google.com")}
            className="w-full border p-2 rounded hover:bg-gray-100"
          >
            Open Gmail
          </button>

          <button
            onClick={() => window.open("https://outlook.live.com")}
            className="w-full border p-2 rounded hover:bg-gray-100"
          >
            Open Outlook
          </button>

        </div>

        <p className="text-sm text-gray-500 mt-4">
          Didn’t get email? <span className="text-blue-600 cursor-pointer">Resend</span>
        </p>

      </div>

    </div>
  );
}
import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto py-8">
      <div
        className="bg-gradient-to-r p-6 rounded-lg shadow-lg"
        style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)" }}
      >
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">
          If you need support or have any questions, feel free to reach out to us below:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Email: <a href="mailto:support@peoplespower.com" className="text-blue-200 hover:underline">support@peoplespower.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="text-blue-200 hover:underline">+1 (234) 567-890</a></li>
          <li>Address: Tennessee State University, 3500 John A Merritt Blvd, Nashville, TN 37209</li>
        </ul>
        <p className="mt-6 text-sm text-gray-200">
          Our support team is available Monday to Friday, 9:00 AM to 5:00 PM (local time).
        </p>
      </div>
    </div>
  );
}
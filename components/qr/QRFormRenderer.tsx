'use client';

import { useState } from 'react';

export default function QRFormRenderer({ 
  category, 
  formData, 
  setFormData 
}: { 
  category: string | null;
  formData: any;
  setFormData: (data: any) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-8 w-full max-w-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter Content</h2>

      <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
        {!category && (
          <p className="text-gray-500 italic">Select a category to get started.</p>
        )}

        {category === 'link' && (
          <input
            type="url"
            name="url"
            placeholder="Enter a URL (e.g. https://example.com)"
            onChange={handleChange}
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        {category === 'mail' && (
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            onChange={handleChange}
            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        {category === 'sms' && (
          <div className="space-y-3">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="SMS message"
              rows={3}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Add more category-specific forms here */}
      </div>
    </div>
  );
}
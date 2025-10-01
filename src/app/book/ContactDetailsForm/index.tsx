'use client'
import React from "react";

interface ContactDetailsFormProps {
  name: string;
  setName: (v: string) => void;
  suburb: string;
  setSuburb: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  preferedContactMethod: string;
  setPreferedContactMethod: (v: string) => void;
}

export const ContactDetailsForm: React.FC<ContactDetailsFormProps> = ({
  name,
  setName,
  suburb,
  setSuburb,
  phone,
  setPhone,
  email,
  setEmail,
  preferedContactMethod,
  setPreferedContactMethod,
}) => {
  return (
    <div className="space-y-4 text-white">
      <fieldset className="space-y-2 border p-3 rounded">
        <label htmlFor="name" className="text-lg">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded bg-white text-black w-full"
        />
      </fieldset>

      <fieldset className="space-y-2 border p-3 rounded">
        <label htmlFor="suburb" className="text-lg">Suburb/Area:</label>
        <input
          id="suburb"
          type="text"
          value={suburb}
          onChange={(e) => setSuburb(e.target.value)}
          className="border px-2 py-1 rounded bg-white text-black w-full"
        />
      </fieldset>

      <fieldset className="space-y-2 border p-3 rounded">
        <label htmlFor="phone" className="text-lg">Phone:</label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border px-2 py-1 rounded bg-white text-black w-full"
        />
      </fieldset>

      <fieldset className="space-y-2 border p-3 rounded">
        <label htmlFor="email" className="text-lg">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1 rounded bg-white text-black w-full"
        />
      </fieldset>

      <fieldset className="space-y-2 border p-3 rounded">
        <label htmlFor="contactMethod" className="text-lg">Preferred contact method:</label>
        <select
          id="contactMethod"
          value={preferedContactMethod}
          onChange={(e) => setPreferedContactMethod(e.target.value)}
          className="border px-2 py-1 rounded w-full bg-black text-white"
        >
          <option value="">Select...</option>
          <option value="email">E-mail</option>
          <option value="phone">Phone</option>
        </select>
      </fieldset>
    </div>
  );
};

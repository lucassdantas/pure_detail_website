'use client'
import React, { useState } from "react";

// Tipos para nestedOptions
type NestedOption =
  | {
      name: string;
      type: "select";
      options: string[];
    }
  | {
      name: string;
      type: "text";
      placeholder: string;
      options: never[];
    };

type Field = {
  name: string;
  nameToCode: string;
  type: "checkbox";
  nestedOptions: NestedOption[];
};

export const VehicleInfoForm = () => {
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({});

  const fields: Field[] = [
    {
      name: "Interior Detail",
      nameToCode: "interiorDetail",
      type: "checkbox",
      nestedOptions: [
        { name: "Are there any big/serious stains that need removing?", options: ["Yes", "No"], type: "select" },
        { name: "Does your vehicle have pet hair?", options: ["Yes", "No"], type: "select" },
      ],
    },
    {
      name: "Exterior Detail",
      nameToCode: "exteriorDetail",
      type: "checkbox",
      nestedOptions: [
        { name: "Condition", options: ["Light dirty", "Average", "Heavy Dirt"], type: "select" },
      ],
    },
    {
      name: "Full Detail",
      nameToCode: "fullDetail",
      type: "checkbox",
      nestedOptions: [
        { name: "Condition", options: ["Light dirty", "Average", "Heavy Dirt"], type: "select" },
        { name: "Are there any big/serious stains that need removing?", options: ["Yes", "No"], type: "select" },
        { name: "Does your vehicle have pet hair?", options: ["Yes", "No"], type: "select" },
      ],
    },
    {
      name: "Headlight Restoration",
      nameToCode: "headlightRestoration",
      type: "checkbox",
      nestedOptions: [
        { name: "Are there any cracks in your headlights", options: ["Yes", "No"], type: "select" },
      ],
    },
    {
      name: "Plastic Restoration",
      nameToCode: "plasticRestoration",
      type: "checkbox",
      nestedOptions: [],
    },
    {
      name: "Car Polish",
      nameToCode: "carPolish",
      type: "checkbox",
      nestedOptions: [
        { name: "Condition of paint", options: ["Light Scratches", "Medium scratches", "Heavy scratches"], type: "select" },
      ],
    },
    {
      name: "Glass Polish",
      nameToCode: "glassPolish",
      type: "checkbox",
      nestedOptions: [
        { name: "Are there any cracks in the glass?", options: ["Yes", "No"], type: "select" },
      ],
    },
    {
      name: "Rims Renovation",
      nameToCode: "rimsRenovation",
      type: "checkbox",
      nestedOptions: [
        { name: "Condition of rims", options: ["Lightly Scratched", "Medium scratches", "Heavily scratched/damaged"], type: "select" },
      ],
    },
    {
      name: "Engine Bay Clean",
      nameToCode: "engineBayClean",
      type: "checkbox",
      nestedOptions: [],
    },
    {
      name: "Ceramic Coating",
      nameToCode: "ceramicCoating",
      type: "checkbox",
      nestedOptions: [],
    },
    {
      name: "Vinyl Wrap",
      nameToCode: "vinylWrap",
      type: "checkbox",
      nestedOptions: [
        { name: "What are you looking for?", type: "text", placeholder: "e.g. full car wrap, roof wrap, bonnet wrap", options: [] },
      ],
    },
  ];

  const handleCheckboxChange = (name: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <form className="space-y-4 text-white">
      <fieldset>
        <label htmlFor={"Vehicle"} className="text-lg">
          Vehicle:
        </label>
        <input placeholder="Make, Model " className="border px-2 py-1 rounded bg-white text-black" />
      </fieldset>

      <h3 className="text-xl font-semibold">Services Selection</h3>

      {fields.map((field) => (
        <fieldset key={field.nameToCode} className="space-y-2 border p-3 rounded">
          <div>
            <input
              name={field.nameToCode}
              id={field.nameToCode}
              type={field.type}
              checked={!!selectedServices[field.nameToCode]}
              onChange={() => handleCheckboxChange(field.nameToCode)}
            />
            <label htmlFor={field.nameToCode} className="ml-2 text-lg">
              {field.name}
            </label>
          </div>

          {/* Mostrar nestedOptions apenas se o checkbox estiver marcado */}
          {selectedServices[field.nameToCode] &&
            field.nestedOptions.map((nested) => (
              <div key={nested.name} className="ml-6 mt-2">
                <label className="block text-sm font-medium">{nested.name}</label>
                {nested.type === "select" ? (
                  <select className="border px-2 py-1 rounded w-full bg-black text-white">
                    {nested.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder={nested.placeholder}
                    className="border px-2 py-1 rounded w-full bg-white text-black"
                  />
                )}
              </div>
            ))}
        </fieldset>
      ))}

      <fieldset>
        <label htmlFor={"optionalUpload"}>Upload photos (optional)</label>
        <input name="optionalUpload" id="optionalUpload" type="file" className="block mt-1" />
      </fieldset>
    </form>
  );
};

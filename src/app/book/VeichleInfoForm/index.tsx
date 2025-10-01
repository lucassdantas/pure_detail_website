import React, { useState } from "react";

type NestedOption = {
  name: string;
  type: "select" | "text";
  options?: string[];
  placeholder?: string;
};

type Field = {
  name: string;
  nameToCode: string;
  type: "checkbox";
  nestedOptions: NestedOption[];
};

interface VehicleInfoFormProps {
  onChange: (data: Record<string, any>) => void;
}

export const VehicleInfoForm: React.FC<VehicleInfoFormProps> = ({ onChange }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [photos, setPhotos] = useState<File[]>([]);

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

  const handleCheckboxChange = (field: Field, checked: boolean) => {
    const updatedData = { ...formData, [field.nameToCode]: checked ? {} : false };
    setFormData(updatedData);
    onChange({ ...updatedData, photos });
  };

  const handleNestedChange = (fieldCode: string, optionName: string, value: string) => {
    const updatedData = {
      ...formData,
      [fieldCode]: { ...formData[fieldCode], [optionName]: value },
    };
    setFormData(updatedData);
    onChange({ ...updatedData, photos });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = [...photos, ...Array.from(e.target.files)];
      setPhotos(newPhotos);
      onChange({ ...formData, photos: newPhotos });
    }
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
    onChange({ ...formData, photos: newPhotos });
  };

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold">Vehicle Info</h2>
      {fields.map((field) => (
        <fieldset key={field.nameToCode} className="border border-neutral-200 p-4 rounded bg-black hover:border-white">
          <label className="flex items-center gap-2 cursor-pointer w-full ">
            <input
              type="checkbox"
              checked={!!formData[field.nameToCode]}
              onChange={(e) => handleCheckboxChange(field, e.target.checked)}
              className="w-4 h-4 cursor-pointer "
            />
            <span className="font-medium">{field.name}</span>
          </label>

          {formData[field.nameToCode] &&
            field.nestedOptions.map((nested, idx) => (
              <div key={idx} className="mt-2 ml-6">
                <label className="block text-sm font-medium mb-1">{nested.name}</label>
                {nested.type === "select" ? (
                  <select
                    className="border rounded p-2 w-full hover:border-light-yellow bg-black"
                    onChange={(e) => handleNestedChange(field.nameToCode, nested.name, e.target.value)}
                  >
                    <option value="">Select...</option>
                    {nested.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder={nested.placeholder}
                    className="border rounded p-2 w-full outline-0"
                    onChange={(e) => handleNestedChange(field.nameToCode, nested.name, e.target.value)}
                  />
                )}
              </div>
            ))}
        </fieldset>
      ))}

      {/* Upload de fotos */}
      <fieldset className="space-y-2 border p-4 rounded">
        <label htmlFor="photos" className="text-lg font-medium">Upload Photos (optional)</label>

        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 cursor-pointer hover:border-light-yellow transition">
          <input
            type="file"
            id="photos"
            multiple
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />
          <label htmlFor="photos" className=" cursor-pointer font-semibold">
            Click to upload or drag & drop
          </label>
          <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 5MB each</p>
        </div>

        {photos.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-3">
            {photos.map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="h-24 w-24 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={() => handleRemovePhoto(index)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </fieldset>
    </form>
  );
};

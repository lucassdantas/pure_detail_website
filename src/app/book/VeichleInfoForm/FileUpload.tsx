import React, { useState } from "react";

interface FileUploadProps {
  files: File[];
  setFiles: (files: File[]) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ files, setFiles }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const handleRemove = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  return (
    <fieldset className="space-y-2 border p-3 rounded">
      <label htmlFor="optionalUpload" className="text-lg">Upload photos (optional)</label>

      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 cursor-pointer hover:border-light-yellow transition">
        <input
          type="file"
          id="optionalUpload"
          multiple
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        <label
          htmlFor="optionalUpload"
          className="text-blue-500 cursor-pointer font-semibold"
        >
          Click to upload or drag & drop
        </label>
        <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 5MB each</p>
      </div>

      {files.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mt-3">
          {files.map((file, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="h-24 w-24 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </fieldset>
  );
};

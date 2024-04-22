import React from 'react'

function TextInput({ label, type, value, onChange, required }) {
    return (
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor={label}>
            {label}
          </label>
          <input
            type={type}
            id={label}
            value={value}
            onChange={onChange}
            required={required}
            className="border border-gray-300 px-3 py-2 rounded-md mt-1 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      );
}

export default TextInput

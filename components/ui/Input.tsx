import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', value, onChange, required = false, placeholder }) => {const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleBlur = () => {
    if (required && !value) {
      setIsValid(false);} else {
      setIsValid(true);
    }
  };

  return (
    <div className="mb-6">
      <motion.div
        className={block text-lg font-semibold mb-2 ${isFocused || value ? 'text-pink-500' : 'text-white'}}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          handleBlur();
        }}
      >
        {label}
      </motion.label>
      <motion.div
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={w-full p-3 border-2 rounded-md ${isValid ? 'border-white' : 'border-red-500'} focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 bg-white text-gray-800}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          handleBlur();
        }}
      />
      {!isValid && <p className="text-red-500 text-sm">This field is required.</p>}
    </div>
  );
};

export default Input;
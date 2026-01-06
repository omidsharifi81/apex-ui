import React from 'react';

export const Checkbox = ({ 
  label, 
  checked, 
  onChange, 
  disabled = false,
  className = '',
  labelClassName = '',
  ...props 
}) => {
  return (
    <label className={`group flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50/50 cursor-pointer transition-all ${
      checked ? 'bg-primary-50 border-primary-400' : 'bg-white'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="hidden"
        {...props}
      />
      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
        checked 
          ? 'bg-primary-600 border-primary-600 shadow-sm' 
          : 'border-gray-300 group-hover:border-primary-400'
      }`}>
        {checked && (
          <svg 
            className="w-3.5 h-3.5 text-white"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className={`text-sm font-medium text-gray-700 group-hover:text-gray-900 select-none flex-1 ${labelClassName}`}>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;

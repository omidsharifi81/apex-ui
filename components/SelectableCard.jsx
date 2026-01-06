import React from 'react';
import clsx from 'clsx';
import { CheckCircle, Circle } from 'lucide-react';

/**
 * SelectableCard - A card component that can be selected like a radio button
 * 
 * @param {boolean} selected - Whether the card is currently selected
 * @param {function} onSelect - Callback function when card is clicked
 * @param {string} title - The main title text
 * @param {string} description - Optional description text
 * @param {React.ReactNode} icon - Optional icon component to display
 * @param {boolean} disabled - Whether the card is disabled
 * @param {string} className - Additional CSS classes
 */
const SelectableCard = ({
  selected = false,
  onSelect,
  title,
  description,
  icon,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      className={clsx(
        'p-4 border-2 rounded-lg text-left transition-all',
        selected
          ? 'border-primary-500 bg-primary-50'
          : 'border-gray-300 hover:border-primary-300 hover:bg-gray-50',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox Icon */}
        {selected ? (
          <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
        ) : (
          <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}

        {/* Optional Icon */}
        {icon && (
          <div className="flex-shrink-0 text-gray-600">
            {icon}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900">{title}</div>
          {description && (
            <div className="text-sm text-gray-500 mt-1">{description}</div>
          )}
        </div>
      </div>
    </button>
  );
};

export default SelectableCard;

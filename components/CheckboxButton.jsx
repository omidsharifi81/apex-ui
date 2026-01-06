import { CheckCircle, Circle } from 'lucide-react';

/**
 * CheckboxButton Component
 * A styled button that acts as a checkbox with icon and label
 * 
 * @param {boolean} checked - Whether the checkbox is checked
 * @param {function} onChange - Callback when checkbox state changes
 * @param {ReactNode} icon - Icon to display (from lucide-react)
 * @param {string} label - Text label
 * @param {boolean} disabled - Whether the checkbox is disabled
 * @param {string} className - Additional CSS classes
 */
export const CheckboxButton = ({ 
  checked = false, 
  onChange, 
  icon: Icon, 
  label, 
  disabled = false,
  className = '' 
}) => {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
        checked
          ? 'border-primary-500 bg-primary-50 text-primary-700'
          : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {checked ? (
        <CheckCircle className="w-4 h-4" />
      ) : (
        <Circle className="w-4 h-4" />
      )}
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

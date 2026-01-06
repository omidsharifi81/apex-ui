import { CheckCircle, Circle } from 'lucide-react';

/**
 * SettingToggle Component
 * A toggleable card/button for binary settings with visual feedback
 * 
 * @param {boolean} checked - Whether the setting is active
 * @param {function} onChange - Callback when setting is toggled
 * @param {string} title - Setting title
 * @param {string} descriptionWhenChecked - Description shown when checked
 * @param {string} descriptionWhenUnchecked - Description shown when unchecked
 * @param {string} className - Additional CSS classes
 */
export const SettingToggle = ({ 
  checked = false, 
  onChange, 
  title,
  descriptionWhenChecked,
  descriptionWhenUnchecked,
  className = '' 
}) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
        checked 
          ? 'border-primary-500 bg-primary-50' 
          : 'border-gray-300 bg-white hover:border-gray-400'
      } ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          {checked ? (
            <CheckCircle className="w-5 h-5 text-primary-600" />
          ) : (
            <Circle className="w-5 h-5 text-gray-400" />
          )}
        </div>
        <div className="flex-1">
          <div className="font-medium text-gray-900 mb-1">
            {title}
          </div>
          <div className="text-sm text-gray-600">
            {checked ? descriptionWhenChecked : descriptionWhenUnchecked}
          </div>
        </div>
      </div>
    </button>
  );
};

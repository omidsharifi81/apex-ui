import { Loader2 } from 'lucide-react';

/**
 * Toggle (Switch) Component
 * RTL-safe toggle switch with optional loading state
 *
 * @param {boolean} checked - Whether the toggle is on
 * @param {function} onChange - Callback when toggled, receives new boolean value
 * @param {boolean} disabled - Disables interaction
 * @param {boolean} loading - Shows a spinner instead of the knob
 * @param {string} size - 'sm' | 'md' (default: 'md')
 * @param {string} color - Tailwind bg class when active (default: 'bg-primary-600')
 * @param {string} className - Additional classes on the outer button
 */
export const Toggle = ({
  checked = false,
  onChange,
  disabled = false,
  loading = false,
  size = 'md',
  color = 'bg-primary-600',
  className = '',
}) => {
  const sizes = {
    sm: { track: 'h-5 w-9',  knob: 'h-3 w-3', on: 'translate-x-5', off: 'translate-x-1' },
    md: { track: 'h-6 w-11', knob: 'h-4 w-4', on: 'translate-x-6', off: 'translate-x-1' },
  };
  const s = sizes[size] || sizes.md;

  return (
    <button
      type="button"
      dir="ltr"
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && !loading && onChange(!checked)}
      disabled={disabled || loading}
      className={`relative inline-flex ${s.track} items-center rounded-full overflow-hidden transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
        checked ? color : 'bg-gray-300'
      } ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {loading ? (
        <Loader2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white animate-spin" />
      ) : (
        <span
          className={`inline-block ${s.knob} transform rounded-full bg-white transition-transform ${
            checked ? s.on : s.off
          }`}
        />
      )}
    </button>
  );
};

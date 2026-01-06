import { clsx } from 'clsx';

/**
 * Card Component
 * A container with border, shadow, and rounded corners
 * 
 * @param {ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {string} padding - Padding size: 'none', 'sm', 'md', 'lg'
 */
export function Card({ children, className, padding = 'md' }) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-sm border border-gray-100',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * CardHeader Component
 * Header section of a card with optional title, description, and icon
 * 
 * @param {ReactNode} children - Custom header content (if title not provided)
 * @param {string} className - Additional CSS classes
 * @param {string} title - Header title
 * @param {string} description - Header description
 * @param {ReactNode} icon - Icon element
 */
export function CardHeader({ children, className, title, description, icon }) {
  if (title) {
    return (
      <div className={clsx('px-6 py-4 border-b border-gray-100', className)}>
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-700">{icon}</span>}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
    );
  }
  return (
    <div className={clsx('px-6 py-4 border-b border-gray-100', className)}>{children}</div>
  );
}

/**
 * CardTitle Component
 * Title text for card header
 * 
 * @param {ReactNode} children - Title text
 * @param {string} className - Additional CSS classes
 */
export function CardTitle({ children, className }) {
  return <h3 className={clsx('text-lg font-semibold text-gray-900', className)}>{children}</h3>;
}

/**
 * CardDescription Component
 * Description text for card header
 * 
 * @param {ReactNode} children - Description text
 * @param {string} className - Additional CSS classes
 */
export function CardDescription({ children, className }) {
  return <p className={clsx('text-sm text-gray-500 mt-1', className)}>{children}</p>;
}

/**
 * CardContent Component
 * Main content area of a card
 * 
 * @param {ReactNode} children - Content
 * @param {string} className - Additional CSS classes
 */
export function CardContent({ children, className }) {
  return <div className={clsx('p-6', className)}>{children}</div>;
}

/**
 * CardFooter Component
 * Footer section of a card
 * 
 * @param {ReactNode} children - Footer content
 * @param {string} className - Additional CSS classes
 */
export function CardFooter({ children, className }) {
  return <div className={clsx('px-6 py-4 border-t border-gray-100 bg-gray-50', className)}>{children}</div>;
}

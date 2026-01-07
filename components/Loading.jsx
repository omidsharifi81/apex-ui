import React from 'react';
import '../styles/components/_loading.css';

/**
 * Loading component with animated logo
 * @param {Object} props
 * @param {string} props.logo - Logo image URL or path
 * @param {string} props.text - Optional loading text
 * @param {string} props.size - Size: 'sm', 'md', 'lg' (default: 'md')
 * @param {boolean} props.fullScreen - Show as fullscreen overlay
 * @param {string} props.animation - Animation type: 'pulse', 'spin', 'bounce', 'fade' (default: 'pulse')
 */
export const Loading = ({ 
  logo, 
  text = 'Loading...', 
  size = 'md', 
  fullScreen = false,
  animation = 'pulse'
}) => {
  const sizeClasses = {
    sm: 'loading-logo--sm',
    md: 'loading-logo--md',
    lg: 'loading-logo--lg'
  };

  const animationClass = `loading-logo--${animation}`;

  const content = (
    <div className="loading-content">
      <div className={`loading-logo ${sizeClasses[size]} ${animationClass}`}>
        {logo && <img src={logo} alt="Loading" />}
      </div>
      {text && <div className="loading-text">{text}</div>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="loading-overlay">
        {content}
      </div>
    );
  }

  return (
    <div className="loading-container">
      {content}
    </div>
  );
};

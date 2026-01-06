/**
 * Shared validation utilities for form fields
 */

/**
 * Get nested value from object using dot notation
 * @param {Object} obj - The object to get value from
 * @param {string} path - Dot-separated path (e.g., 'auth.username')
 * @returns {*} The value at the path
 */
export const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
};

/**
 * Validate required fields in a config object against a schema
 * @param {Object} config - The config object to validate
 * @param {Object} schema - The schema with field definitions
 * @param {Function} getValueFn - Optional function to get nested values (default: getNestedValue)
 * @returns {{ isValid: boolean, errors: Array<{field: string, message: string}> }}
 */
export const validateRequiredFields = (config, schema, getValueFn = getNestedValue) => {
  const errors = [];

  if (!schema) {
    return { isValid: true, errors };
  }

  for (const [fieldName, fieldSchema] of Object.entries(schema)) {
    if (fieldSchema.required) {
      const value = getValueFn(config, fieldName);
      
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        errors.push({
          field: fieldName,
          message: `${fieldSchema.label || fieldName} is required`
        });
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validate a single field
 * @param {*} value - The field value
 * @param {Object} fieldSchema - The field schema
 * @returns {{ isValid: boolean, error: string|null }}
 */
export const validateField = (value, fieldSchema) => {
  if (fieldSchema.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
    return {
      isValid: false,
      error: `${fieldSchema.label || 'This field'} is required`
    };
  }

  // Type-specific validation
  if (value && fieldSchema.type === 'number' && isNaN(Number(value))) {
    return {
      isValid: false,
      error: `${fieldSchema.label || 'This field'} must be a number`
    };
  }

  if (value && fieldSchema.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return {
      isValid: false,
      error: `${fieldSchema.label || 'This field'} must be a valid email`
    };
  }

  if (value && fieldSchema.pattern && !new RegExp(fieldSchema.pattern).test(value)) {
    return {
      isValid: false,
      error: fieldSchema.patternMessage || `${fieldSchema.label || 'This field'} format is invalid`
    };
  }

  if (value && fieldSchema.minLength && value.length < fieldSchema.minLength) {
    return {
      isValid: false,
      error: `${fieldSchema.label || 'This field'} must be at least ${fieldSchema.minLength} characters`
    };
  }

  if (value && fieldSchema.maxLength && value.length > fieldSchema.maxLength) {
    return {
      isValid: false,
      error: `${fieldSchema.label || 'This field'} must not exceed ${fieldSchema.maxLength} characters`
    };
  }

  return { isValid: true, error: null };
};

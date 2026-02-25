import { ComponentType } from 'react';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info';
  icon?: LucideIcon;
}

export interface CheckboxProps {
  label: string | ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
}

export interface ToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
  size?: 'sm' | 'md';
  color?: string;
  className?: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps>;
export const Checkbox: React.FC<CheckboxProps>;
export const Toggle: React.FC<ToggleProps>;

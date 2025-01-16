import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Define checkbox variants and additional features
const checkboxVariants = cva(
  'inline-flex items-center gap-2 cursor-pointer select-none',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base', // Default medium size
        lg: 'text-lg',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

// Define CheckboxProps by extending VariantProps and React's input attributes
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof checkboxVariants> & {
    label?: string; // Optional label text
    className?: string; // Custom class names
  };

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  size,
  disabled,
  label,
  ...props
}) => {
  return (
    <label
      className={twMerge(
        checkboxVariants({ size, disabled }),
        className
      )}
    >
      <input
        type="checkbox"
        className={twMerge(
          'form-checkbox border-gray-300 rounded focus:ring focus:ring-blue-300',
          size === 'sm' && 'h-3 w-3',
          size === 'lg' && 'h-5 w-5'
        )}
        disabled={disabled}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;

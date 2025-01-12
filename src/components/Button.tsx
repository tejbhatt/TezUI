import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Define button variants and additional features
const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring transition duration-150',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
        success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300',
        info: 'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-300',
        link: 'text-blue-500 hover:underline focus:ring-blue-300',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl',
      },
      block: {
        true: 'w-full',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      block: false,
      disabled: false,
    },
  }
);

// Define ButtonProps by extending VariantProps and React's ButtonHTMLAttributes
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string; // Optional custom class names
    loading?: boolean; // Show a loading spinner
  };

const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant, 
  size, 
  block, 
  disabled, 
  loading, 
  children, 
  ...props 
}) => {
  return (
    <button
      className={twMerge(
        buttonVariants({ variant, size, block, disabled }),
        className
      )}
      disabled={disabled || loading} // Disable when loading
      {...props}
    >
      {loading ? (
        <span className="inline-flex items-center">
          <svg
            className="animate-spin h-4 w-4 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

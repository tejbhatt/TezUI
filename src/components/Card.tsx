import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';


const cardVariants = cva(
    'p-8 border rounded shadow-md transition duration-150',
    {
      variants: {
        variant: {
          primary: 'bg-white border-gray-200 shadow-md',
          secondary: 'bg-gray-100 border-gray-300 shadow-sm',
          outlined: 'bg-transparent border-gray-400 shadow-none',
        },
        size: {
          sm: 'max-w-xs',
          md: 'max-w-md',
          lg: 'max-w-lg',
        },
        rounded: {
          true: 'rounded-lg',
          false: 'rounded-none',
        },
      },
      defaultVariants: {
        variant: 'primary',
        size: 'md',
        rounded: true,
      },
    }
  );
  
  type CardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;
  
  const Card: React.FC<CardProps> = ({ className, variant, size, rounded, children, ...props }) => (
    <div className={twMerge(cardVariants({ variant, size, rounded }), className)} {...props}>
      {children}
    </div>
  );
  
  export default Card;
  

import React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, ...props }, ref) => {
    const id = props.id || React.useId();
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={id}
            className={cn(
              'flex h-14 w-full rounded-md border px-4 py-3 text-sm',
              'focus:outline-none focus:ring-2 focus:ring-purple-500/20',
              {
                'border-gray-300 focus:border-purple-500': !error,
                'border-error focus:border-error focus:ring-error/20 pr-10': !!error,
                'border-purple-500 ring-2 ring-purple-500/20': props['aria-activedescendant']
              },
              className
            )}
            ref={ref}
            {...props}
          />
          {error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <AlertCircle className="h-6 w-6 text-error" aria-hidden="true" />
            </div>
          )}
        </div>
        {(helperText || error) && (
          <p
            className={cn("mt-1 text-sm", {
              "text-gray-500": !error && helperText,
              "text-error": error
            })}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };

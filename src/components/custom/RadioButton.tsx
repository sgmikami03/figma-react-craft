
import React from 'react';
import { cn } from '@/lib/utils';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ className, label, ...props }, ref) => {
    const id = props.id || React.useId();
    
    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="radio"
            id={id}
            className="peer h-6 w-6 opacity-0 absolute"
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              'h-6 w-6 rounded-full border border-gray-300 flex items-center justify-center',
              'peer-checked:border-purple-500 peer-focus:ring-2 peer-focus:ring-purple-500/20',
              className
            )}
          >
            <div className="h-3 w-3 rounded-full bg-purple-500 opacity-0 peer-checked:opacity-100" />
          </div>
        </div>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';

export { RadioButton };

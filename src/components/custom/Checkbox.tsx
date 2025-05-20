
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="checkbox"
            className="peer h-6 w-6 opacity-0 absolute"
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              'h-6 w-6 rounded-md border border-gray-300 flex items-center justify-center',
              'peer-checked:bg-purple-500 peer-checked:border-purple-500',
              'peer-focus:ring-2 peer-focus:ring-purple-500/20',
              className
            )}
          >
            <Check className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" />
          </div>
        </div>
        {props.id && props['aria-label'] && (
          <label
            htmlFor={props.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {props['aria-label']}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };

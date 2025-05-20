
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Dropdown({
  label,
  options,
  value,
  onChange,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);
  
  const handleSelect = (option: DropdownOption) => {
    setSelectedValue(option.value);
    if (onChange) onChange(option.value);
    setIsOpen(false);
  };
  
  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'w-full flex items-center justify-between rounded-md border px-4 py-3',
            'focus:outline-none focus:ring-2 focus:ring-purple-500/20',
            isOpen ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-300',
            className
          )}
        >
          <span className="text-gray-700">
            {selectedOption?.label || 'Dropdown option'}
          </span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-purple-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-purple-500" />
          )}
        </button>
        
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
            <ul className="py-1">
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    'px-4 py-3 cursor-pointer text-sm',
                    selectedValue === option.value
                      ? 'bg-purple-500 text-white'
                      : 'hover:bg-gray-100'
                  )}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

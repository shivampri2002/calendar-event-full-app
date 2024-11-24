import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    multiline?: boolean;
}

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
    ({ label, error, className, multiline, ...props }, ref) => {
        const inputClasses = clsx(
            'block w-full rounded-md border-gray-300 shadow-sm',
            'focus:border-blue-500 focus:ring-blue-500',
            'sm:text-sm',
            'py-2 px-3', 
            {
                'border-red-500 text-red-900': error,
            },
            className
        );

        const commonProps = {
            className: inputClasses,
            ...props,
        };

        return (
            <div>
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}
                {multiline ? (
                    <textarea
                        {...commonProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        rows={3}
                    />
                ) : (
                    <input
                        {...commonProps}
                        ref={ref as React.Ref<HTMLInputElement>}
                    />
                )}
                {error && (
                    <p className="mt-1 text-sm text-red-600">{error}</p>
                )}
            </div>
        );
    }
);

import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    isLoading,
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                'px-4 py-2 rounded-md font-medium transition-colors',
                {
                    'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
                    'bg-gray-200 text-gray-800 hover:bg-gray-300': variant === 'secondary',
                    'opacity-75 cursor-not-allowed': isLoading,
                },
                className
            )}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
};

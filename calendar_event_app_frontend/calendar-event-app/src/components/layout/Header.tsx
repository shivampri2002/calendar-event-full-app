import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../common/Button';

export const Header: React.FC = () => {
    const { user } = useAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Calendar App
                    </h1>
                    <div className="flex items-center space-x-4">
                        {user && (
                            <>
                                <span className="text-gray-700">
                                    {user.displayName || user.email}
                                </span>
                                <Button
                                    variant="secondary"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
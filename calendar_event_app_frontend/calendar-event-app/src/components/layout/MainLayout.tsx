import React from 'react';
import { Header } from './Header';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-6">
                {children}
            </main>
        </div>
    );
};

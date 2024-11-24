import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const LoginForm: React.FC = () => {
    const { user } = useAuth();
    if(user){
        return <Navigate to="/" replace />;
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError('Invalid login credentials');
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            setError('Google authentication failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <Input
                            label="Email address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-2"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <div>
                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                    </div>
                </form>

                <div className="text-center">
                    <Button
                        variant="secondary"
                        onClick={handleGoogleLogin}
                        className="w-full"
                    >
                        Sign in with Google
                    </Button>
                </div>
            </div>
        </div>
    );
};
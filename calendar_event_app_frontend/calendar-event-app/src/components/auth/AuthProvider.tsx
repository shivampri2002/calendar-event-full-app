import React from 'react';
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { auth } from '../../services/firebase';

interface AuthContextType {
    user: any;
    loading: boolean;
}

export const AuthContext = React.createContext<AuthContextType>({
    user: null,
    loading: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
            setUser(user);
            setLoading(false);

            if (user) {
                const idToken = await user.getIdToken(true);
                localStorage.setItem('token', idToken);
            } else {
                // Handle user sign-out
                localStorage.removeItem('token');
            }
        });

        // Listen for ID token changes
        const unsubscribeToken = onIdTokenChanged(auth, async (user) => {
            if (user) {
                const idToken = await user.getIdToken();
                localStorage.setItem('token', idToken);
            }
        });

        return () => {
            unsubscribeAuth();
            unsubscribeToken();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
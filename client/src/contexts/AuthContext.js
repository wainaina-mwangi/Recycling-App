// context/AuthContext.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';

// 1. Create the Context
const AuthContext = createContext();

// Custom hook to use the context easily
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true); // Tracks initial authentication check
    const auth = getAuth(); // Get the Firebase auth instance

    useEffect(() => {
        // --- 1. Check for Redirect Result (Handles Google Login Redirect) ---
        getRedirectResult(auth)
            .then((result) => {
                if (result && result.user) {
                    console.log("Redirect login successful:", result.user.uid);
                    // The onAuthStateChanged listener below will pick up the user shortly
                }
            })
            .catch((error) => {
                console.error("Google Redirect Error:", error);
            });

        // --- 2. Observe Authentication State (Handles ALL logins/logouts) ---
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // This function runs on component mount and whenever auth status changes
            setCurrentUser(user);
            setLoading(false); // Authentication check is complete
        });

        // Cleanup subscription on unmount
        return unsubscribe;
    }, [auth]);

    const value = {
        currentUser,
        loading,
        // You can add login/logout functions here if you want
    };

    return (
        <AuthContext.Provider value={value}>
            {/* We only render children once the loading check is complete */}
            {!loading && children} 
        </AuthContext.Provider>
    );
};
"use client";
import { useState, useEffect, useCallback } from "react";
import { account } from "@/utils/appwrite";
import { ID } from "appwrite";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  // Check session on mount and when window gains focus
  useEffect(() => {
    checkSession();

    // Recheck session when window gains focus
    const handleFocus = () => {
      checkSession();
    };

    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  // Check if user has an active session
  const checkSession = async () => {
    try {
      const session = await account.getSession("current");
      if (session) {
        setIsLoggedIn(true);
        const userData = await account.get();
        setUser(userData);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.log("No active session");
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle login
  const handleLogin = async ({ email, password }) => {
    setLoginError("");
    setIsLoading(true);

    try {
      await account.createEmailSession(email, password);
      const userData = await account.get();
      setUser(userData);
      setIsLoggedIn(true);
      return { success: true };
    } catch (error) {
      setLoginError(error.message || "Invalid credentials");
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Handle registration
  const handleRegister = async ({ email, password, name }) => {
    setLoginError("");
    setIsLoading(true);

    try {
      await account.create(ID.unique(), email, password, name);
      // Login after successful registration
      return await handleLogin({ email, password });
    } catch (error) {
      setLoginError(error.message || "Registration failed");
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await account.deleteSession("current");
      setIsLoggedIn(false);
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error("Error logging out:", error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password reset request
  const handlePasswordReset = async (email) => {
    setIsLoading(true);
    try {
      await account.createRecovery(
        email,
        "http://your-domain.com/reset-password",
      );
      return { success: true };
    } catch (error) {
      setLoginError(error.message || "Password reset failed");
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password update
  const handleUpdatePassword = async (oldPassword, newPassword) => {
    setIsLoading(true);
    try {
      await account.updatePassword(newPassword, oldPassword);
      return { success: true };
    } catch (error) {
      setLoginError(error.message || "Password update failed");
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Handle user profile update
  const handleUpdateProfile = async (updates) => {
    setIsLoading(true);
    try {
      const updatedUser = await account.updatePrefs(updates);
      setUser((prevUser) => ({
        ...prevUser,
        prefs: updatedUser.prefs,
      }));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Clear any auth errors
  const clearErrors = useCallback(() => {
    setLoginError("");
  }, []);

  return {
    isLoggedIn,
    isLoading,
    user,
    loginError,
    handleLogin,
    handleRegister,
    handleLogout,
    handlePasswordReset,
    handleUpdatePassword,
    handleUpdateProfile,
    clearErrors,
    checkSession,
  };
};

// Optional: Add TypeScript interfaces for better type safety
/*
interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials extends LoginCredentials {
  name: string;
}

interface AuthResponse {
  success: boolean;
  error?: string;
}

interface UserProfile {
  $id: string;
  email: string;
  name: string;
  prefs: Record<string, any>;
}
*/

"use client";
import { useState, useEffect, useCallback } from "react";
import { account } from "@/utils/appWrite";
import { ID } from "appwrite";

export const useAuth = () => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    user: null,
    loginError: "",
    isLoading: true,
  });

  const setAuth = useCallback((updates) => {
    setAuthState((prevState) => ({ ...prevState, ...updates }));
  }, []);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.getSession("current");
        if (session) {
          const userData = await account.get();
          setAuth({
            isLoggedIn: true,
            user: userData,
            loginError: "",
            isLoading: false,
          });
        } else {
          setAuth({
            isLoggedIn: false,
            user: null,
            loginError: "",
            isLoading: false,
          });
        }
      } catch (error) {
        setAuth({
          isLoggedIn: false,
          user: null,
          loginError: error.message || "No active session",
          isLoading: false,
        });
      }
    };

    checkSession();

    const handleFocus = () => checkSession();
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [setAuth]);

  const handleLogin = useCallback(
    async ({ email, password }) => {
      setAuth({ loginError: "", isLoading: true });
      try {
        await account.createEmailSession(email, password);
        const userData = await account.get();
        setAuth({
          isLoggedIn: true,
          user: userData,
          loginError: "",
          isLoading: false,
        });
        return { success: true };
      } catch (error) {
        setAuth({
          loginError: error.message || "Invalid credentials",
          isLoading: false,
        });
        return { success: false, error: error.message };
      }
    },
    [setAuth],
  );

  const handleRegister = useCallback(
    async ({ email, password, name }) => {
      setAuth({ loginError: "", isLoading: true });
      try {
        await account.create(ID.unique(), email, password, name);
        return await handleLogin({ email, password });
      } catch (error) {
        setAuth({
          loginError: error.message || "Registration failed",
          isLoading: false,
        });
        return { success: false, error: error.message };
      }
    },
    [handleLogin, setAuth],
  );

  const handleLogout = useCallback(async () => {
    setAuth({ isLoading: true });
    try {
      await account.deleteSession("current");
      setAuth({
        isLoggedIn: false,
        user: null,
        loginError: "",
        isLoading: false,
      });
      return { success: true };
    } catch (error) {
      setAuth({
        loginError: error.message || "Error logging out",
        isLoading: false,
      });
      return { success: false, error: error.message };
    }
  }, [setAuth]);

  const handlePasswordReset = useCallback(
    async (email) => {
      setAuth({ loginError: "", isLoading: true });
      try {
        await account.createRecovery(
          email,
          "http://your-domain.com/reset-password",
        );
        return { success: true };
      } catch (error) {
        setAuth({
          loginError: error.message || "Password reset failed",
          isLoading: false,
        });
        return { success: false, error: error.message };
      }
    },
    [setAuth],
  );

  const handleUpdatePassword = useCallback(
    async (oldPassword, newPassword) => {
      setAuth({ loginError: "", isLoading: true });
      try {
        await account.updatePassword(newPassword, oldPassword);
        return { success: true };
      } catch (error) {
        setAuth({
          loginError: error.message || "Password update failed",
          isLoading: false,
        });
        return { success: false, error: error.message };
      }
    },
    [setAuth],
  );

  const handleUpdateProfile = useCallback(
    async (updates) => {
      setAuth({ isLoading: true });
      try {
        const updatedUser = await account.updatePrefs(updates);
        setAuth({
          user: { ...authState.user, prefs: updatedUser.prefs },
          isLoading: false,
        });
        return { success: true };
      } catch (error) {
        setAuth({
          loginError: error.message || "Profile update failed",
          isLoading: false,
        });
        return { success: false, error: error.message };
      }
    },
    [authState.user, setAuth],
  );

  const clearErrors = useCallback(() => {
    setAuth({ loginError: "" });
  }, [setAuth]);

  return {
    isLoggedIn: authState.isLoggedIn,
    isLoading: authState.isLoading,
    user: authState.user,
    loginError: authState.loginError,
    handleLogin,
    handleRegister,
    handleLogout,
    handlePasswordReset,
    handleUpdatePassword,
    handleUpdateProfile,
    clearErrors,
  };
};

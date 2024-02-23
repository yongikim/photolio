"use client";

import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { cognitoConstants } from "@/constants/cognito";
import { signIn, signOut, fetchAuthSession } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";

Amplify.configure(cognitoConstants);

export type AuthContextType = {
  isAuthenticated: boolean;
  signIn: typeof signIn;
  signOut: typeof signOut;
  authenticate: () => Promise<void>;
  idToken: string;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  signIn,
  signOut,
  authenticate: () => new Promise(() => {}),
  idToken: "",
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [idToken, setIdToken] = useState("");

  const authenticate = async () => {
    try {
      const session = await fetchAuthSession();
      setIsAuthenticated(!!session.tokens);
      setIdToken(session.tokens?.idToken?.toString() || "");
    } catch {
      console.log("Error fetching auth session");
    }
  };

  useEffect(() => {
    (async () => {
      await authenticate();
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, signOut, authenticate, idToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

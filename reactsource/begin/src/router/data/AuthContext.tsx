import { createContext, useMemo, useState, type ReactNode } from "react";

type AuthContextValue = {
  id: string;
  password: string;
  isLoggedIn: boolean;
  login: (id: string, password: string) => void;
  logout: () => void;
};

export type LoginState = {
  id: string;
  password: string;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<LoginState>({
    id: "",
    password: "",
  });

  const login = (id: string, password: string) => {
    setAuth({ id, password });
  };

  const logout = () => {
    setAuth({ id: "", password: "" });
  };

  // useMemo(()=>({}),[])
  const value = useMemo(
    () => ({
      id: auth.id,
      password: auth.password,
      isLoggedIn: auth.id !== "",
      login,
      logout,
    }),
    [auth],
  );

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export { AuthProvider, AuthContext };

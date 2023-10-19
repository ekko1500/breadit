"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import {
  FC,
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface LayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const ThemeContext = createContext<any>(undefined);

export function useTheme() {
  return useContext(ThemeContext);
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");

    localStorage.setItem("dark", "true");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;

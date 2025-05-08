import { useState, useEffect } from "react";

const useAuthState = () => {
  // Verificăm localStorage pentru starea de autentificare la încărcarea aplicației
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    //storedAuth ? JSON.parse(storedAuth) :
    return  false; // Dacă există, folosim valoarea stocată
  });

  // Salvează starea de autentificare în localStorage de fiecare dată când se schimbă
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  // Setează valoarea de autentificare
  const setAuth = (value: boolean) => {
    setIsAuthenticated(value);
  };

  return [isAuthenticated, setAuth] as const; // Returnăm starea și funcția de setare
};

export default useAuthState;

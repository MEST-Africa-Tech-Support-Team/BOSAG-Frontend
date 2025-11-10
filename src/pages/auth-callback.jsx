import { useEffect } from "react";
import { useNavigate } from "react-router"; // ✅ use react-router-dom, not react-router

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token); // ✅ consistent key
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-medium">Signing you in...</p>
    </div>
  );
}

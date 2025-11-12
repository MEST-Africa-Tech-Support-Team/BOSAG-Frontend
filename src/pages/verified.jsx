import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Verified() {
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const result = params.get("status");
    setStatus(result);
    console.log("Verification status:", params);

    if (result === "success") {
      setTimeout(() => navigate("/login"), 8000);
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="p-8 bg-white shadow-md rounded-xl text-center">
        {status === "success" ? (
          <>
            <h2 className="text-2xl font-bold text-green-600">Email Verified 🎉</h2>
            <p className="mt-2 text-gray-600">Redirecting you to login...</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-red-600">Verification Failed</h2>
            <p className="mt-2 text-gray-600">
              This link may have expired or already been used.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

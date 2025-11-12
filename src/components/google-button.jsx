import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { socialLogin } from "../services/authService";

export default function GoogleButton() {
  const navigate = useNavigate(); // ✅ define it here

  const handleGoogleSuccess = async (credentialResponse) => {
  try {
    const decoded = jwtDecode(credentialResponse.credential);
    const email = decoded.email;

    const result = await socialLogin(email, "google");

    // ✅ Save token before navigating
    if (result?.token) {
      localStorage.setItem("token", result.token);
    }

    // alert(Welcome ${result.user?.firstName || "user"}!);
    navigate("/dashboard");
  } catch (error) {
    console.error("Google login failed:", error);
    alert("Google sign-in failed!");
  }
};

  const handleGoogleError = () => {
    alert("Google sign-in was cancelled or failed.");
  };

  return (
    <div className="space-y-3">
      <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />

      {/* <button
  onClick={() => socialLogin("google")}
  className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
>
  <svg className="w-5 h-5" fill="#DB4437" viewBox="0 0 24 24">
    <path d="M21.35 11.1h-9.18v2.92h5.28c-.23 1.23-1.39 3.6-5.28 3.6-3.18 0-5.78-2.61-5.78-5.82s2.6-5.82 5.78-5.82c1.81 0 3.02.77 3.71 1.43l2.52-2.44C17.11 3.3 15.02 2.4 12.17 2.4 6.91 2.4 2.67 6.65 2.67 11.9s4.24 9.5 9.5 9.5c5.5 0 9.15-3.86 9.15-9.32 0-.62-.07-1.09-.17-1.58z" />
  </svg>
  <span className="text-gray-700 font-medium">Continue with Google</span>
</button> */}

    </div>
  );
}
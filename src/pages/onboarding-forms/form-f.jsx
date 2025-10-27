import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SignaturePad from "react-signature-canvas";
import { Pencil, Upload, Trash2, CheckCircle } from "lucide-react";
import FormProgressBar from "../../components/form-header.jsx";

export default function FormStep6() {
  const navigate = useNavigate();
  const sigPadRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    signature: null,
    uploadFile: null,
    date: "",
    agreed: false,
  });

  const [isDrawing, setIsDrawing] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    const { name, signature, uploadFile, date, agreed } = formData;
    setIsFormValid(name && (signature || uploadFile) && date && agreed);
  }, [formData]);

  const clearSignature = () => {
    if (sigPadRef.current) sigPadRef.current.clear();
    setFormData((prev) => ({ ...prev, signature: null, uploadFile: null }));
    setUploadSuccess(false);
  };

  const saveSignature = () => {
    if (!sigPadRef.current.isEmpty()) {
      const data = sigPadRef.current.getTrimmedCanvas().toDataURL("image/png");
      setFormData((prev) => ({ ...prev, signature: data, uploadFile: null }));
      setIsDrawing(false);
      setUploadSuccess(false);
    }
  };

  const handleUploadSignature = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData((prev) => ({
        ...prev,
        uploadFile: event.target.result,
        signature: null,
      }));
      setUploadSuccess(true);
      setIsDrawing(false);
      setTimeout(() => setUploadSuccess(false), 2500);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please complete all required fields before submitting.");
      return;
    }
    const finalSignature = formData.signature || formData.uploadFile;
    alert("Form submitted successfully!");
    console.log("✅ Submitted Data:", { ...formData, signature: finalSignature });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <FormProgressBar currentStep={6} completedSteps={[1, 2, 3, 4, 5]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 shadow-md rounded-md border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-[#191970] mb-6 text-center sm:text-left">
            Section F: Signature
          </h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Authorized Representative Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 placeholder-gray-400 transition"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Signature
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 relative text-center hover:border-blue-400 transition-all duration-200">

              {!formData.signature && !formData.uploadFile && !isDrawing && (
                <div className="flex flex-col items-center justify-center text-gray-400 text-sm">
                  <Upload className="w-8 h-8 mb-2 opacity-70" />
                  <p>Drag & drop or click “Upload Image” to add a signature</p>
                </div>
              )}

              {/* Drawing Canvas */}
              {isDrawing && (
                <div className="flex justify-center">
                  <SignaturePad
                    ref={sigPadRef}
                    penColor="black"
                    canvasProps={{
                      width:
                        window.innerWidth < 640
                          ? 300
                          : window.innerWidth < 1024
                          ? 400
                          : 500,
                      height: 180,
                      className:
                        "border rounded-lg bg-white shadow-inner cursor-crosshair",
                    }}
                  />
                </div>
              )}

              {/* Signature Preview (Drawn or Uploaded) */}
              {(formData.signature || formData.uploadFile) && !isDrawing && (
                <div className="flex justify-center mb-3 animate-fade-in">
                  <img
                    src={formData.signature || formData.uploadFile}
                    alt="Signature Preview"
                    className="max-h-24 object-contain border border-gray-200 rounded-lg shadow-sm bg-white p-1 transition-transform hover:scale-[1.02]"
                  />
                </div>
              )}

              {/* Upload success toast */}
              {uploadSuccess && (
                <div className="absolute top-3 right-4 flex items-center bg-white border border-green-200 text-green-700 text-xs sm:text-sm px-2 py-1 rounded-md shadow-sm animate-fade-in">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Image uploaded successfully!
                </div>
              )}


              <div className="flex flex-wrap justify-center gap-3 mt-5">
                {!isDrawing ? (
                  <button
                    type="button"
                    onClick={() => setIsDrawing(true)}
                    className="flex items-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-md transition"
                  >
                    <Pencil className="w-4 h-4 mr-2" /> Draw Signature
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={saveSignature}
                    className="flex items-center bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-4 py-2 rounded-md transition"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" /> Save Signature
                  </button>
                )}

                <label className="flex items-center bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer transition">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUploadSignature}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={clearSignature}
                  className="flex items-center bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
                >
                  <Trash2 className="w-4 h-4 mr-2" /> Clear
                </button>
              </div>
            </div>
          </div>


          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, date: e.target.value }))
              }
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
            />
          </div>


          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <button
              type="button"
              onClick={() => navigate("/Terms")}
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-3 py-2 rounded-md shadow-sm transition w-full sm:w-auto"
            >
              View T & C
            </button>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={formData.agreed}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    agreed: e.target.checked,
                  }))
                }
                className="w-4 h-4 accent-blue-700 cursor-pointer"
              />
              <span>By submitting this form, you agree to our terms and conditions</span>
            </div>
          </div>


          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`font-medium px-8 py-2 rounded-md shadow-sm w-full sm:w-auto transition-colors ${
                isFormValid
                  ? "bg-blue-700 hover:bg-blue-800 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

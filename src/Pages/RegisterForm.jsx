// components/RegisterForm.jsx - Fixed with correct validation and API call
import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const RegisterForm = ({ onClose, onLoginClick }) => {
  const [formData, setFormData] = useState({
    UserName: "",
    FullName: "",
    Email: "",
    Password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  console.log('formdata', formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.UserName.trim()) {
      toast.error('Username is required');
      return false;
    }
    if (formData.UserName.length < 3) {
      toast.error('Username must be at least 3 characters');
      return false;
    }
    if (!formData.FullName.trim()) {
      toast.error('Full name is required');
      return false;
    }
    if (!formData.Email.trim()) {
      toast.error('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.Password) {
      toast.error('Password is required');
      return false;
    }
    if (formData.Password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log('response', response);
      
      if (response.data.success || response.status === 200 || response.status === 201) {
        toast.success('User Created Successfully!');
        // Reset form
        setFormData({
          UserName: "",
          FullName: "",
          Email: "",
          Password: ""
        });
        // Close form after 1.5 seconds
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        toast.error(response.data.message || 'Registration failed');
      }
    } catch (error) {
      console.log('error', error);
      if (error.response) {
        // Server responded with error status
        toast.error(error.response.data.message || 'Something went wrong');
      } else if (error.request) {
        // Request was made but no response
        toast.error('Network error. Please check your connection.');
      } else {
        // Something else happened
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-[#0B0E1A] rounded-2xl border border-gray-800 w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="sticky top-0 bg-[#0B0E1A] border-b border-gray-800 px-6 py-4 flex justify-between items-center">
            <div>
              <h2 className="text-white text-xl font-bold">Create Account</h2>
              <p className="text-gray-400 text-xs mt-1">Join Easybet and start winning!</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-5">
              {/* Social Registration Buttons */}
              <div className="space-y-3">
                <button type="button" className="w-full bg-white/5 border border-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 hover:bg-white/10 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3.97C17.782 2.074 15.054 1 12 1 7.392 1 3.397 3.622 1.394 7.441l3.872 2.324z" />
                    <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078-3.495 0-6.468-2.084-7.774-5.174l-3.89 2.375C3.326 19.285 7.247 22 12 22c2.837 0 5.375-1.062 7.336-2.874l-3.296-3.113z" />
                    <path fill="#4A90E2" d="M22 12c0-.891-.118-1.758-.337-2.599H12v4.875h5.685c-.576 1.785-1.879 3.263-3.645 4.199l3.296 3.113C20.318 19.074 22 15.79 22 12z" />
                    <path fill="#FBBC05" d="M5.266 9.765A7.068 7.068 0 0 0 4.909 12c0 1.47.354 2.862.98 4.099l3.89-2.375c-.455-.986-.711-2.08-.711-3.245 0-1.102.248-2.152.711-3.114l-3.513-2.6z" />
                  </svg>
                  <span className="text-white text-sm font-medium">Continue with Google</span>
                </button>

                <button type="button" className="w-full bg-white/5 border border-gray-700 rounded-lg py-2.5 flex items-center justify-center gap-3 hover:bg-white/10 transition">
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-white text-sm font-medium">Continue with Facebook</span>
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-[#0B0E1A] px-3 text-gray-500">OR</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Username *</label>
                  <input
                    type="text"
                    name="UserName"
                    value={formData.UserName}
                    onChange={handleChange}
                    placeholder="Choose a username"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="FullName"
                    value={formData.FullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Password *</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="Password"
                      value={formData.Password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">Password must be at least 6 characters</p>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-gray-700 bg-gray-900 text-[#00E5FF]" />
                  <span className="text-gray-400 text-xs">I confirm that I am at least 18 years old</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-gray-700 bg-gray-900 text-[#00E5FF]" />
                  <span className="text-gray-400 text-xs">
                    I agree to the <a href="#" className="text-[#00E5FF] hover:underline">Terms & Conditions</a> and <a href="#" className="text-[#00E5FF] hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-black font-bold py-3 rounded-lg text-base hover:opacity-90 transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    CREATING ACCOUNT...
                  </div>
                ) : (
                  "REGISTER"
                )}
              </button>

              {/* Login Link */}
              <div className="text-center pt-2">
                <p className="text-gray-400 text-sm">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={onLoginClick}
                    className="text-[#00E5FF] font-semibold hover:underline"
                  >
                    Login here
                  </button>
                </p>
              </div>

              {/* Responsible Gambling Notice */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-500 text-[10px] text-center">
                  ⚠️ Gambling involves risk. Please play responsibly. 18+
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default RegisterForm;
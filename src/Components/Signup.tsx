import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

interface Errors {
  name: string;
  email: string;
  password: string;
  terms: string;
}

const CreateAccountForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    password: '',
    terms: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = { name: '', email: '', password: '', terms: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
      isValid = false;
    }

    if (!formData.rememberMe) {
      newErrors.terms = 'You must accept the Terms and Conditions.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div 
      className="h-screen w-full bg-cover bg-center flex justify-center items-center" 
      style={{ backgroundImage: "url('images/room10.jpg')" }}
    >
      <div className="max-w-4xl w-full mx-4 bg-white/80 backdrop-blur-md rounded-xl shadow-lg md:flex overflow-hidden">
        
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center space-y-10 bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-white w-1/3">
          <div>
            <h4 className="text-lg">Create Your Account</h4>
            <p className="text-sm text-gray-300 mt-2">Welcome! Get started by signing up.</p>
          </div>
          <div>
            <h4 className="text-lg">Simple & Secure</h4>
            <p className="text-sm text-gray-300 mt-2">We prioritize your privacy and security.</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="w-full md:w-2/3 p-6 sm:p-12" onSubmit={handleSubmit}>
          <h3 className="text-gray-800 text-xl font-bold mb-6">Create an account</h3>

          <div className="space-y-4">
            <div>
              <label className="text-gray-600 text-sm mb-1 block">Name</label>
              <input
                name="name"
                type="text"
                className="w-full text-sm border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-1 block">Email</label>
              <input
                name="email"
                type="email"
                className="w-full text-sm border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-1 block">Password</label>
              <input
                name="password"
                type="password"
                className="w-full text-sm border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                I accept the <a href="#" className="text-blue-600 font-semibold hover:underline">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full mt-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
          >
            Create an account
          </button>

          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;

import React, { useState, useRef } from 'react';
import RotatingCircle from './Circle';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contacts: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      toast.error('Please fill all required fields correctly', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Check if environment variables are set
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
    
    console.log("Environment variables:", { serviceId, templateId, publicKey }); // Debug log
    
    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email configuration is missing. Please check environment variables.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      console.error("Missing EmailJS configuration:", { serviceId, templateId, publicKey });
      setIsSubmitting(false);
      return;
    }
    
    console.log("Form data being sent:", formData); // Debug log
    console.log("Form element:", form.current); // Debug log
    
    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current!,
        publicKey
      )
      .then(() => {
        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        
        if (form.current) {
          form.current.reset();
        }
      })
      .catch((error: any) => {
        console.error("Full error details:", error);
        console.error("Error status:", error.status);
        console.error("Error text:", error.text);
        console.error("Error message:", error.message);
        
        let errorMessage = "Failed to send message. Please try again.";
        
        if (error.status === 400) {
          errorMessage = "Invalid email configuration. Please check your EmailJS setup.";
        } else if (error.status === 403) {
          errorMessage = "Access denied. Please check your EmailJS public key.";
        } else if (error.status === 404) {
          errorMessage = "Service or template not found. Please check your EmailJS IDs.";
        } else if (error.text) {
          errorMessage = `Error: ${error.text}`;
        }
        
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };


  return (

    <div className=" w-[100%]  flex flex-col mb-10" id='contact'>
      {/* Toast Container */}
      <ToastContainer />
      
      <div className='text-4xl md:text-6xl mb-4'> CONTACT</div>
      <div className='border-1 border-[#686868] opacity-20 mb-10'></div>
      <div className="w-full flex flex-row md:justify-between">
        <div className="w-1/2 flex flex-col md:flex-row gap-4 md:gap-40">
          <div>
            <h2 className="text-sm md:text-2xl font-[300] ">CONTACT</h2>
            <p className="text-sm md:text-lg text-[#686868] hover:text-gray-300 transition-colors">+91 8269087890</p>
            <p className="text-sm md:text-lg text-[#686868] hover:text-gray-300 transition-colors">officialsagar006@gmail.com</p>
           
          </div>
          <div>
            <h2 className="text-2xl font-[300] ">SOCIALS</h2>
            <a target='_blank' href="https://github.com/sagarpandey006" className="text-[#686868] block hover:text-gray-300 transition-colors">github</a>
            <a target='_blank' href="https://www.linkedin.com/in/sagarpandey006/" className="text-[#686868] block hover:text-gray-300 transition-colors">linkedin</a>
            <a target='_blank' href="https://x.com/sagarpandey006" className="text-[#686868] block hover:text-gray-300 transition-colors">X {`(formerly twitter)`}</a>
          </div>
        </div>
        <div className='w-1/2'>
          <RotatingCircle />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between mt-10">
        <div className="w-full md:w-2/3 mt-4 mr-10">
          <div className="text-7xl md:text-9xl  font-[600] leading-none">
            LET'S
          </div>
          <div className="text-7xl md:text-9xl  font-[600] leading-none text-right">
            CONNECT
          </div>
        </div>
        <div className="w-full md:w-1/2 m-0 mt-2 md:m-10">
          <div className='w-full'>
            <form ref={form} onSubmit={submitForm}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/20 focus:border-purple-500'
                  }`}
                  required
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/20 focus:border-purple-500'
                  }`}
                  required
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors ${
                    errors.phone 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/20 focus:border-purple-500'
                  }`}
                  required
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/20 focus:border-purple-500'
                  }`}
                  required
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 transform ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed opacity-70'
                      : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    'SUBMIT'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Contacts; 
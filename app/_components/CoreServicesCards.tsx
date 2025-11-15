"use client";
import { useState } from 'react';
import { 
  FaCloud, 
  FaShieldAlt, 
  FaCogs, 
  FaCode, 
  FaNetworkWired, 
  FaComments 
} from 'react-icons/fa';
import { motion, AnimatePresence, Variants } from "framer-motion";

const CoreServicesCards = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'security', label: 'Security' },
    { id: 'managed', label: 'Managed IT' },
    { id: 'development', label: 'Development' },
    { id: 'network', label: 'Network' },
    { id: 'consulting', label: 'Consulting' }
  ];

  const services = [
    {
      id: 1,
      title: 'Cloud Solutions',
      description: 'Manage infrastructure effortlessly with our cloud deployments, optimization, and monitoring solutions.',
      category: 'cloud',
      icon: <FaCloud className="w-5 h-5" />
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced threat detection, risk management, and continuous monitoring.',
      category: 'security',
      icon: <FaShieldAlt className="w-5 h-5" />
    },
    {
      id: 3,
      title: 'Managed IT Services',
      description: 'Let our team handle everything from infrastructure to user support.',
      category: 'managed',
      icon: <FaCogs className="w-5 h-5" />
    },
    {
      id: 4,
      title: 'Software Development',
      description: 'From mobile apps to full enterprise systems — we build scalable and maintainable solutions.',
      category: 'development',
      icon: <FaCode className="w-5 h-5" />
    },
    {
      id: 5,
      title: 'Network Solutions',
      description: 'High-performance, secure, and stable networking for modern organizations.',
      category: 'network',
      icon: <FaNetworkWired className="w-5 h-5" />
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Expert advice to help you modernize operations and adopt the right technologies.',
      category: 'consulting',
      icon: <FaComments className="w-5 h-5" />
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // TS-safe variants
  const containerVariant: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]  
      }
    },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-bold text-center mb-10 text-[#4a4a43]"
        >
          Our Core Services
        </motion.h2>

        {/* Category Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-1.5 cursor-pointer rounded-full font-medium transition-all text-sm ${
                activeCategory === category.id
                  ? 'bg-primary text-black shadow-md border-primary'
                  : 'bg-white text-[#4a4a43] border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
             <motion.div
  key={service.id}
  variants={cardVariant}
  layout
  exit="exit"
  className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-xl hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm"
>
  <div className="flex items-start space-x-3 mb-4">
    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-[#4a4a43]">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-[#4a4a43]">{service.title}</h3>
  </div>

  <p className="text-gray-500 leading-relaxed">{service.description}</p>

  {/* Read More Button */}
  <button
    className="mt-4 flex items-center gap-2 text-sm font-medium text-[#4a4a43] hover:text-black transition-all group"
  >
    Read More
    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </button>
</motion.div>

            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No services found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreServicesCards;

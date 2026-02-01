import React from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../../constants';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: () => void;
  isWhatsApp?: boolean;
  className?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  isWhatsApp = true,
  className = '',
  icon = true,
  size = 'md'
}) => {
  
  const handleClick = () => {
    if (isWhatsApp) {
      window.open(getWhatsAppLink(), '_blank');
    }
    if (onClick) {
      onClick();
    }
  };

  const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full tracking-wide";
  
  const variants = {
    primary: "bg-brand-orange text-white shadow-lg hover:shadow-brand-orange/40 hover:bg-orange-500",
    secondary: "bg-brand-pink text-white shadow-lg hover:shadow-brand-pink/40 hover:bg-pink-500",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
    ghost: "text-brand-dark hover:text-brand-pink hover:bg-brand-pink/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
    >
      {isWhatsApp && icon && <MessageCircle className="w-5 h-5 mr-2" />}
      {children}
      {!isWhatsApp && icon && <ArrowRight className="w-5 h-5 ml-2" />}
    </motion.button>
  );
};

export default Button;
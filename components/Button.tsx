import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = "relative font-bold uppercase tracking-widest text-xs mono-font transition-all active:scale-95 group";
  
  if (variant === 'primary') {
    return (
      <button 
        onClick={onClick} 
        className={`${baseStyles} ${className} bg-[#35CB87] text-black overflow-visible`}
        style={{
          clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
          minWidth: '120px'
        }}
      >
        <div className="px-8 py-3.5 flex items-center justify-center">
          {children}
        </div>
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${className} border border-white/10 text-white hover:bg-white/5 px-6 py-3`}
    >
      {children}
    </button>
  );
};

export default Button;
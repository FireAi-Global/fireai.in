'use client';

import { motion } from 'framer-motion';
import styles from './ButtonStyle.module.scss';
import { buttons, transitions, colors } from '@/config/theme';

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  span?: "full" | "fit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
}

const getButtonClasses = (
  variant: "primary" | "secondary" | "ghost", 
  size: "small" | "medium" | "large", 
  span: "full" | "fit", 
  disabled: boolean,
  className?: string
) => {
  const baseClasses = "rounded-[44px] lg:rounded-[8px] transition-all duration-300";
  
  // Map variant to style classes
  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    ghost: 'bg-transparent border border-transparent text-primary-700 hover:bg-gray-50'
  }[variant];
  
  // Map size to style classes
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  }[size];
  
  const spanClasses = span === "full" ? "w-full" : "w-fit";
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  
  return `${styles.button} ${baseClasses} ${variantClasses} ${sizeClasses} ${spanClasses} ${disabledClasses} ${className || ''}`;
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "medium",
    span = "fit",
    disabled = false,
    type = "button",
    icon,
    iconPosition = "left",
    ariaLabel,
    className,
    onClick,
    children
  } = props;
  
  const buttonClass = getButtonClasses(
    variant,
    size,
    span,
    disabled,
    className
  );

  // Use theme transition presets
  const motionConfig = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.3,
      ease: transitions.timing.gentle,
    },
    whileHover: { y: -2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' },
    whileTap: { y: 0 }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      {...motionConfig}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2">{icon}</span>
      )}
    </motion.button>
  );
}

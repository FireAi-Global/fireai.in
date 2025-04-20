'use client';

import { motion } from 'framer-motion';
import styles from './ButtonStyle.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  span?: "full" | "fit";
  onClick?: () => void;
}

const getButtonClasses = (variant: "primary" | "secondary", size: "small" | "medium" | "large", span: "full" | "fit") => {
  const baseClasses = "rounded-[44px] lg:rounded-[8px]";
  const variantClasses = variant === "secondary" ? styles.secondary : styles.primary;
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  }[size];
  const spanClasses = span === "full" ? "w-full" : "w-fit";
  return `${styles.button} ${baseClasses} ${variantClasses} ${sizeClasses} ${spanClasses}`;
};

export default function Button(props: ButtonProps) {
  const buttonClass = getButtonClasses(
    props.variant || "primary",
    props.size || "medium",
    props.span || "fit"
  );

  return (
    <motion.button
      onClick={props.onClick}
      className={buttonClass}
      initial={{ opacity: 0, x: props.variant === "secondary" ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {props.children}
    </motion.button>
  );
}

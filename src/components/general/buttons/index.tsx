import { Component, JSX } from "solid-js";
import styles from "./ButtonStyle.module.scss";
import { Motion } from "solid-motionone";

interface ButtonProps {
  children: JSX.Element;
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

const Button: Component<ButtonProps> = (props) => {
  const buttonClass = () => {
    return getButtonClasses(props.variant || "primary", props.size || "medium", props.span || "fit");
  };

  return (
    <Motion.button
      onClick={props.onClick}
      class={buttonClass()}
      animate={{
        opacity: [0, 1],
        x: props.variant === "secondary" ? [100, 0] : [-100, 0],
      }}
      transition={{
        duration: 1,
        easing: "ease-in-out",
      }}
    >
      {props.children}
    </Motion.button>
  );
};

export default Button;

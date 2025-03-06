import { Component, JSX } from "solid-js";
import styles from "./ButtonStyle.module.scss";
import { Motion } from "solid-motionone";

interface ButtonProps {
  children: JSX.Element;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const Button: Component<ButtonProps> = (props) => {
  const buttonClass = () => {
    return `${styles.button} ${props.variant === "secondary" ? styles.secondary : styles.primary} ${props.size === "small" ? styles.small : props.size === "medium" ? styles.medium : styles.large}`;
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

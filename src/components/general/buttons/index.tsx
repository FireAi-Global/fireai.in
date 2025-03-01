import { Component, JSX } from "solid-js";
import styles from "./ButtonStyle.module.scss";

interface ButtonProps {
  children: JSX.Element;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: Component<ButtonProps> = (props) => {
  const buttonClass = () => {
    const baseClass = styles.button;
    if (props.variant === "secondary") {
      return `${baseClass} ${styles.secondary}`;
    }
    return `${baseClass} ${styles.primary}`;
  };

  return (
    <button onClick={props.onClick} class={buttonClass()}>
      {props.children}
    </button>
  );
};

export default Button;

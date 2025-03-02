import { Component, JSX } from "solid-js";
import styles from "./ButtonStyle.module.scss";

interface ButtonProps {
  children: JSX.Element;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: Component<ButtonProps> = (props) => {
  const buttonClass = () => {
    const baseClass = styles.button + "min-w-[160px] w-11/12 lg:w-3/12 rounded-[44px] text-[16px] cursor-pointer p-4 mx-auto lg:mx-0";
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

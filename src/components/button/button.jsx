import React from 'react';
import styles from "./button.module.css";

export const Button = (props) => {
  const {isoutline,icon,text,...rest}=props;
  return (
    <button {...rest} className={isoutline? styles.outline_btn: styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

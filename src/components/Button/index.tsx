import React, { memo } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  label: string;
  disabled: boolean;
  onClick(...args: any[]): void;
};

function Button(props: ButtonProps) {
  return (
    <button
      className={styles.button}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default memo(Button);

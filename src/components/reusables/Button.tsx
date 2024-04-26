import React from 'react'
import { IButton } from '@/types/components';
import styles from "../../app/page.module.css";

const Button: React.FC<IButton> = ({
    text,
    className,
    padding
}) => {
  return (
    <button className={`${styles.themeBtn} ${className} btn btn-primary rounded-pill`}
        style={{ paddingLeft: padding, paddingRight: padding }}
    >
        {text}
    </button>
  )
}

export default Button
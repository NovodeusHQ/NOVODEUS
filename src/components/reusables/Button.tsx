import React from 'react'
import { IButton } from '@/types/components';
import styles from "../../app/page.module.scss";

const Button: React.FC<IButton> = ({
    text,
    className,
    padding
}) => {
  return (
    <button className={`${className} themeBtn btn btn-primary rounded-pill`}
        style={{ paddingLeft: padding, paddingRight: padding }}
    >
        {text}
    </button>
  )
}

export default Button